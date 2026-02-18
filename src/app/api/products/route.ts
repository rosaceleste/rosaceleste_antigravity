import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export const revalidate = 60 // ISR: revalidate every 60 seconds

export async function GET() {
    try {
        const supabase = await createClient()
        const { data: products, error } = await supabase
            .from('products')
            .select('*')
            .eq('is_active', true)
            .order('created_at', { ascending: false })

        if (error) throw error

        return NextResponse.json(products)
    } catch (error) {
        console.error('Error in /api/products:', error)
        return NextResponse.json([], { status: 500 })
    }
}
