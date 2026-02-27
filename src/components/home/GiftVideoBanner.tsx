'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play } from 'lucide-react'
import posthog from 'posthog-js'

const STORAGE_KEY = 'rosaceleste_gift_banner_closed'
const DAYS_UNTIL_SHOW_AGAIN = 7

export function GiftVideoBanner() {
    const [isVisible, setIsVisible] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        const closedAt = localStorage.getItem(STORAGE_KEY)

        const showBanner = () => {
            posthog.capture('gift_banner_viewed')
            setIsVisible(true)
        }

        if (!closedAt) {
            const timer = setTimeout(showBanner, 1800)
            return () => clearTimeout(timer)
        }

        const daysSinceClosed = (Date.now() - parseInt(closedAt)) / (1000 * 60 * 60 * 24)
        if (daysSinceClosed >= DAYS_UNTIL_SHOW_AGAIN) {
            const timer = setTimeout(showBanner, 1800)
            return () => clearTimeout(timer)
        }
    }, [])

    // Bloquear scroll cuando el modal está abierto
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [isModalOpen])

    const handleClose = () => {
        localStorage.setItem(STORAGE_KEY, Date.now().toString())
        setIsVisible(false)
        posthog.capture('gift_banner_closed')
    }

    const handleOpenVideo = () => {
        setIsModalOpen(true)
        posthog.capture('gift_video_clicked', {
            video_url: 'https://youtu.be/IKYg13vEAIc',
            video_title: 'Tutorial Portavasos 4 min'
        })
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            {/* BANNER */}
            <AnimatePresence>
                {isVisible && !isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="
              fixed bottom-28 left-4 z-30
              w-[calc(100vw-2rem)] max-w-xs
              bg-[#F5F1E8] border border-[rgba(0,0,0,0.1)]
              rounded-xl shadow-xl p-4
              md:bottom-8 md:left-6 md:max-w-sm
            "
                        role="complementary"
                        aria-label="Regalo de bienvenida"
                    >
                        {/* Botón cerrar */}
                        <button
                            onClick={handleClose}
                            className="
                absolute top-3 right-3
                text-[#4A4A4A] hover:text-[#2C5F5D]
                transition-colors duration-200
              "
                            aria-label="Cerrar regalo"
                        >
                            <X size={16} />
                        </button>

                        {/* Encabezado */}
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-lg" role="img" aria-label="regalo">🎁</span>
                            <span className="font-sans text-xs font-semibold text-[#C97D60] uppercase tracking-wide">
                                Regalo para ti
                            </span>
                        </div>

                        {/* Título */}
                        <h3 className="font-serif text-[#2C5F5D] text-base leading-snug mb-1 pr-4">
                            Tutorial gratuito de portavasos
                        </h3>

                        {/* Subtítulo */}
                        <p className="font-sans text-xs text-[#4A4A4A] leading-relaxed mb-4">
                            Mira cómo tejemos un portavasos en solo 4 minutos. ¡Sin experiencia previa!
                        </p>

                        {/* CTA */}
                        <button
                            onClick={handleOpenVideo}
                            className="
                w-full flex items-center justify-center gap-2
                bg-[#2C5F5D] hover:bg-[#1e4543]
                text-white font-sans font-medium text-sm
                px-4 py-2.5 rounded-lg
                transition-colors duration-200
                shadow-sm hover:shadow-md
              "
                        >
                            <Play size={14} fill="currentColor" />
                            Ver tutorial (4 min)
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MODAL CON YOUTUBE EMBED — nativo, sin dependencias de HeroUI */}
            <AnimatePresence>
                {isModalOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                            onClick={handleCloseModal}
                            aria-hidden="true"
                        />

                        {/* Modal panel */}
                        <motion.div
                            key="modal"
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                        >
                            <div
                                className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-3xl pointer-events-auto"
                                role="dialog"
                                aria-modal="true"
                                aria-label="Tutorial de portavasos"
                            >
                                {/* Botón cerrar */}
                                <div className="relative">
                                    <button
                                        onClick={handleCloseModal}
                                        className="
                      absolute top-3 right-3 z-10
                      bg-black/50 hover:bg-black/70
                      text-white rounded-full p-1.5
                      transition-colors duration-200
                    "
                                        aria-label="Cerrar video"
                                    >
                                        <X size={16} />
                                    </button>

                                    {/* YouTube embed responsive */}
                                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                        <iframe
                                            src="https://www.youtube.com/embed/IKYg13vEAIc?autoplay=1&rel=0"
                                            title="Tutorial portavasos macramé — Rosaceleste"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="absolute inset-0 w-full h-full"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Footer del modal */}
                                    <div className="p-4 bg-[#F5F1E8] flex items-center justify-between gap-4">
                                        <p className="font-sans text-sm text-[#4A4A4A]">
                                            ¿Te gustó? <span className="text-[#2C5F5D] font-medium">¡Aprende más en una clase!</span>
                                        </p>
                                        <a
                                            href="/clases"
                                            onClick={handleCloseModal}
                                            className="
                        font-sans text-xs font-semibold
                        bg-[#2C5F5D] text-white
                        px-4 py-2 rounded-lg
                        hover:bg-[#1e4543] transition-colors
                        whitespace-nowrap
                      "
                                        >
                                            Ver clases &rarr;
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
