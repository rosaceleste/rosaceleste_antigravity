'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";

export function ExperiencesSection() {
    return (
        <section id="experiencias" className="py-24 md:py-32 bg-secondary">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="max-w-xl">
                        <span className="text-primary text-xs uppercase tracking-[0.2em] mb-4 block">
                            Talleres y Encuentros
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                            Tejer es un acto de presencia
                        </h2>
                        <p className="text-muted text-lg font-light leading-relaxed mb-8">
                            Nuestros talleres están diseñados para que desconectes del ruido y conectes con la creación. No necesitas experiencia previa, solo ganas de aprender y compartir.
                        </p>
                        <Link
                            href="/clases"
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors uppercase tracking-widest text-xs"
                        >
                            Ver Próximas Fechas
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="relative aspect-[4/3] w-full">
                        <Image
                            src="/Talleres/WhatsApp Image 2026-02-10 at 10.59.01.jpeg"
                            alt="Grupo tejiendo en taller de macramé"
                            fill
                            className="object-cover rounded-xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/20 hidden md:block">
                            <p className="font-serif text-lg text-foreground italic text-center">
                                "El taller fue un regalo para el alma. Volveré seguro."
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Link href="/clases" className="group cursor-pointer block">
                        <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-xl">
                            <Image
                                src="/Talleres/WhatsApp Image 2026-02-10 at 10.59.01.jpeg"
                                alt="Taller de Iniciación"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                        <h3 className="font-serif text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">Iniciación al Macramé</h3>
                        <p className="text-muted font-light mb-4">Aprende los nudos básicos y crea tu primer tapiz en una mañana.</p>
                        <span className="text-xs uppercase tracking-widest border-b border-foreground pb-1">Más info</span>
                    </Link>

                    <Link href="/clases#decoracion-de-pared" className="group cursor-pointer block">
                        <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-xl">
                            <Image
                                src="/Talleres/WhatsApp Image 2026-02-10 at 10.51.33.jpeg"
                                alt="Taller de Decoración"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                        <h3 className="font-serif text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">Deco & Plantas</h3>
                        <p className="text-muted font-light mb-4">Porta macetas y soportes colgantes para llenar de verde tu hogar.</p>
                        <span className="text-xs uppercase tracking-widest border-b border-foreground pb-1">Más info</span>
                    </Link>

                    <Link href="/clases" className="group cursor-pointer block">
                        <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-xl">
                            <Image
                                src="/Talleres/WhatsApp Image 2026-02-10 at 10.57.52.jpeg"
                                alt="Encuentros Creativos"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                        <h3 className="font-serif text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">Club de Tejido</h3>
                        <p className="text-muted font-light mb-4">Encuentros mensuales para tejer proyectos libres en compañía.</p>
                        <span className="text-xs uppercase tracking-widest border-b border-foreground pb-1">Más info</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
