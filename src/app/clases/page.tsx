import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import { CONTACT, WHATSAPP_MESSAGES } from '@/constants/site'
import { ClassBookingButton } from './ClassBookingButton'

import { PriceCard } from './PriceCard'

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
        image: '/Talleres/WhatsApp Image 2026-02-10 at 10.51.33.jpeg',
        prices: [
            { name: "Portavasos/portavelas redondo o de corazón", price: "$65,000 COP", description: "Incluye insumos para realizar dos portavasos y la asesoría de una clase" },
            { name: "Portaservilletas", price: "$30,000", description: "Incluye insumos para realizar dos portaservilletas en dos diseños diferentes y la asesoría de una clase" },
            { name: "Individuales rectangulares", price: "$45,000", description: "Incluye insumos para realizar el individual y la asesoría de 2 clases" }
        ]
    },
    {
        title: 'Decoración de Pared',
        description: 'Crea piezas artísticas que transformen tus espacios.',
        image: '/Talleres/WhatsApp Image 2026-02-10 at 10.52.27.jpeg',
        prices: [
            { name: "Telares", price: "$110,000", description: "Incluye insumos para realizar el telar de 90cm aprox. y la asesoría de 3 clases", notice: "El precio puede variar según las dimensiones y el diseño escogido. Las clases extra tienen un valor adicional." },
            { name: "Tapices de hojas", price: "$85,000", description: "Incluye soporte de madera, insumos para realizar el tapiz de 90cm aprox. y la asesoría de 3 clases, siendo la tercera para corte y ajuste de cada hoja en el soporte", notice: "El precio puede variar según las dimensiones y el diseño escogido. Las clases extra tienen un valor adicional." },
            { name: "Atrapasueños", price: "$65,000", description: "Incluye aro de 25cm de diámetro aprox, insumos para realizar el tejido, asesoría de 2 clases", notice: "El precio puede variar según las dimensiones y el diseño escogido. Las clases extra tienen un valor adicional." },
            { name: "Espejos", price: "$125,000", description: "Incluye soporte de madera de 40cm, espejo de 40cm con agarre trasero, insumos para realizar el tejido y la asesoría de 3 clases", notice: "El precio puede variar según las dimensiones y el diseño escogido. Las clases extra tienen un valor adicional." },
            { name: "Portalibros", price: "$55,000", description: "Incluye insumos para realizar el proyecto y la asesoría de 2 clases", notice: "El precio puede variar según las dimensiones y el diseño escogido. Las clases extra tienen un valor adicional." },
            { name: "Portamacetas", price: "$60,000", description: "Incluye insumos para realizar 2 portamacetas en diferentes diseños y la asesoría de la clase" }
        ]
    },
    {
        title: 'De Uso Personal',
        description: 'Teje accesorios únicos para ti y lleva tu arte contigo.',
        image: '/Talleres/WhatsApp Image 2026-02-10 at 10.55.29.jpeg',
        prices: [
            { name: "Chaleco", price: "$77,000", description: "Incluye insumos para realizar el proyecto en color de preferencia y la asesoría de 2 clases", notice: "El precio puede variar según las dimensiones y el diseño escogido. Las clases extra tienen un valor adicional." },
            { name: "Bolso tipo cartera", price: "$85,000", description: "Incluye herrajes e insumos para realizar el proyecto en el color de preferencia y la asesoría de 3 clases", notice: "El precio puede variar según las dimensiones y el diseño escogido. Las clases extra tienen un valor adicional." }
        ]
    },
    {
        title: 'Decoración del hogar',
        description: 'Funcionalidad y diseño tejidos a mano para cada rincón.',
        image: '/Talleres/WhatsApp Image 2026-02-10 at 10.59.01.jpeg',
        prices: [
            { name: "Lámparas", price: "$110,000", description: "Incluye extensión eléctrica de 200cm, insumos para tejer, estructura en metal si requiere el diseño y la asesoría de 2-3 clases", notice: "El precio puede variar según las dimensiones y el diseño escogido. Las clases extra tienen un valor adicional." },
            { name: "Estructura para matera", price: "$85,000", description: "Incluye estructura metálica para matera de 20cm de diámetro x 20cm de alto, insumos para realizar el tejido y asesoría de 3 clases" }
        ]
    },
    {
        title: 'Nivel Experto',
        description: 'Desafía tu creatividad con proyectos de mayor escala y complejidad.',
        image: '/Talleres/WhatsApp Image 2026-02-10 at 10.57.52.jpeg',
        prices: [
            { name: "Camino de mesa", price: "$133,000 (VARIABLE)", description: "Incluye insumos para realizar el proyecto con medidas de 140cm aprox de largo, en el color de preferencia y la asesoría de 4-5 clases según el diseño escogido", notice: "El precio puede variar según las dimensiones y el diseño escogido. Las clases extra tienen un valor adicional." },
            { name: "Cortina", price: "$150,000 (VARIABLE)", description: "Incluye insumos para realizar el proyecto con medidas de 70cm de ancho aprox, en el color de preferencia y la asesoría de 4 clases según el diseño escogido", notice: "El precio puede variar según las dimensiones y el diseño escogido. Las clases extra tienen un valor adicional." },
            { name: "Hamaca", price: "$370,000", description: "Incluye hamaca tejida en técnica artesanal de telar, 2 kg de hilo para tejer el aplique en macramé y la asesoría de 4 clases", notice: "El precio puede variar según el diseño escogido y si ya cuentas con una hamaca sobre la que se puede trabajar. Las clases extra tienen un valor adicional." },
            { name: "Biombo", price: "$634,000 (VARIABLE)", description: "Incluye estructura en madera en cedro de 3 cuerpos cada uno de 60cm de ancho y 170cm alto, 2 kg de hilo para tejer el aplique en macramé y la asesoría de 7 clases", notice: "El precio puede variar según las dimensiones y el diseño escogido. Las clases extra tienen un valor adicional." }
        ]
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
                            className={`flex flex-col md:flex-row gap-12 lg:gap-20 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} scroll-mt-24`}
                        >
                            {/* Text Content */}
                            <div className="flex-1 space-y-8">
                                <div className="space-y-6">
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
                                </div>

                                {/* Pricing Cards Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                    {category.prices.map((priceItem, idx) => (
                                        <PriceCard
                                            key={idx}
                                            name={priceItem.name}
                                            price={priceItem.price}
                                            description={priceItem.description}
                                            notice={priceItem.notice}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Visual Content */}
                            <div className="flex-1 w-full aspect-[4/3] relative overflow-hidden rounded-2xl shadow-xl group md:sticky md:top-32">
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