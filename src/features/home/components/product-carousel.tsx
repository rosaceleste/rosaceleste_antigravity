'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PRODUCT_IMAGES } from "@/constants/images";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

export function ProductCarousel() {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    );

    // Select 6 best product images for featured display
    const featuredProducts = [
        {
            image: PRODUCT_IMAGES.featured[0],
            title: "Tapiz Artesanal",
            category: "Decoración de pared",
        },
        {
            image: PRODUCT_IMAGES.featured[1],
            title: "Macramé Premium",
            category: "Pieza única",
        },
        {
            image: PRODUCT_IMAGES.featured[2],
            title: "Tejido Consciente",
            category: "Hecho a mano",
        },
        {
            image: PRODUCT_IMAGES.gallery[0],
            title: "Detalle Artesanal",
            category: "Decoración",
        },
        {
            image: PRODUCT_IMAGES.gallery[1],
            title: "Creación Original",
            category: "Exclusivo",
        },
        {
            image: PRODUCT_IMAGES.gallery[2],
            title: "Tejido Natural",
            category: "Sostenible",
        },
    ];

    return (
        <section id="productos" className="py-24 md:py-32 px-6 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">Nueva Colección</p>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-foreground mb-6 leading-[1.1]">
                            Piezas que cuentan <br /><span className="text-primary/40 italic">historias</span>
                        </h2>
                        <p className="text-muted text-lg font-light leading-relaxed max-w-xl">
                            Descubre nuestra selección de piezas únicas tejidas a mano, diseñadas para transformar tus espacios con calidez y autenticidad.
                        </p>
                    </div>

                    <Button
                        asChild
                        variant="secondary"
                        className="hidden md:flex bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full px-6"
                    >
                        <Link href="/productos">
                            <span className="font-bold tracking-widest text-[10px] uppercase">Ver Catálogo Completo</span>
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </div>

                {/* Carousel Implementation */}
                <div className="relative px-0 md:px-4">
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                    >
                        <CarouselContent className="-ml-4 md:-ml-6">
                            {featuredProducts.map((product, index) => (
                                <CarouselItem key={index} className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3">
                                    <div className="group relative overflow-hidden rounded-2xl bg-card border border-border/40 aspect-[4/5]">
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover transition-all duration-1000 group-hover:scale-110"
                                            loading={index > 1 ? "lazy" : "eager"}
                                            priority={index <= 1}
                                        />
                                        {/* Overlay gradient */}
                                        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                                        <div className="absolute bottom-8 left-8 right-8 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                            <p className="text-[10px] uppercase tracking-[0.3em] mb-3 font-bold text-white/90">{product.category}</p>
                                            <h3 className="font-serif text-2xl md:text-3xl mb-4 leading-tight text-white">{product.title}</h3>
                                            <Button
                                                asChild
                                                variant="secondary"
                                                size="sm"
                                                className="mt-2 bg-secondary text-primary font-semibold hover:bg-secondary/90 rounded-full shadow-sm"
                                            >
                                                <Link href="/productos">
                                                    Ver detalle
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Custom Navigation */}
                        <div className="hidden md:flex justify-end gap-4 mt-12">
                            <CarouselPrevious className="static translate-y-0 h-12 w-12 border-2 border-primary/20 hover:border-primary hover:bg-primary/10 transition-colors" />
                            <CarouselNext className="static translate-y-0 h-12 w-12 border-2 border-primary/20 hover:border-primary hover:bg-primary/10 transition-colors" />
                        </div>
                    </Carousel>
                </div>

                {/* Mobile CTA */}
                <div className="md:hidden text-center mt-12">
                    <Button
                        asChild
                        variant="secondary"
                        size="lg"
                        className="px-10 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full shadow-lg"
                    >
                        <Link href="/productos">
                            <span className="font-bold tracking-widest text-xs uppercase">Ver Catálogo</span>
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
