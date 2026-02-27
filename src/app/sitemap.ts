import { MetadataRoute } from 'next'
import { createClient } from '@/lib/supabase/server'

export const revalidate = 86400 // Revalidate daily

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://rosaceleste.com'

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/productos`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/clases`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/experiencias`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/sobre-mi`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
    ]

    try {
        const supabase = await createClient()
        const { data: products } = await supabase
            .from('products')
            .select('slug, updated_at')
            .eq('is_active', true)

        const productPages: MetadataRoute.Sitemap = (products || []).map((product) => ({
            url: `${baseUrl}/productos/${product.slug}`,
            lastModified: new Date(product.updated_at || new Date()),
            changeFrequency: 'weekly',
            priority: 0.8,
        }))

        return [...staticPages, ...productPages]
    } catch (error) {
        console.error('Error generating product sitemap', error)
        return staticPages
    }
}
