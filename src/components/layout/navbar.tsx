'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS } from "@/constants/site";
import { whatsappLinks } from "@/lib/whatsapp";
import { motion, AnimatePresence } from "framer-motion";
import posthog from 'posthog-js';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);

            // Update active section based on scroll position
            const sections = NAV_LINKS.map(link => link.href.replace('#', ''));
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(`#${section}`);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.getElementById(href.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setIsMobileMenuOpen(false);
            }
        }
    };

    const handleWhatsAppClick = (location: 'desktop' | 'mobile') => {
        posthog.capture('whatsapp_nav_clicked', {
            location,
        });
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
                ? 'bg-background/80 backdrop-blur-md border-border py-4'
                : 'bg-transparent border-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        onClick={(e) => {
                            if (window.location.pathname === '/') {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        }}
                        className="font-serif font-medium text-2xl md:text-3xl tracking-tight transition-all duration-300 hover:opacity-80 text-primary"
                    >
                        Rosaceleste
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex items-center gap-10">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={(e) => handleSmoothScroll(e, link.href)}
                                    className={`text-xs uppercase tracking-[0.15em] transition-all duration-300 hover:opacity-100 ${activeSection === link.href
                                        ? 'text-primary font-medium opacity-100'
                                        : 'text-muted opacity-70 hover:text-primary'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* WhatsApp CTA (Desktop) */}
                    <div className="hidden lg:flex items-center">
                        <a
                            href={whatsappLinks.general}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary/20 text-primary text-sm font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                            onClick={() => handleWhatsAppClick('desktop')}
                        >
                            <MessageCircle className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                            <span>Conectar</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-primary hover:bg-muted/10 rounded-full transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-sm"
                        >
                            <ul className="flex flex-col py-6 px-6 gap-2">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={(e) => handleSmoothScroll(e, link.href)}
                                            className={`block px-4 py-3 text-sm uppercase tracking-widest transition-colors rounded-lg ${activeSection === link.href
                                                ? 'text-[#2C5F5D] bg-[#2C5F5D]/5 font-medium'
                                                : 'text-[#4A4A4A] hover:bg-black/5'
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                                <li className="pt-4 mt-2 border-t border-black/5">
                                    <a
                                        href={whatsappLinks.general}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all active:scale-95"
                                        onClick={() => handleWhatsAppClick('mobile')}
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        <span>Conectar por WhatsApp</span>
                                    </a>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
