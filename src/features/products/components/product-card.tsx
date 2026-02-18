'use client'

import { Card, Button } from '@heroui/react'
import { Product } from '@/types'
import Link from 'next/link'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { MessageCircle } from 'lucide-react'
import posthog from 'posthog-js'

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    const imageUrl = product.image_url?.[0]

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
        <Card className="border-none bg-card shadow-sm hover:shadow-md transition-shadow rounded-xl h-full flex flex-col group">
            {/* v3 naming */}
            <Card.Content className="p-0 overflow-hidden relative flex-none">
                <Link href={`/productos/${product.slug}`} className="block relative aspect-[4/5] bg-neutral-100">
                    {imageUrl ? (
                        <OptimizedImage
                            src={imageUrl}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
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
                        <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-[10px] uppercase font-bold px-2 py-1 rounded-full z-10">
                            Popular
                        </span>
                    )}
                </Link>
            </Card.Content>
            {/* v3 naming */}
            <Card.Footer className="flex flex-col items-start p-4 gap-1 flex-grow justify-end">
                <p className="text-[10px] text-muted uppercase tracking-widest font-bold">
                    {product.category?.replace(/_/g, ' ')}
                </p>
                <Link href={`/productos/${product.slug}`} className="block group-hover:text-primary transition-colors">
                    <h3 className="text-lg font-semibold text-foreground leading-tight line-clamp-2">{product.name}</h3>
                </Link>
                {product.description && (
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{product.description}</p>
                )}
                <p className="text-primary font-bold mt-1">
                    ${product.price.toLocaleString('es-CO')} COP
                </p>
                <a
                    href={`https://wa.me/573017870521?text=${encodeURIComponent(`Hola! Me interesa la pieza "${product.name}" de $${product.price.toLocaleString('es-CO')} COP.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full mt-3"
                    onClick={handleWhatsAppClick}
                >
                    <Button
                        className="w-full bg-primary text-primary-foreground font-medium text-xs rounded-full"
                        size="sm"
                    >
                        <MessageCircle className="w-3 h-3 mr-1" />
                        Comprar
                    </Button>
                </a>
            </Card.Footer>
        </Card>
    )
}
