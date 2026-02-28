const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
require('dotenv').config({ path: '.env.local' });

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function main() {
    // Check what image URLs the 4 broken products have in the DB
    const { data: products } = await s.from('products').select('name, slug, image_url')
        .in('slug', ['chalecos', 'portavasos-corazon', 'tapiz-montana', 'individuales-redondos-ancestral']);

    console.log('=== DB IMAGE URLs ===');
    products.forEach(p => {
        console.log(`${p.name} (${p.slug}):`);
        (p.image_url || []).forEach(url => console.log(`  ${url}`));
    });

    // Check these specific URLs
    console.log('\n=== URL CHECK ===');
    for (const p of products) {
        for (const url of (p.image_url || [])) {
            const resp = await fetch(url);
            const contentType = resp.headers.get('content-type');
            const contentLen = resp.headers.get('content-length');
            console.log(`${resp.status} ${contentType} (${contentLen}b) — ${url.split('public/')[1]}`);
        }
    }
}

main().catch(console.error);
