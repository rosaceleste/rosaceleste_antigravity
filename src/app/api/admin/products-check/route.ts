import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
    const supabase = createClient(supabaseUrl, serviceRoleKey)

    const { data: products, error } = await supabase
        .from('products')
        .select('id, name, slug, image_url')
        .order('name')

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

    const withImages = products?.filter(p => p.image_url && p.image_url.length > 0) ?? []
    const withoutImages = products?.filter(p => !p.image_url || p.image_url.length === 0) ?? []

    return NextResponse.json({
        total: products?.length ?? 0,
        with_images: withImages.length,
        without_images: withoutImages.length,
        missing: withoutImages.map(p => ({ id: p.id, name: p.name, slug: p.slug })),
        sample_urls: withImages.slice(0, 3).map(p => ({ name: p.name, urls: p.image_url })),
    })
}
