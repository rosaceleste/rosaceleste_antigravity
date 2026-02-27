import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sobre Mí | Rosaceleste',
    description: 'Conoce a Daniela, la artista detrás de Rosaceleste. Macramé consciente y bienestar creativo.',
    openGraph: {
        title: 'Sobre Mí | Rosaceleste',
        description: 'Soy Daniela, artista visual y facilitadora de experiencias de bienestar creativo.',
        images: ["/og-about.jpg"]
    }
}

export default function SobreMiLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
