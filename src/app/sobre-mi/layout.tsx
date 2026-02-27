import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sobre mí — Daniela Sierra',
    description: 'Artesana certificada SENA y Artesanías de Colombia. Más de 7 años tejiendo comunidad e impactando 1,500 personas.',
}

export default function SobreMiLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
