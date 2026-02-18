'use client'

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
// import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text"; // Keeping for future use if needed, but styling prefers clean text now
import { PRODUCT_IMAGES } from "@/constants/images";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import posthog from 'posthog-js';

export function HeroSection() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    // Parallax effect for the image
    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Select best product image for hero
    const heroImage = PRODUCT_IMAGES.featured[0]; // Tezza-5466.jpg

    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const handleCtaClick = (ctaType: 'productos' | 'cursos') => {
        posthog.capture('hero_cta_clicked', {
            cta_type: ctaType,
            cta_destination: ctaType === 'productos' ? '/productos' : '/clases',
        });
    };

    return (
        <section
            id="hero"
            ref={heroRef}
            className="relative w-full min-h-screen flex items-center px-6 lg:px-12 py-32 bg-background"
        >
            {/* Background Texture/Grid (Optional refined touch) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Column: Content */}
                    <div className="lg:col-span-6 flex flex-col gap-10">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col gap-6"
                        >
                            <motion.h1
                                variants={itemVariants}
                                className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[5.5rem] tracking-tight leading-[0.9] text-foreground"
                            >
                                <span className="block italic text-primary">Habitar</span>
                                <span className="block">la calma</span>
                            </motion.h1>

                            <motion.h2
                                variants={itemVariants}
                                className="text-xl sm:text-2xl font-light text-muted max-w-lg leading-relaxed"
                            >
                                Macramé consciente para crear, pausar y conectar desde la presencia.
                            </motion.h2>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row items-center gap-4 pt-4"
                            >
                                <Link
                                    href="/productos"
                                    className="group relative flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto justify-center"
                                    onClick={() => handleCtaClick('productos')}
                                >
                                    <span className="font-medium tracking-wide">Ver Productos</span>
                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>

                                <Link
                                    href="/clases"
                                    className="group relative flex items-center gap-3 px-8 py-4 rounded-full border border-primary/20 text-primary transition-all duration-300 hover:bg-secondary hover:border-primary/40 w-full sm:w-auto justify-center"
                                    onClick={() => handleCtaClick('cursos')}
                                >
                                    <span className="font-medium tracking-wide">Explorar Cursos</span>
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Social Proof / Trust Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 1 }}
                            className="flex items-center gap-4 text-sm text-muted/60"
                        >
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-background" />
                                ))}
                            </div>
                            <p>Más de 500 alumnas en 2025</p>
                        </motion.div>
                    </div>

                    {/* Right Column: Hero Image */}
                    <div className="lg:col-span-6 relative h-[60vh] lg:h-[80vh]">
                        <motion.div
                            style={{ y, opacity }}
                            className="relative w-full h-full rounded-2xl overflow-hidden"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                        >
                            <Image
                                src={heroImage}
                                alt="Producto destacado de macramé Rosaceleste"
                                fill
                                className="object-cover grayscale-[20%] contrast-[1.05]"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Texture overlay for film grain feel */}
                            <div className="absolute inset-0 bg-black/5 mix-blend-multiply pointer-events-none" />
                        </motion.div>

                        {/* Floating Caption/Badge (Optional) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="absolute -bottom-6 -left-6 lg:left-[-3rem] bg-white/90 backdrop-blur italic font-serif text-lg p-6 rounded-none shadow-sm border border-black/5 max-w-xs hidden md:block"
                        >
                            "El tejido es el lenguaje silencioso de las manos que sienten."
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
