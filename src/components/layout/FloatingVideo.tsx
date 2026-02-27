'use client'

import { useState } from 'react';
import { Clapperboard, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingVideo() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-[8.5rem] right-4 z-50 flex items-center gap-2 bg-[#2C5F5D] text-white px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl font-sans text-sm font-medium transition-shadow duration-300"
                aria-label="Ver video de Rosaceleste"
            >
                <Clapperboard size={16} strokeWidth={1.5} />
                <span>Ver video</span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                        <div
                            className="absolute inset-0"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl z-10"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                                aria-label="Cerrar video"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/zTv0-NAg87s?autoplay=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
