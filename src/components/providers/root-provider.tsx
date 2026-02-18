'use client'

import { RouterProvider } from '@heroui/react'
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { AnalyticsProvider } from './analytics-provider'

export function RootProvider({ children }: { children: React.ReactNode }) {
    const router = useRouter()

    return (
        <RouterProvider navigate={router.push}>
            <NextThemesProvider attribute="class" defaultTheme="light">
                <AnalyticsProvider>
                    {children}
                </AnalyticsProvider>
            </NextThemesProvider>
        </RouterProvider>
    )
}
