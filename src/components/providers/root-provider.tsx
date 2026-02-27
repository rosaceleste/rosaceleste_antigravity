'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { AnalyticsProvider } from './analytics-provider'
import { Toaster } from '@/components/ui/sonner'

export function RootProvider({ children }: { children: React.ReactNode }) {
    return (
        <NextThemesProvider attribute="class" defaultTheme="light">
            <AnalyticsProvider>
                {children}
            </AnalyticsProvider>
            <Toaster position="bottom-right" />
        </NextThemesProvider>
    )
}
