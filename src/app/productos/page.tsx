import { ProductGrid } from '@/features/products/components/product-grid'
import { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { createClient } from '@/lib/supabase/server' // We need a server client here for RSC

export const revalidate = 60 // ISR: revalidate every 60 seconds

export const metadata: Metadata = {
    title: "Catálogo de Macramé | Rosaceleste",
    description: "Explora nuestra colección de piezas únicas tejidas a mano. Decoración, accesorios y kits de macramé hechos con amor en Colombia.",
    openGraph: {
        title: "Catálogo de Macramé | Rosaceleste",
        description: "Piezas únicas tejidas a mano para tu hogar y bienestar.",
        images: ["/og-catalog.jpg"]
    }
}

export default async function ProductsPage() {
    const supabase = await createClient()

    const { data: products, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching products from Supabase:', {
            code: error.code,
            message: error.message,
            details: error.details,
            hint: error.hint,
        })
        // Fallback or empty state could be handled here
    }

    return (
        <main className="min-h-screen pt-32 pb-24">
            <Container>
                <header className="flex flex-col gap-4 mb-16 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#2C5F5D] tracking-tight">
                        Catálogo de Productos
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Piezas únicas tejidas a mano con paciencia y consciencia.
                        Explora nuestra colección y encuentra el complemento ideal para tu hogar.
                    </p>
                </header>

                <ProductGrid initialProducts={products || []} />
            </Container>
        </main>
    )
}
