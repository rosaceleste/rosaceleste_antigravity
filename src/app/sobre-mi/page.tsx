import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { JoinCommunityForm } from '@/components/JoinCommunityForm'

export const metadata: Metadata = {
    title: 'Sobre Mí | Rosaceleste',
    description: 'Conoce a Daniela, la artista detrás de Rosaceleste. Macramé consciente y bienestar creativo.',
    openGraph: {
        title: 'Sobre Mí | Rosaceleste',
        description: 'Soy Daniela, artista visual y facilitadora de experiencias de bienestar creativo.',
        images: ["/og-about.jpg"]
    }
}

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#FAFAFA]">
            {/* Hero Section */}
            <section className="relative py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[url('/images/pattern-bg.png')] bg-repeat opacity-10 pointer-events-none"></div>

                <span className="text-[#2C5F5D] text-xs uppercase tracking-[0.2em] mb-6 block">
                    Sobre Mí
                </span>
                <h1 className="font-serif text-4xl md:text-6xl text-[#1A1A1A] mb-8 leading-tight max-w-4xl mx-auto">
                    Soy Daniela, artista visual y facilitadora de <span className="italic text-[#2C5F5D]">bienestar creativo</span>
                </h1>

                <p className="font-sans text-lg md:text-xl text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed font-light mb-12">
                    A través del macramé, creo espacios para pausar, reconectar y habitarse desde la calma.
                </p>
            </section>

            {/* Story / Philosophy Section */}
            <section className="px-6 md:px-12 lg:px-24 pb-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Image Block */}
                    <div className="relative aspect-[3/4] md:aspect-square rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/Talleres/WhatsApp Image 2026-02-10 at 10.58.00.jpeg"
                            alt="Manos tejiendo macramé"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-[#2C5F5D]/10"></div>
                    </div>

                    {/* Text Block */}
                    <div className="space-y-8">
                        <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A]">
                            El Poder del Nudo Consciente
                        </h2>
                        <div className="space-y-6 text-[#4A4A4A] font-light text-lg leading-relaxed">
                            <p>
                                Hace 7 años acompaño a personas a pausar, reconectar y crear desde un lugar consciente,
                                utilizando el tejido como una herramienta de presencia, calma y reflexión.
                            </p>
                            <p>
                                Mi trabajo une arte, bienestar y autoconocimiento. A través de procesos creativos guiados,
                                propicio espacios donde las personas pueden salir de la rutina, reducir el estrés y
                                fortalecer la conexión consigo mismas y con los demás desde experiencias significativas.
                            </p>
                            <p>
                                He facilitado talleres presenciales y virtuales para distintos públicos,
                                creando experiencias que combinan creatividad, escucha y sentido humano.
                            </p>
                        </div>

                        <div className="pt-4">
                            <span className="font-serif text-2xl text-[#2C5F5D] italic">
                                Daniela Sierra
                            </span>
                            <p className="text-sm uppercase tracking-widest text-[#9D695A] mt-1">
                                Fundadora & Artista Textil
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Manifesto / Values */}
            <section className="bg-[#F5F1E8] py-24 px-6 md:px-12">
                <div className="max-w-5xl mx-auto text-center space-y-16">
                    <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A]">
                        Nuestros Pilares
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-[#2C5F5D]/10 rounded-full flex items-center justify-center mx-auto text-[#2C5F5D] text-2xl font-serif">1</div>
                            <h3 className="font-serif text-xl text-[#1A1A1A]">Consciencia</h3>
                            <p className="text-[#4A4A4A] font-light">
                                Tejer como acto de presencia plena. Materiales amigables con el medio ambiente.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-[#2C5F5D]/10 rounded-full flex items-center justify-center mx-auto text-[#2C5F5D] text-2xl font-serif">2</div>
                            <h3 className="font-serif text-xl text-[#1A1A1A]">Artesanía</h3>
                            <p className="text-[#4A4A4A] font-light">
                                Honramos el tiempo que requiere lo hecho a mano. Sin prisas, con alma.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-[#2C5F5D]/10 rounded-full flex items-center justify-center mx-auto text-[#2C5F5D] text-2xl font-serif">3</div>
                            <h3 className="font-serif text-xl text-[#1A1A1A]">Comunidad</h3>
                            <p className="text-[#4A4A4A] font-light">
                                Un espacio seguro para compartir, aprender y crecer juntas entre hilos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto bg-[#2C5F5D] rounded-3xl p-12 md:p-20 text-white relative overflow-hidden">
                    {/* Background Pattern effect */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#9D695A]/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

                    <h2 className="font-serif text-3xl md:text-4xl mb-6 relative z-10">
                        ¿Lista para comenzar tu propio viaje?
                    </h2>
                    <p className="font-light text-lg mb-10 opacity-90 relative z-10">
                        Únete a nuestra comunidad de tejedoras y recibe inspiración semanal.
                    </p>

                    <div className="relative z-10">
                        <JoinCommunityForm>
                            <Button className="bg-white text-[#2C5F5D] hover:bg-[#F5F1E8] rounded-full px-8 py-6 text-lg tracking-wide shadow-lg border-2 border-transparent hover:border-[#2C5F5D] transition-all">
                                Unirme a la Comunidad
                            </Button>
                        </JoinCommunityForm>
                    </div>
                </div>
            </section>
        </main>
    )
}
