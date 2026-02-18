'use client'

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ExternalLink, ArrowRight } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/constants/site";
import { whatsappLinks } from "@/lib/whatsapp";
import { motion, AnimatePresence } from "framer-motion";
import { JoinCommunityForm } from "@/components/JoinCommunityForm";

export function NarrativeSection() {
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    const toggleCategory = (key: string) => {
        setOpenCategory(openCategory === key ? null : key);
    };

    return (
        <section id="clases" className="py-24 md:py-32 lg:py-40 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <span className="text-accent text-xs uppercase tracking-[0.2em] mb-4 block">
                        Filosofía Rosaceleste
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl lg:text-5xl text-foreground mb-6 leading-tight max-w-4xl mx-auto">
                        Espacios armoniosos, bellos y llenos de calma
                    </h2>
                    <p className="text-muted text-lg font-light leading-relaxed max-w-3xl mx-auto opacity-80">
                        En Rosaceleste macramé nos enfocamos en la creación de piezas únicas para el hogar.
                        La conexión con la naturaleza desemboca en sentir la fibra de los tejidos al hacer nudos,
                        entendiendo que tejer es un arte ancestral que nos conecta con la sabiduría, la paciencia y el amor.
                    </p>
                </motion.div>

                {/* SUBSECTION A: Clases Presenciales */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-24 lg:mb-32">
                    {/* Left Column: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                            Clases presenciales personalizadas
                        </h3>
                        <div className="prose prose-lg text-muted font-light leading-relaxed mb-8">
                            <p className="mb-6">
                                No necesitas conocimientos previos para pasar de principiante a avanzado con nuestra metodología de aprendizaje, donde no solo aprendes a tejer algo por tu cuenta, sino que disfrutas de la calma y la alegría de hacer algo por ti y para ti.
                            </p>
                            <p className="font-normal text-foreground">
                                Nuestras sugerencias son para comenzar amablemente por este camino maravilloso, sin frustraciones ni complicaciones:
                            </p>
                        </div>

                        {/* CTA Button */}
                        <a
                            href={whatsappLinks.booking}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background transition-all duration-300 hover:bg-accent hover:shadow-lg hover:-translate-y-1"
                            aria-label="Reservar clase de macramé por WhatsApp"
                        >
                            <span className="text-sm font-medium tracking-widest uppercase">Reservar mi clase</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </motion.div>

                    {/* Right Column: Accordion Categories */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4"
                    >
                        {Object.entries(PRODUCT_CATEGORIES).map(([key, category], index) => (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`border rounded-xl bg-card transition-all duration-300 overflow-hidden ${openCategory === key ? 'border-accent/30 shadow-md' : 'border-border hover:border-black/10'
                                    }`}
                            >
                                {/* Accordion Header */}
                                <button
                                    onClick={() => toggleCategory(key)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                    aria-expanded={openCategory === key}
                                    aria-controls={`category-${key}`}
                                >
                                    <span className={`font-serif text-lg transition-colors duration-200 ${openCategory === key ? 'text-accent' : 'text-foreground'
                                        }`}>
                                        {category.title}
                                    </span>
                                    <div className={`p-2 rounded-full transition-all duration-300 ${openCategory === key ? 'bg-accent/10 rotate-180' : 'bg-gray-50'
                                        }`}>
                                        <ChevronDown
                                            className={`w-4 h-4 transition-colors duration-200 ${openCategory === key ? 'text-accent' : 'text-gray-400'
                                                }`}
                                        />
                                    </div>
                                </button>

                                {/* Accordion Content */}
                                <AnimatePresence>
                                    {openCategory === key && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pt-0 border-t border-border">
                                                <ul className="space-y-3 pt-4">
                                                    {category.items.map((item, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="flex items-center gap-3 text-muted"
                                                        >
                                                            <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                                                            <span className="font-light">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* SUBSECTION B: Clases Virtuales */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative p-10 md:p-16 rounded-2xl bg-card border border-border overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.02)] group hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-500"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
                        <div className="lg:col-span-2">
                            <span className="text-primary text-xs uppercase tracking-[0.2em] mb-4 block">
                                Online
                            </span>
                            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                                Acceso a clases virtuales
                            </h3>
                            <p className="text-lg text-muted font-light leading-relaxed mb-0 lg:max-w-2xl">
                                Aprende a tu propio ritmo desde casa. Únete a nuestra comunidad online y accede a clases grabadas, tutoriales paso a paso y soporte constante.
                            </p>
                        </div>

                        <div className="lg:col-span-1 flex justify-start lg:justify-end">
                            <JoinCommunityForm>
                                <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-foreground text-foreground transition-all duration-300 hover:bg-foreground hover:text-background">
                                    <span className="text-sm font-medium tracking-widest uppercase">Unirme a la comunidad</span>
                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </JoinCommunityForm>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
