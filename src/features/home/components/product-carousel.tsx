'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PRODUCT_IMAGES } from "@/constants/images";
import { motion } from "framer-motion";

export function ProductCarousel({ products }: { products: any[] }) {
    // Select 6 best product images for featured display
    const featuredProducts = [
        {
            image: PRODUCT_IMAGES.featured[0], // Tezza-5466.jpg
            title: "Tapiz Artesanal",
            category: "Decoración de pared",
        },
        {
            image: PRODUCT_IMAGES.featured[1], // Tezza-2197.jpg
            title: "Macramé Premium",
            category: "Pieza única",
        },
        {
            image: PRODUCT_IMAGES.featured[2], // Tezza-2987.jpg
            title: "Tejido Consciente",
            category: "Hecho a mano",
        },
        {
            image: PRODUCT_IMAGES.gallery[0], // 65BDB03D
            title: "Detalle Artesanal",
            category: "Decoración",
        },
        {
            image: PRODUCT_IMAGES.gallery[1], // Tezza-2959.jpg
            title: "Creación Original",
            category: "Exclusivo",
        },
        {
            image: PRODUCT_IMAGES.gallery[2], // Tezza-9007.jpg
            title: "Tejido Natural",
            category: "Sostenible",
        },
    ];

    return (
        <section id="productos" className="py-24 md:py-32 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                            Colección Destacada
                        </h2>
                        <p className="text-muted text-lg font-light leading-relaxed">
                            Piezas únicas tejidas a mano con dedicación y presencia, diseñadas para transformar tus espacios.
                        </p>
                    </div>

                    <Link
                        href="/productos"
                        className="hidden md:flex items-center gap-2 pb-1 border-b border-foreground text-foreground hover:opacity-70 transition-opacity uppercase tracking-widest text-xs"
                    >
                        Ver Catálogo
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                    {/* Large featured item - spans 2x2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-xl bg-card"
                    >
                        <div className="relative aspect-[4/5] md:aspect-auto md:h-full w-full overflow-hidden">
                            <Image
                                src={featuredProducts[0].image}
                                alt={featuredProducts[0].title}
                                fill
                                className="object-cover transition-all duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                            />
                            {/* Simple overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 transition-opacity duration-300" />

                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="text-xs uppercase tracking-widest mb-2 opacity-90">{featuredProducts[0].category}</p>
                                <h3 className="font-serif text-3xl">{featuredProducts[0].title}</h3>
                            </div>
                        </div>
                    </motion.div>

                    {/* Medium items - span 2x1 */}
                    {featuredProducts.slice(1, 3).map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                            className="md:col-span-2 group relative overflow-hidden rounded-xl bg-card"
                        >
                            <div className="relative aspect-[16/9] overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 transition-opacity duration-300" />

                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="text-xs uppercase tracking-widest mb-1 opacity-90">{product.category}</p>
                                    <h3 className="font-serif text-xl">{product.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Small items - span 1x1 each */}
                    {featuredProducts.slice(3, 6).map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                            className="col-span-1 group relative overflow-hidden rounded-xl bg-card"
                        >
                            <div className="relative aspect-square overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                            </div>
                            <div className="pt-4">
                                <h3 className="font-serif text-lg text-foreground">{product.title}</h3>
                                <p className="text-xs uppercase tracking-widest text-muted mt-1">{product.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="md:hidden text-center">
                    <Link
                        href="/productos"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all uppercase tracking-widest text-xs"
                    >
                        Ver Catálogo Completo
                    </Link>
                </div>
            </div>
        </section>
    );
}
