'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
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

    return (
        <Button
            asChild
            variant={variant === 'secondary' ? 'secondary' : 'default'}
            size="lg"
            className={cn(
                "rounded-full px-8 py-6 text-lg tracking-wide shadow-lg",
                className
            )}
            onClick={handleClick}
        >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        </Button>
    )
}
