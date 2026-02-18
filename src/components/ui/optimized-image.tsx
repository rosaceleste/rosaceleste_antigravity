'use client'

import React, { useState } from 'react'
import Image, { ImageProps } from 'next/image'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends Omit<ImageProps, 'onError'> {
    fallback?: React.ReactNode
}

export function OptimizedImage({
    src,
    alt,
    className,
    fallback,
    ...props
}: OptimizedImageProps) {
    const [error, setError] = useState(false)

    if (error && fallback) {
        return <>{fallback}</>
    }

    return (
        <Image
            src={src}
            alt={alt}
            className={cn('transition-opacity duration-300', error ? 'opacity-0' : 'opacity-100', className)}
            onError={() => setError(true)}
            {...props}
        />
    )
}
