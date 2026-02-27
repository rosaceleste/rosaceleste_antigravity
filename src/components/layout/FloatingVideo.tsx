'use client'

import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingVideo() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-[104px] right-6 z-50 flex items-center justify-center w-14 h-14 bg-white text-[#2C5F5D] border-2 border-[#2C5F5D] rounded-full shadow-lg hover:scale-110 transition-transform hover:shadow-xl"
                aria-label="Ver video de introducción"
            >
                <Play className="w-6 h-6 ml-1" />
            </button>

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
