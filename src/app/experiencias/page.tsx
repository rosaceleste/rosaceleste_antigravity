import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Users, Heart, Gift, ArrowRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Experiencias de Bienestar | Rosaceleste',
    description: 'Talleres de macramé vivencial y espacios de bienestar en Buga. Celebra la vida tejiendo y compartiendo en comunidad.',
    openGraph: {
        title: 'Experiencias de Bienestar | Rosaceleste',
        description: 'Talleres de macramé vivencial donde el amor por el tejido sabe delicioso y se comparte.',
        images: ["/og-experiencias.jpg"],
    }
};

const IMAGES = [
    "/Talleres/WhatsApp Image 2026-02-10 at 10.59.01.jpeg", // Hero potential
    "/Talleres/WhatsApp Image 2026-02-10 at 10.51.33.jpeg",
    "/Talleres/WhatsApp Image 2026-02-10 at 10.52.27.jpeg",
    "/Talleres/WhatsApp Image 2026-02-10 at 10.55.29.jpeg",
    "/Talleres/WhatsApp Image 2026-02-10 at 10.57.52.jpeg",
    "/Talleres/WhatsApp Image 2026-02-10 at 10.58.00.jpeg",
    "/Talleres/WhatsApp Image 2026-02-10 at 10.58.19.jpeg",
];

export default function ExperienciasPage() {
    return (
        <div className="bg-[#FAFAFA]">
            {/* Hero Section - Accessible Layout */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
                <Container>
                    <div className="flex flex-col items-center text-center space-y-8 mb-16">
                        <h1 className="font-serif text-4xl md:text-6xl tracking-tight text-foreground">
                            Experiencias de Bienestar
                        </h1>
                        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed text-foreground/80">
                            Macramé vivencial donde el amor por el tejido sabe delicioso y se comparte.
                        </p>
                    </div>

                    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-sm">
                        <Image
                            src={IMAGES[0]}
                            alt="Grupo de personas en taller de Macramé Rosaceleste"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </Container>
            </section>

            {/* Introduction */}
            <section className="py-24">
                <Container>
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                        <p className="text-xl md:text-2xl text-foreground/80 font-light leading-relaxed">
                            Sesiones mensuales de macramé acompañado de una deliciosa merienda y personas que desean aprender tanto como tú.
                        </p>
                        <div className="w-24 h-px bg-border mx-auto my-8" />
                        <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                            Son espacios guiados donde el arte del macramé se transforma en una experiencia de conexión y equilibrio.
                            A través del tejido consciente, los participantes reducen el estrés, estimulan la creatividad y fortalecen la relación consigo mismos y con los demás.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Ideal For Grid */}
            <section className="py-24 bg-white">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Ideales para</h2>
                        <p className="text-foreground/60">Espacios diseñados para compartir y crear</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-[#FAFAFA] p-8 rounded-2xl text-center space-y-4 hover:shadow-md transition-shadow duration-300">
                            <div className="w-12 h-12 bg-[#E8F1F2] rounded-full flex items-center justify-center mx-auto text-[#5B8C92]">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="font-serif font-medium text-lg">Equipos de Trabajo</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed">
                                Que buscan cohesión, bienestar y salir de la rutina en un ambiente creativo.
                            </p>
                        </div>

                        <div className="bg-[#FAFAFA] p-8 rounded-2xl text-center space-y-4 hover:shadow-md transition-shadow duration-300">
                            <div className="w-12 h-12 bg-[#F9EBE6] rounded-full flex items-center justify-center mx-auto text-[#C97D60]">
                                <Heart className="w-6 h-6" />
                            </div>
                            <h3 className="font-serif font-medium text-lg">Grupos de Amigos</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed">
                                Que desean compartir un momento significativo y aprender una nueva habilidad juntos.
                            </p>
                        </div>

                        <div className="bg-[#FAFAFA] p-8 rounded-2xl text-center space-y-4 hover:shadow-md transition-shadow duration-300">
                            <div className="w-12 h-12 bg-[#F2F0E9] rounded-full flex items-center justify-center mx-auto text-[#8C8F78]">
                                <Gift className="w-6 h-6" />
                            </div>
                            <h3 className="font-serif font-medium text-lg">Celebraciones Íntimas</h3>
                            <p className="text-foreground/70 text-sm leading-relaxed">
                                Como cumpleaños conscientes o reuniones especiales llenas de intención.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-16 text-xl font-serif italic text-foreground/60">
                        &quot;Más que un taller, es un espacio para crear, conversar y habitar el presente.&quot;
                    </div>
                </Container>
            </section>

            {/* Gallery */}
            <section className="py-24">
                <Container>
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {IMAGES.slice(1).map((src, i) => ( // Skip first image (hero)
                            <div key={i} className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group break-inside-avoid">
                                <Image
                                    src={src}
                                    alt={`Taller de macramé ${i + 1}`}
                                    width={600}
                                    height={800}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Birthday CTA */}
            <section className="py-24 bg-[#E8F1F2]/30">
                <Container>
                    <div className="max-w-4xl mx-auto text-center space-y-8 bg-white p-12 rounded-3xl shadow-sm border border-border/50">
                        <h2 className="font-serif text-3xl md:text-5xl text-foreground">
                            ¿Sabías que puedes celebrar tu cumpleaños haciendo algo diferente?
                        </h2>
                        <p className="text-xl text-foreground/70 font-light">
                            ¡Tenemos la opción perfecta para ti!
                        </p>
                        <div className="pt-4">
                            <Button asChild variant="accent" size="lg" className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                                <Link href="https://wa.me/573017870521?text=Hola,%20me%20encantaría%20celebrar%20mi%20cumpleaños%20con%20una%20experiencia%20de%20macramé!" target="_blank">
                                    Reserva tu fecha especial
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
