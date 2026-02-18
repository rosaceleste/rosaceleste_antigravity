'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { Container } from './container'
import posthog from 'posthog-js'

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent')
        if (!consent) {
            // Small delay to not overwhelm immediate load
            const timer = setTimeout(() => setIsVisible(true), 1000)
            return () => clearTimeout(timer)
        }
    }, [])

    const acceptCookies = (action: 'accept' | 'close') => {
        localStorage.setItem('cookie_consent', 'true')
        setIsVisible(false)

        // Capture cookie consent event
        posthog.capture('cookie_consent_accepted', {
            action,
        })
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]"
                >
                    <Container className="py-4 md:py-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="text-sm text-neutral-600 text-center md:text-left">
                                <p>
                                    Utilizamos cookies para mejorar tu experiencia y analizar el tráfico del sitio.
                                    Al continuar navegando, aceptas nuestra{' '}
                                    <Link href="/privacidad" className="text-primary hover:underline font-medium">
                                        Política de Privacidad
                                    </Link>.
                                </p>
                            </div>
                            <div className="flex gap-3 shrink-0">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => acceptCookies('close')}
                                    className="border-neutral-200 hover:bg-neutral-50 rounded-full px-6"
                                >
                                    Cerrar
                                </Button>
                                <Button
                                    size="sm"
                                    onClick={() => acceptCookies('accept')}
                                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 shadow-md"
                                >
                                    Aceptar
                                </Button>
                            </div>
                        </div>
                    </Container>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
