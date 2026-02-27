import { createClient } from '@supabase/supabase-js'
import { appendLeadToSheet } from '@/lib/google-sheets'
import { resend } from '@/lib/resend'
import { NextResponse } from 'next/server'
import { getPostHogClient } from '@/lib/posthog-server'

// Initialize Supabase Admin Client to bypass RLS if needed for inserts
// Initialize Supabase Admin Client lazily
const getSupabase = () => createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)


export async function POST(req: Request) {
    // Get PostHog distinct ID and session ID from headers for correlation
    const distinctId = req.headers.get('X-POSTHOG-DISTINCT-ID') || undefined
    const sessionId = req.headers.get('X-POSTHOG-SESSION-ID') || undefined

    try {
        const body = await req.json()
        const { name, lastName, whatsapp, country, email } = body

        // 1. Google Sheets
        try {
            await appendLeadToSheet({
                date: new Date().toISOString(),
                name,
                lastName,
                whatsapp,
                country,
                email,
            })
        } catch (sheetError) {
            console.error('Google Sheets Error:', sheetError)
            // Continue execution, don't fail user flow
        }

        // 2. Supabase
        const { error: supabaseError } = await getSupabase()
            .from('leads')
            .insert([
                {
                    name: `${name} ${lastName}`.trim(),
                    email,
                    phone: whatsapp,
                    country,
                    source: 'community_form',
                    interest_type: 'comunidad',
                    created_at: new Date().toISOString(),
                },
            ])

        if (supabaseError) {
            console.error('Supabase Error:', supabaseError)
            // Continue if table issue, likely missing
        }

        // 3. Resend Email
        try {
            await resend.emails.send({
                from: 'Rosaceleste <hola@rosaceleste.com>', // Verify sender domain
                to: email,
                subject: '¡Bienvenida a la comunidad Rosaceleste! 🌸',
                html: `
          <div style="font-family: sans-serif; color: #1A1A1A;">
            <h1 style="color: #2C5F5D;">¡Hola ${name}!</h1>
            <p>Nos llena de alegría que quieras unirte a este espacio de tejido consciente.</p>
            <p>Aquí podrás conectar con tu creatividad y con otras mujeres maravillosas.</p>
            <br/>
            <a href="https://nas.io/rosaceleste" style="background-color: #2C5F5D; color: white; padding: 10px 20px; text-decoration: none; border-radius: 20px;">Ir a la Comunidad</a>
            <br/><br/>
            <p>Con cariño,<br/>Daniela y el equipo Rosaceleste</p>
          </div>
        `,
            })
        } catch (emailError) {
            console.error('Resend Error:', emailError)
        }

        // 4. PostHog server-side event - capture lead_captured with distinct ID correlation
        try {
            const posthog = getPostHogClient()
            posthog.capture({
                distinctId: distinctId || email, // Use client distinct ID or fallback to email
                event: 'lead_captured',
                properties: {
                    country,
                    has_whatsapp: !!whatsapp,
                    source: 'community_form',
                    $session_id: sessionId,
                }
            })

            // Identify user on server side for correlation
            posthog.identify({
                distinctId: email,
                properties: {
                    name,
                    lastName,
                    country,
                    whatsapp,
                }
            })

            await posthog.shutdown()
        } catch (posthogError) {
            console.error('PostHog Error:', posthogError)
            // Continue execution, don't fail user flow
        }

        return NextResponse.json({
            success: true,
            redirectUrl: 'https://nas.io/rosaceleste'
        })

    } catch {
        return NextResponse.json(
            { error: 'Error processing request' },
            { status: 500 }
        )
    }
}
