'use client'

import { Card, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Product } from '@/types'
import Link from 'next/link'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { MessageCircle } from 'lucide-react'
import posthog from 'posthog-js'

interface ProductCardProps {
    product: Product
}

// Local image overrides: these products have files in /public/products/
// because their Supabase Storage URLs are not accessible.
const LOCAL_IMAGE_OVERRIDES: Record<string, string> = {
    'portavasos-corazon': '/products/portavasos-corazon-1.jpg',
    'individuales-redondos-ancestral': '/products/individuales-redondos-ancestral-1.jpg',
    'tapiz-montana': '/products/tapiz-montana-1.jpg',
    'chalecos-bolsos': '/products/chalecos-1.jpg',
}

export function ProductCard({ product }: ProductCardProps) {
    // Use local override if available, otherwise use Supabase URL
    const imageUrl = LOCAL_IMAGE_OVERRIDES[product.slug] ?? product.image_url?.[0]

    const handleWhatsAppClick = (e: React.MouseEvent) => {
        e.stopPropagation();

        // Capture WhatsApp click from product card
        posthog.capture('product_card_whatsapp_clicked', {
            product_id: product.id,
            product_name: product.name,
            product_slug: product.slug,
            product_category: product.category,
            product_price: product.price,
            is_featured: product.is_featured,
        });
    };

    return (
        <Card className="border border-border/40 bg-card shadow-sm hover:shadow-md transition-all duration-300 rounded-xl h-full flex flex-col group overflow-hidden">
            <div className="p-0 overflow-hidden relative flex-none">
                <Link href={`/productos/${product.slug}`} className="block relative aspect-[4/5] bg-neutral-100">
                    {imageUrl ? (
                        <OptimizedImage
                            src={imageUrl}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            fallback={
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="text-center text-neutral-400 p-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-12 h-12 mx-auto mb-2 opacity-40"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1}
                                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                        <p className="text-xs">Sin imagen</p>
                                    </div>
                                </div>
                            }
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center text-neutral-400 p-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-12 h-12 mx-auto mb-2 opacity-40"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1}
                                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                <p className="text-xs">Sin imagen</p>
                            </div>
                        </div>
                    )}
                    {product.is_featured && (
                        <Badge variant="accent" className="absolute top-4 right-4 z-10 font-bold tracking-tight px-3">
                            Popular
                        </Badge>
                    )}
                </Link>
            </div>

            <CardFooter className="flex flex-col items-start p-6 gap-1 flex-grow justify-end">
                <p className="text-[10px] text-primary/60 uppercase tracking-[0.2em] font-bold">
                    {product.category?.replace(/_/g, ' ')}
                </p>
                <Link href={`/productos/${product.slug}`} className="block group-hover:text-primary transition-colors">
                    <h3 className="text-xl font-serif text-foreground leading-tight line-clamp-2">{product.name}</h3>
                </Link>
                {product.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1 font-light">{product.description}</p>
                )}
                <p className="text-primary font-bold mt-2 text-lg">
                    ${product.price.toLocaleString('es-CO')} COP
                </p>
                <div className="flex flex-col gap-2 w-full mt-4">
                    <Button
                        asChild
                        variant="secondary"
                        className="w-full font-semibold bg-secondary text-primary hover:bg-secondary/90 rounded-full shadow-sm"
                        size="sm"
                    >
                        <Link href={`/productos/${product.slug}`}>
                            Ver detalle
                        </Link>
                    </Button>
                    <a
                        href={`https://wa.me/573017870521?text=${encodeURIComponent(`Hola! Me interesa la pieza "${product.name}" de $${product.price.toLocaleString('es-CO')} COP.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full"
                        onClick={handleWhatsAppClick}
                    >
                        <Button
                            variant="default"
                            className="w-full font-medium bg-primary text-primary-foreground hover:shadow-lg hover:-translate-y-0.5 transition-all rounded-full"
                            size="sm"
                        >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Comprar ahora
                        </Button>
                    </a>
                </div>
            </CardFooter>
        </Card>
    )
}
