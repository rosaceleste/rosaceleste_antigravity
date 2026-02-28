const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
require('dotenv').config({ path: '.env.local' });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const s = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Map slug → correct public URL (relative, Next.js will serve from /public)
const updates = [
    { slug: 'portavasos-corazon', image_url: ['/products/portavasos-corazon-1.jpg'] },
    { slug: 'individuales-redondos-ancestral', image_url: ['/products/individuales-redondos-ancestral-1.jpg'] },
    { slug: 'tapiz-montana', image_url: ['/products/tapiz-montana-1.jpg'] },
    { slug: 'chalecos-bolsos', image_url: ['/products/chalecos-1.jpg'] },
];

async function main() {
    // First, get the current state to find the right slugs
    const { data: products } = await s.from('products').select('id, name, slug, image_url')
        .or('name.ilike.%chaleco%,name.ilike.%tapiz%montana%,name.ilike.%portavasos%coraz%,name.ilike.%individuales%redond%');

    console.log('Found products:');
    products.forEach(p => console.log(' -', p.name, '|', p.slug, '|', p.image_url));

    // Update each
    for (const u of updates) {
        const { data, error } = await s.from('products')
            .update({ image_url: u.image_url })
            .eq('slug', u.slug)
            .select('name, slug, image_url');

        if (error) {
            console.log('ERROR updating', u.slug, ':', error.message);
        } else if (data && data.length > 0) {
            console.log('UPDATED:', data[0].name, '->', data[0].image_url);
        } else {
            console.log('NO MATCH for slug:', u.slug);
            // Try by name pattern
        }
    }
}

main().then(() => process.exit(0)).catch(e => { console.error(e); process.exit(1); });
