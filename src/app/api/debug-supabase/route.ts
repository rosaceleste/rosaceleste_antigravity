import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
    try {
        const supabase = await createClient()

        // Test 1: Can we connect at all?
        const { data, error } = await supabase
            .from('products')
            .select('count')
            .limit(1)

        if (error) {
            return NextResponse.json({
                status: 'error',
                code: error.code,
                message: error.message,
                details: error.details,
                hint: error.hint,
            }, { status: 500 })
        }

        // Test 2: Fetch actual products
        const { data: products, error: productsError } = await supabase
            .from('products')
            .select('id, name, slug, is_active')
            .limit(5)

        return NextResponse.json({
            status: 'ok',
            count_result: data,
            sample_products: products,
            products_error: productsError,
        })
    } catch (err) {
        return NextResponse.json({
            status: 'exception',
            error: String(err),
        }, { status: 500 })
    }
}
