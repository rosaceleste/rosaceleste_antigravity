import { Container } from "@/components/layout/container"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Términos y Condiciones | Rosaceleste",
    description: "Términos y condiciones de uso del sitio web y servicios de Rosaceleste.",
}

export default function TerminosPage() {
    return (
        <div className="bg-[#FAFAFA] min-h-screen pt-32 pb-24">
            <Container>
                <div className="max-w-3xl mx-auto space-y-8">
                    <h1 className="font-serif text-4xl md:text-5xl text-primary mb-8">
                        Términos y Condiciones
                    </h1>

                    <div className="prose prose-stone max-w-none text-foreground/80 leading-relaxed">
                        <p>Última actualización: {new Date().toLocaleDateString('es-CO')}</p>

                        <h3 className="font-serif">1. Introducción</h3>
                        <p>
                            Bienvenido a Rosaceleste. Al acceder a nuestro sitio web y utilizar nuestros servicios,
                            aceptas cumplir con los siguientes términos y condiciones.
                        </p>

                        <h3 className="font-serif">2. Productos y Servicios</h3>
                        <p>
                            Nos esforzamos por mostrar con la mayor precisión posible los colores e imágenes de nuestros productos.
                            Sin embargo, no podemos garantizar que la visualización en tu monitor sea exacta.
                            Todas las piezas son hechas a mano, por lo que pueden presentar ligeras variaciones, lo cual es parte de su valor artesanal.
                        </p>

                        <h3 className="font-serif">3. Clases y Talleres</h3>
                        <p>
                            Las reservas para clases y talleres están sujetas a disponibilidad.
                            En caso de cancelación por parte del participante, se debe notificar con al menos 48 horas de antelación
                            para reprogramar la sesión. No se realizan devoluciones de dinero, salvo casos de fuerza mayor.
                        </p>

                        <h3 className="font-serif">4. Propiedad Intelectual</h3>
                        <p>
                            Todo el contenido de este sitio, incluyendo textos, gráficos, logotipos e imágenes,
                            es propiedad de Rosaceleste y está protegido por las leyes de propiedad intelectual.
                        </p>

                        <h3 className="font-serif">5. Cambios en los Términos</h3>
                        <p>
                            Nos reservamos el derecho de actualizar, cambiar o reemplazar cualquier parte de estos Términos y Condiciones
                            publicando las actualizaciones en nuestro sitio web.
                        </p>

                        <h3 className="font-serif">6. Contacto</h3>
                        <p>
                            Para cualquier inquietud sobre estos términos, por favor contáctanos a través de nuestro WhatsApp o correo electrónico.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}
