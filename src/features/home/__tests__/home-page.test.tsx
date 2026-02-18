import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { HeroSection } from '../components/hero-section'

// Mock framer-motion
vi.mock('framer-motion', () => ({
    ...vi.importActual('framer-motion'),
    motion: {
        div: ({ children }) => <div>{children}</div>,
        h1: ({ children }) => <h1>{children}</h1>,
        h2: ({ children }) => <h2>{children}</h2>,
    },
    useScroll: () => ({ scrollYProgress: 0 }),
    useTransform: (value) => value,
}))

describe('Homepage', () => {
    it('renders the hero section title', () => {
        render(<HeroSection />)
        expect(screen.getByText(/Habitar/i)).toBeInTheDocument()
        expect(screen.getByText(/la calma/i)).toBeInTheDocument()
    })

    it('renders the main CTAs', () => {
        render(<HeroSection />)
        expect(screen.getByText(/Ver Productos/i)).toBeInTheDocument()
        expect(screen.getByText(/Explorar Cursos/i)).toBeInTheDocument()
    })
})
