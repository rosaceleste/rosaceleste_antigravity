const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const path = require('path');

// Get exact DB URLs for the 4 broken products
const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function main() {
    const { data: products } = await s.from('products').select('name, slug, image_url')
        .in('slug', ['chalecos', 'portavasos-corazon', 'tapiz-montana', 'individuales-redondos-ancestral']);

    for (const p of products) {
        const urls = p.image_url || [];
        for (const url of urls) {
            // Check content-type to confirm if HEIC
            const head = await fetch(url);
            const ct = head.headers.get('content-type');
            // Extract the filename from the URL
            const filename = url.split('/').pop();
            console.log(`[${p.slug}] ${filename} → ${ct} (${head.status})`);
        }
    }
}

main().catch(console.error);
