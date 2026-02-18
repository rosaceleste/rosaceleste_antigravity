import { resend } from './resend';

export async function sendTestEmail(to: string) {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Rosaceleste <onboarding@resend.dev>',
            to: [to],
            subject: 'Prueba de Configuración - Rosaceleste',
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h1 style="color: #4a3728;">¡Hola!</h1>
                    <p>Esta es una prueba de configuración del servicio de emails para <strong>Rosaceleste</strong>.</p>
                    <p>Si recibiste este mensaje, la integración con Resend está funcionando correctamente.</p>
                    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
                    <p style="font-size: 12px; color: #666;">Este es un mensaje automático, por favor no respondas.</p>
                </div>
            `,
        });

        if (error) {
            console.error('Error sending test email:', error);
            return { success: false, error };
        }

        return { success: true, data };
    } catch (err) {
        console.error('Unexpected error sending test email:', err);
        return { success: false, error: err };
    }
}
