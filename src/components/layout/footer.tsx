'use client'

import React from "react";
import Link from "next/link";
import { Instagram, Mail, Phone, MapPin, Youtube } from "lucide-react";
import posthog from 'posthog-js';

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
)

export function Footer() {
    const currentYear = new Date().getFullYear();

    const handleSocialClick = (platform: 'instagram' | 'tiktok' | 'youtube') => {
        posthog.capture('social_link_clicked', {
            platform,
            location: 'footer',
        });
    };

    const footerLinks = {
        productos: [
            { label: "Catálogo Completo", href: "/productos" },
            { label: "Decoración", href: "/productos" }, // Simplified for now
            { label: "Uso Personal", href: "/productos" },
        ],
        nosotros: [
            { label: "Sobre Mí", href: "/sobre-mi" },
            { label: "Clases", href: "/clases" },
            { label: "Experiencias", href: "/experiencias" },
        ],
        legal: [
            { label: "Términos y Condiciones", href: "/terminos" }, // Simplified
            { label: "Política de Privacidad", href: "/privacidad" },
        ]
    };

    return (
        <footer className="bg-foreground text-background pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="block">
                            <span className="font-serif text-3xl italic tracking-tight">Rosaceleste</span>
                        </Link>
                        <p className="text-background/70 leading-relaxed text-sm max-w-xs font-light">
                            Creación de piezas únicas para el hogar, contribuyendo a espacios armoniosos y llenos de calma a través del arte ancestral del tejido.
                        </p>

                        <div className="space-y-4">
                            <h4 className="text-xs font-medium uppercase tracking-wide text-white/50">Síguenos</h4>
                            <div className="flex gap-4">
                                <a
                                    href="https://instagram.com/rosacelestemacrame"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-background/70 hover:text-white transition-colors duration-200"
                                    aria-label="Instagram"
                                    onClick={() => handleSocialClick('instagram')}
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.tiktok.com/@rosacelestemacrame"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-background/70 hover:text-white transition-colors duration-200"
                                    aria-label="TikTok"
                                    onClick={() => handleSocialClick('tiktok')}
                                >
                                    <TikTokIcon size={20} />
                                </a>
                                <a
                                    href="https://www.youtube.com/@rosacelestemacrame"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-background/70 hover:text-white transition-colors duration-200"
                                    aria-label="YouTube"
                                    onClick={() => handleSocialClick('youtube')}
                                >
                                    <Youtube className="w-5 h-5" />
                                </a>
                            </div>
                        </div>


                    </div>

                    {/* Links Columns */}
                    <div>
                        <h3 className="font-serif text-lg mb-6 text-white ml-0">Explorar</h3>
                        <ul className="space-y-4">
                            {footerLinks.productos.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-background/70 hover:text-accent text-sm transition-colors duration-300">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif text-lg mb-6 text-white">Comunidad</h3>
                        <ul className="space-y-4">
                            {footerLinks.nosotros.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-[#A0A0A0] hover:text-[#C97D60] text-sm transition-colors duration-300">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="font-serif text-lg md:text-xl mb-6 text-white">Contacto</h4>
                        <ul className="space-y-4 text-sm text-background/70">
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                                <a href="mailto:rosacelestemacrame@gmail.com" className="hover:text-white transition-colors">
                                    rosacelestemacrame@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                                <a href="https://wa.me/573017870521" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    +57 301 787 0521
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                                <span>Guadalajara de Buga, Colombia</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/50">
                    <p>&copy; {currentYear} Rosaceleste. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        {footerLinks.legal.map((link) => (
                            <Link key={link.href} href={link.href} className="hover:text-background transition-colors">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
