import { createClient } from '@/lib/supabase/server'
import { createClient as createBrowserClient } from '@/lib/supabase/client'
import { ProductDetails } from '@/features/products/components/product-details'
import { Container } from '@/components/layout/container'
import { notFound } from 'next/navigation'
import { Product } from '@/types'

import { Metadata, ResolvingMetadata } from 'next'

interface ProductPageProps {
    params: Promise<{
        slug: string
    }>
}

export const revalidate = 60

export async function generateMetadata(
    { params }: ProductPageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { slug } = await params
    const supabase = await createClient()

    const { data: product } = await supabase
        .from('products')
        .select('name, description, image_url')
        .eq('slug', slug)
        .eq('is_active', true)
        .single()

    if (!product) {
        return {
            title: 'Producto No Encontrado',
        }
    }

    const previousImages = (await parent).openGraph?.images || []
    const productImages = product.image_url && product.image_url.length > 0
        ? product.image_url.map((img: string) => ({ url: img }))
        : previousImages

    return {
        title: product.name,
        description: product.description.substring(0, 160),
        openGraph: {
            title: product.name,
            description: product.description.substring(0, 160),
            images: productImages,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: product.name,
            description: product.description.substring(0, 160),
            images: productImages.map((img: { url: string }) => img.url),
        }
    }
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params
    const supabase = await createClient()

    // 1. Fetch product from Supabase
    const { data: product } = await supabase
        .from('products')
        .select('*')
        .eq('slug', slug)
        .eq('is_active', true)
        .single()

    if (!product) {
        notFound()
    }

    // 2. Fetch related products from Supabase
    const { data: relatedProducts } = await supabase
        .from('products')
        .select('*')
        .eq('category', product.category)
        .neq('id', product.id)
        .eq('is_active', true)
        .limit(4)

    return (
        <main className="min-h-screen pt-32 pb-24 bg-background">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        name: product.name,
                        image: product.image_url?.[0] || "https://rosaceleste.com/og-image.jpg",
                        description: product.description,
                        sku: product.slug,
                        offers: {
                            "@type": "Offer",
                            url: `https://rosaceleste.com/productos/${product.slug}`,
                            priceCurrency: "COP",
                            price: product.price,
                            priceValidUntil: "2027-12-31",
                            itemCondition: "https://schema.org/NewCondition",
                            availability: "https://schema.org/InStock"
                        }
                    })
                }}
            />
            <Container>
                <div className="pt-8">
                    <ProductDetails
                        product={product as Product}
                        relatedProducts={(relatedProducts || []) as Product[]}
                    />
                </div>
            </Container>
        </main>
    )
}

export async function generateStaticParams() {
    // Use the anon client here — generateStaticParams runs at build time
    // and has no request context, so cookies() would throw.
    const supabase = createBrowserClient()

    const { data: products } = await supabase
        .from('products')
        .select('slug')
        .eq('is_active', true)

    if (!products) return []

    return products.map((product) => ({
        slug: product.slug,
    }))
}
