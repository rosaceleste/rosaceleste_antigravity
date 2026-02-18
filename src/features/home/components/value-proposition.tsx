'use client'

import React from "react";
import { Heart, Brain, Users } from "lucide-react";
import { motion } from "framer-motion";

export function ValueProposition() {
    const values = [
        {
            title: "Productos hechos a mano",
            description: "Cada pieza nace del tiempo, la presencia y el respeto por el proceso creativo.",
            icon: Heart,
            color: "#2C5F5D", // Deep Teal
        },
        {
            title: "Aprendizaje consciente",
            description: "Cursos diseñados para aprender macramé paso a paso, desde la técnica y la atención plena.",
            icon: Brain,
            color: "#2C5F5D",
        },
        {
            title: "Experiencias de bienestar",
            description: "El acto de tejer como herramienta para reducir el ruido mental y cultivar la calma.",
            icon: Users,
            color: "#2C5F5D",
        },
    ];

    return (
        <section id="valores" className="py-24 md:py-32 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group flex flex-col items-start p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                            >
                                <div className="mb-6 p-3 rounded-xl bg-secondary text-primary group-hover:scale-110 transition-transform duration-500">
                                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                                </div>

                                <h3 className="font-serif text-2xl mb-4 text-foreground">
                                    {value.title}
                                </h3>

                                <p className="text-muted leading-relaxed text-lg font-light">
                                    {value.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
