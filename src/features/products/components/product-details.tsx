'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Product } from '@/types'
import { ProductCard } from './product-card'
import { OptimizedImage } from '@/components/ui/optimized-image'
import { ArrowLeft, MessageCircle, Clock, Star, MapPin, Share2, ShieldCheck, RotateCcw, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import posthog from 'posthog-js'
import { toast } from 'sonner'

interface ProductDetailsProps {
    product: Product
    relatedProducts?: Product[]
}

export function ProductDetails({ product, relatedProducts = [] }: ProductDetailsProps) {
    const [mainImage, setMainImage] = React.useState(product.image_url[0]);

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            toast.success('¡Enlace copiado!', {
                description: 'Listo para compartir en redes o WhatsApp.'
            });

            // Capture product share event
            posthog.capture('product_shared', {
                product_id: product.id,
                product_name: product.name,
                product_slug: product.slug,
                product_category: product.category,
                product_price: product.price,
            });
        } catch (err) {
            console.error('Error al copiar:', err);
            posthog.captureException(err);
            toast.error('Error al copiar el enlace');
        }
    };

    const handleWhatsAppClick = () => {
        // Capture WhatsApp click event (conversion intent)
        posthog.capture('product_whatsapp_clicked', {
            product_id: product.id,
            product_name: product.name,
            product_slug: product.slug,
            product_category: product.category,
            product_price: product.price,
        });
    };

    const handleImageChange = (img: string, index: number) => {
        setMainImage(img);

        // Capture image change event
        posthog.capture('product_image_changed', {
            product_id: product.id,
            product_name: product.name,
            image_index: index,
        });
    };

    return (
        <>
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 animate-in fade-in duration-700">
                <Link
                    href="/productos"
                    className="inline-flex items-center text-sm text-muted hover:text-primary mb-8 transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                    Volver al catálogo
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
                    {/* 1. Gallery Section (Left - 5 cols) */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="aspect-[4/5] bg-secondary/5 rounded-2xl overflow-hidden border border-border shadow-sm relative">
                            <OptimizedImage
                                src={mainImage}
                                alt={product.name}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </div>
                        {/* Thumbnails */}
                        {product.image_url.length > 1 && (
                            <div className="grid grid-cols-4 gap-3">
                                {product.image_url.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleImageChange(img, idx)}
                                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-all relative ${mainImage === img ? 'border-primary ring-2 ring-primary/20' : 'border-transparent opacity-70 hover:opacity-100'
                                            }`}
                                    >
                                        <OptimizedImage
                                            src={img}
                                            alt={`${product.name} view ${idx + 1}`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 25vw, 10vw"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* 2. Product Info (Center - 4 cols) */}
                    <div className="lg:col-span-4 space-y-6">
                        <div>
                            <div className="text-secondary-foreground/60 text-xs font-bold tracking-widest uppercase mb-2">
                                {product.category.replace('_', ' ')}
                            </div>
                            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4 leading-tight">
                                {product.name}
                            </h1>

                            {/* Dummy Rating */}
                            <div className="flex items-center gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                ))}
                                <span className="text-sm text-neutral-500 ml-2">(12 reseñas)</span>
                            </div>
                        </div>

                        <div className="h-px bg-border w-full my-6" />

                        <div className="prose prose-neutral text-neutral-600 font-light leading-relaxed">
                            <p>{product.description}</p>
                            <h4 className="font-medium text-foreground mt-6 mb-2">Detalles:</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm">
                                <li>Hecho a mano en Guadalajara de Buga.</li>
                                <li>Material: Algodón 100% natural.</li>
                                <li>Tiempo de producción: {product.production_time_days || 5} días hábiles.</li>
                            </ul>
                        </div>
                    </div>

                    {/* 3. Buy Box (Right - 3 cols) sticky */}
                    <div className="lg:col-span-3">
                        <div className="sticky top-24 p-6 rounded-xl border border-border bg-card shadow-lg">
                            <div className="mb-4">
                                <span className="text-3xl font-bold text-primary">
                                    ${product.price.toLocaleString('es-CO')}
                                </span>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="text-sm text-neutral-600">
                                    <span className="text-green-600 font-medium">Disponible para reserva</span>
                                    <div className="text-xs text-muted mt-1">
                                        Llega entre el <span className="font-bold text-foreground">15</span> y <span className="font-bold text-foreground">20</span> de este mes.
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-neutral-500">
                                    <MapPin className="w-3 h-3" />
                                    <span>Envío a toda Colombia</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <a
                                    href={`https://wa.me/573017870521?text=${encodeURIComponent(`Hola! Me interesa el producto ${product.name} de $${product.price.toLocaleString('es-CO')}. ¿Está disponible?`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full"
                                    onClick={handleWhatsAppClick}
                                >
                                    <Button
                                        className="w-full text-base font-medium tracking-wide"
                                        size="lg"
                                    >
                                        <MessageCircle className="w-5 h-5 mr-1" />
                                        Pedir ahora
                                    </Button>
                                </a>
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    size="lg"
                                    onClick={handleShare}
                                >
                                    <Share2 className="w-4 h-4 mr-2" />
                                    Compartir
                                </Button>
                            </div>

                            {/* Security / Policies */}
                            <div className="mt-6 pt-6 border-t border-border space-y-3 text-xs text-neutral-500">
                                <div className="flex gap-2">
                                    <ShieldCheck className="w-4 h-4 text-neutral-400" />
                                    <span>Transacción segura vía WhatsApp</span>
                                </div>
                                <div className="flex gap-2">
                                    <RotateCcw className="w-4 h-4 text-neutral-400" />
                                    <span>Garantía de satisfacción</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Avisos y Extras */}
                <div className="max-w-4xl mx-auto mt-20 space-y-12">
                    <div className="bg-secondary/10 p-8 rounded-2xl border border-secondary/20">
                        <div className="flex gap-4 items-start">
                            <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-serif text-lg font-bold text-foreground mb-2">Aviso Importante</h4>
                                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                                    Los artículos que se muestran son piezas en algodón, artesanales y personalizadas.
                                    Cada cliente recibe un producto de buena calidad, único y tejido con hilos de colores de preferencia.
                                    <br /><br />
                                    <strong>Nota:</strong> Los colores de los hilos y accesorios están sujetos a disponibilidad de proveedores.
                                    El precio puede variar según tamaño y accesorios.
                                </p>
                                <div className="flex items-center gap-2 text-sm text-primary font-medium">
                                    <Clock className="w-4 h-4" />
                                    <span>Tiempo de entrega: 3 a 15 días hábiles tras confirmar abono del 50%.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products Section */}
            {
                relatedProducts.length > 0 && (
                    <div className="mt-24 pt-12 border-t border-border px-6 max-w-7xl mx-auto overflow-hidden">
                        <h2 className="text-3xl font-serif text-foreground mb-8">También te podría gustar</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {relatedProducts.map((related) => (
                                <ProductCard key={related.id} product={related} />
                            ))}
                        </div>
                    </div>
                )
            }
        </>
    )
}
