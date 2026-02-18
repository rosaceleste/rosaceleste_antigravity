'use client'

import { Button } from '@/components/ui/button'
import posthog from 'posthog-js'

interface ClassBookingButtonProps {
    whatsappUrl: string
    variant?: 'primary' | 'secondary'
    className?: string
    children: React.ReactNode
    location: 'hero' | 'footer'
}

export function ClassBookingButton({
    whatsappUrl,
    variant = 'primary',
    className,
    children,
    location,
}: ClassBookingButtonProps) {
    const handleClick = () => {
        // Capture class booking click event
        posthog.capture('class_booking_clicked', {
            cta_location: location,
        })
    }

    if (variant === 'secondary') {
        return (
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
                <Button
                    variant="outline"
                    className={className || "bg-transparent border-white text-white hover:bg-white hover:text-[#2C5F5D] rounded-full px-8 py-6 text-lg border-2"}
                >
                    {children}
                </Button>
            </a>
        )
    }

    return (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
            <Button
                size="lg"
                className={className || "rounded-full px-8 py-6 text-lg tracking-wide shadow-lg transition-all hover:scale-105"}
            >
                {children}
            </Button>
        </a>
    )
}
