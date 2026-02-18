import { Container } from "@/components/layout/container"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Política de Privacidad | Rosaceleste",
    description: "Política de privacidad y protección de datos de Rosaceleste.",
}

export default function PrivacidadPage() {
    return (
        <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-24">
            <Container>
                <div className="max-w-3xl mx-auto space-y-8">
                    <h1 className="font-serif text-4xl md:text-5xl text-primary mb-8">
                        Política de Privacidad
                    </h1>

                    <div className="prose prose-stone max-w-none text-foreground/80 leading-relaxed">
                        <p>Última actualización: {new Date().toLocaleDateString('es-CO')}</p>

                        <h3>1. Información que Recopilamos</h3>
                        <p>
                            Podemos recopilar información personal que nos proporcionas voluntariamente, como tu nombre,
                            correo electrónico y número de teléfono, cuando te suscribes a nuestro boletín,
                            reservas una clase o realizas una consulta.
                        </p>

                        <h3>2. Uso de la Información</h3>
                        <p>
                            Utilizamos tu información para:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Procesar tus reservas y pedidos.</li>
                            <li>Comunicarnos contigo sobre nuestros productos, servicios y ofertas.</li>
                            <li>Mejorar nuestro sitio web y experiencia de usuario.</li>
                        </ul>

                        <h3>3. Protección de Datos</h3>
                        <p>
                            Implementamos medidas de seguridad para proteger tu información personal.
                            No vendemos, intercambiamos ni transferimos tu información a terceros sin tu consentimiento,
                            excepto según sea necesario para prestar nuestros servicios (ej. procesadores de pago).
                        </p>

                        <h3>4. Cookies</h3>
                        <p>
                            Utilizamos cookies para mejorar tu experiencia en nuestro sitio.
                            Puedes elegir desactivar las cookies a través de la configuración de tu navegador.
                        </p>

                        <h3>5. Tus Derechos</h3>
                        <p>
                            Tienes derecho a acceder, corregir o eliminar tu información personal en cualquier momento.
                            Para ejercer estos derechos, contáctanos a través de nuestros canales oficiales.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
