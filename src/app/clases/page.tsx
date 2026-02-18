import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import { CONTACT, WHATSAPP_MESSAGES } from '@/constants/site'
import { ClassBookingButton } from './ClassBookingButton'

export const metadata: Metadata = {
    title: 'Clases de Tejido | Rosaceleste',
    description: 'Clases personalizadas de macramé y tejido consciente. Virtuales o presenciales, para todos los niveles.',
    openGraph: {
        title: 'Clases de Tejido | Rosaceleste',
        description: 'Aprende a tejer desde la calma. Clases presenciales y virtuales.',
        images: ["/og-classes.jpg"]
    }
}

const categories = [
    {
        title: 'Decoración de Mesa',
        description: 'Empieza con proyectos pequeños y gratificantes para embellecer tu hogar.',
        items: ['Portavasos / Portavelas', 'Individuales', 'Portaservilletas'],
        image: '/Talleres/WhatsApp Image 2026-02-10 at 10.51.33.jpeg'
    },
    {
        title: 'Decoración de Pared',
        description: 'Crea piezas artísticas que transformen tus espacios.',
        items: ['Telares', 'Tapices de hojas', 'Espejos', 'Lámparas', 'Portalibros', 'Portamacetas'],
        image: '/Talleres/WhatsApp Image 2026-02-10 at 10.52.27.jpeg'
    },
    {
        title: 'De Uso Personal',
        description: 'Teje accesorios únicos para ti y lleva tu arte contigo.',
        items: ['Chaleco', 'Bolsos'],
        image: '/Talleres/WhatsApp Image 2026-02-10 at 10.55.29.jpeg'
    },
    {
        title: 'Nivel Experto',
        description: 'Desafía tu creatividad con proyectos de mayor escala y complejidad.',
        items: ['Camino de mesa', 'Cortinas', 'Telares grandes', 'Hamaca', 'Biombo'],
        image: '/Talleres/WhatsApp Image 2026-02-10 at 10.57.52.jpeg'
    }
]

export default function ClassesPage() {
    const whatsappUrl = `https://wa.me/${CONTACT.whatsapp.number.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_MESSAGES.booking)}`;

    return (
        <main className="min-h-screen bg-[#FAFAFA]">
            {/* Hero Section */}
            <section className="relative py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[url('/images/pattern-bg.png')] bg-repeat opacity-10 pointer-events-none"></div>

                <h1 className="font-serif text-4xl md:text-6xl text-[#1A1A1A] mb-8 leading-tight max-w-4xl mx-auto">
                    El Arte de Crear con <span className="italic text-[#2C5F5D]">Calma</span>
                </h1>

                <p className="font-sans text-lg md:text-xl text-[#4A4A4A] max-w-3xl mx-auto leading-relaxed font-light mb-12">
                    Clases personalizadas virtuales o presenciales, individuales o grupales.
                    No necesitas conocimientos previos para pasar de principiante a avanzado
                    con nuestra metodología de aprendizaje, donde no solo aprendes a tejer,
                    sino que disfrutas de la alegría de hacer algo por ti.
                </p>

                <ClassBookingButton whatsappUrl={whatsappUrl} location="hero">
                    Agendar una Clase
                </ClassBookingButton>
            </section>

            {/* Categories Grid */}
            <section className="px-6 md:px-12 lg:px-24 pb-32">
                <div className="max-w-7xl mx-auto space-y-24">
                    {categories.map((category, index) => (
                        <div
                            key={category.title}
                            id={category.title.toLowerCase().replace(/ /g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "")}
                            className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} scroll-mt-24`}
                        >
                            {/* Text Content */}
                            <div className="flex-1 space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-12 bg-[#2C5F5D]"></span>
                                    <span className="text-sm uppercase tracking-widest text-[#2C5F5D]">Categoría</span>
                                </div>

                                <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A]">
                                    {category.title}
                                </h2>

                                <p className="text-[#4A4A4A] font-light text-lg">
                                    {category.description}
                                </p>

                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                                    {category.items.map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-[#1A1A1A]">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#9D695A]"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Visual Content */}
                            <div className="flex-1 w-full aspect-[4/3] relative overflow-hidden rounded-2xl shadow-xl group">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-[#2C5F5D] py-24 px-6 text-center text-white">
                <h2 className="font-serif text-3xl md:text-5xl mb-6">
                    Comienza tu viaje creativo hoy
                </h2>
                <p className="font-light text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90">
                    Sin frustraciones ni complicaciones. Solo tú, tus manos y la magia de crear.
                </p>
                <ClassBookingButton whatsappUrl={whatsappUrl} location="footer" variant="secondary">
                    ¡Quiero Empezar!
                </ClassBookingButton>
            </section>
        </main>
    )
}