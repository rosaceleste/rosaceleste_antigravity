'use client'

import React from "react";
import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/types";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface TestimonialsClientProps {
    testimonials: Testimonial[];
}

export function TestimonialsClient({ testimonials }: TestimonialsClientProps) {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    return (
        <div className="relative max-w-7xl mx-auto px-4">
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
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/2">
                            <div
                                className="h-full p-8 md:p-12 bg-card rounded-2xl border border-border/40 hover:border-primary/20 transition-all duration-300 shadow-sm relative group overflow-hidden"
                            >
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700" />

                                <div className="flex gap-1 mb-8">
                                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                    ))}
                                </div>

                                <Quote className="w-10 h-10 text-primary/10 mb-6 group-hover:text-primary/20 transition-colors" />

                                <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed italic mb-10 relative z-10">
                                    &quot;{testimonial.content}&quot;
                                </p>

                                <div className="flex items-center gap-4 border-t border-border/40 pt-8 mt-auto">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif text-lg font-bold">
                                        {testimonial.name.slice(0, 1)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-foreground uppercase tracking-[0.2em]">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-xs text-primary/60 mt-0.5 font-medium">
                                            {testimonial.role || "Cliente Verificado"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Navigation with ARIA labels */}
                <div className="flex justify-center md:justify-end gap-4 mt-12">
                    <CarouselPrevious
                        className="static translate-y-0 h-12 w-12 border-primary/20 hover:border-primary"
                        aria-label="Anterior testimonio"
                    />
                    <CarouselNext
                        className="static translate-y-0 h-12 w-12 border-primary/20 hover:border-primary"
                        aria-label="Siguiente testimonio"
                    />
                </div>
            </Carousel>
        </div>
    );
}
