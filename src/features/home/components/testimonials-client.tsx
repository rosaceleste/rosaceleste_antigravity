'use client'

import React from "react";
import { Star, Quote } from "lucide-react";
import Marquee from "react-fast-marquee";
import { Testimonial } from "@/types";

interface TestimonialsClientProps {
    testimonials: any[]; // Using any to bypass precise shape mismatch if strict types not fully aligned yet, or import Testimonial type
}

export function TestimonialsClient({ testimonials }: TestimonialsClientProps) {
    return (
        <div className="relative">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <Marquee gradient={false} speed={40} pauseOnHover={true} className="py-4">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="mx-4 md:mx-6 w-[300px] md:w-[400px] p-8 md:p-10 bg-card rounded-none border border-border hover:border-primary/20 transition-colors duration-300"
                    >
                        <div className="flex gap-1 mb-6">
                            {[...Array(testimonial.rating || 5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                            ))}
                        </div>

                        <Quote className="w-8 h-8 text-primary/20 mb-4" />

                        <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed italic mb-8">
                            "{testimonial.content}"
                        </p>

                        <div>
                            <p className="text-sm font-medium text-foreground uppercase tracking-wider">
                                {testimonial.name}
                            </p>
                            <p className="text-xs text-muted mt-0.5">
                                {testimonial.role}
                            </p>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
