import { createClient } from "@/lib/supabase/server";
import { TestimonialsClient } from "./testimonials-client";

export async function TestimonialsSection() {
    const supabase = await createClient();
    const { data: testimonials } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

    return (
        <section className="py-24 md:py-32 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <span className="text-primary text-xs uppercase tracking-[0.2em] mb-4 block">
                    Testimonios
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-foreground">
                    Voces de nuestra comunidad
                </h2>
            </div>

            <TestimonialsClient testimonials={testimonials || []} />
        </section>
    );
}
