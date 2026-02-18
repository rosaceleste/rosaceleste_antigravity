import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
    const supabase = createClient(supabaseUrl, serviceRoleKey)

    // 1. Ensure the 'products' storage bucket exists
    const { data: buckets } = await supabase.storage.listBuckets()
    const bucketExists = buckets?.some(b => b.name === 'products')

    if (!bucketExists) {
        const { error: bucketError } = await supabase.storage.createBucket('products', {
            public: true,
            fileSizeLimit: 52428800, // 50MB
            allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
        })
        if (bucketError) {
            return NextResponse.json({ error: 'Failed to create bucket', details: bucketError.message }, { status: 500 })
        }
    } else {
        // Update existing bucket to increase size limit
        await supabase.storage.updateBucket('products', {
            public: true,
            fileSizeLimit: 52428800, // 50MB
            allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
        })
    }

    // 2. Get all products with /api/images/ URLs
    const { data: products, error: fetchError } = await supabase
        .from('products')
        .select('id, name, slug, image_url')
        .order('name')

    if (fetchError) {
        return NextResponse.json({ error: fetchError.message }, { status: 500 })
    }

    const results = {
        migrated: 0,
        skipped: 0,
        errors: [] as { slug: string; error: string }[],
    }

    const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!

    for (const product of products ?? []) {
        if (!product.image_url || product.image_url.length === 0) {
            results.skipped++
            continue
        }

        // Check if already migrated to Supabase Storage
        const alreadyMigrated = product.image_url.every((url: string) =>
            url.includes('supabase') || url.startsWith('https://')
        )
        if (alreadyMigrated && !product.image_url.some((url: string) => url.includes('/api/images/'))) {
            results.skipped++
            continue
        }

        const newUrls: string[] = []

        for (let i = 0; i < product.image_url.length; i++) {
            const imageUrl = product.image_url[i]

            // Extract Drive file ID from /api/images/{fileId}
            const match = imageUrl.match(/\/api\/images\/([a-zA-Z0-9_-]+)/)
            if (!match) {
                // Keep non-proxy URLs as-is
                newUrls.push(imageUrl)
                continue
            }

            const fileId = match[1]
            const driveUrl = `https://drive.google.com/uc?export=download&id=${fileId}&confirm=t`

            try {
                // Download from Google Drive
                const response = await fetch(driveUrl, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (compatible; Rosaceleste/1.0)',
                    },
                    redirect: 'follow',
                })

                if (!response.ok) {
                    results.errors.push({ slug: product.slug, error: `Drive fetch failed: ${response.status} for fileId ${fileId}` })
                    newUrls.push(imageUrl) // keep old URL
                    continue
                }

                let contentType = response.headers.get('content-type') || 'image/jpeg'

                // Skip if Drive returned an HTML page (virus scan warning)
                if (contentType.includes('text/html')) {
                    results.errors.push({ slug: product.slug, error: `Drive returned HTML (virus scan page) for fileId ${fileId}` })
                    newUrls.push(imageUrl)
                    continue
                }

                // Drive sometimes returns octet-stream for images — force jpeg
                if (contentType.includes('octet-stream') || contentType.includes('application/')) {
                    contentType = 'image/jpeg'
                }

                const ext = contentType.includes('png') ? 'png' : contentType.includes('webp') ? 'webp' : 'jpg'
                const fileName = `${product.slug}-${i + 1}.${ext}`
                const buffer = await response.arrayBuffer()

                // Upload to Supabase Storage
                const { error: uploadError } = await supabase.storage
                    .from('products')
                    .upload(fileName, buffer, {
                        contentType,
                        upsert: true,
                    })

                if (uploadError) {
                    results.errors.push({ slug: product.slug, error: `Upload failed: ${uploadError.message}` })
                    newUrls.push(imageUrl)
                    continue
                }

                // Get public URL
                const { data: publicUrlData } = supabase.storage
                    .from('products')
                    .getPublicUrl(fileName)

                newUrls.push(publicUrlData.publicUrl)
            } catch (err) {
                results.errors.push({ slug: product.slug, error: String(err) })
                newUrls.push(imageUrl)
            }
        }

        // Update product with new URLs
        const { error: updateError } = await supabase
            .from('products')
            .update({ image_url: newUrls, updated_at: new Date().toISOString() })
            .eq('id', product.id)

        if (updateError) {
            results.errors.push({ slug: product.slug, error: `DB update failed: ${updateError.message}` })
        } else {
            results.migrated++
        }
    }

    return NextResponse.json({
        message: 'Image migration complete',
        results,
    })
}

export async function GET() {
    // Preview: show current image URL status without migrating
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
    const supabase = createClient(supabaseUrl, serviceRoleKey)

    const { data: products } = await supabase
        .from('products')
        .select('name, slug, image_url')
        .order('name')

    const summary = products?.map(p => ({
        name: p.name,
        slug: p.slug,
        image_count: p.image_url?.length ?? 0,
        urls: p.image_url ?? [],
        type: p.image_url?.[0]?.includes('/api/images/') ? 'drive-proxy'
            : p.image_url?.[0]?.includes('supabase') ? 'supabase-storage'
                : p.image_url?.[0] ? 'other'
                    : 'none',
    }))

    const byType = {
        'drive-proxy': summary?.filter(p => p.type === 'drive-proxy').length ?? 0,
        'supabase-storage': summary?.filter(p => p.type === 'supabase-storage').length ?? 0,
        'other': summary?.filter(p => p.type === 'other').length ?? 0,
        'none': summary?.filter(p => p.type === 'none').length ?? 0,
    }

    return NextResponse.json({ byType, products: summary })
}
