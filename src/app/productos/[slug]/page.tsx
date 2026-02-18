import { createClient } from '@/lib/supabase/server'
import { createClient as createBrowserClient } from '@/lib/supabase/client'
import { ProductDetails } from '@/features/products/components/product-details'
import { Container } from '@/components/layout/container'
import { notFound } from 'next/navigation'
import { Product } from '@/types'

interface ProductPageProps {
    params: Promise<{
        slug: string
    }>
}

export const revalidate = 60

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
