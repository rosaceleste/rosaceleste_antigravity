const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
require('dotenv').config({ path: '.env.local' });

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function checkUrl(url) {
    try {
        const resp = await fetch(url, { method: 'HEAD' });
        return { status: resp.status, ok: resp.ok };
    } catch (e) {
        return { status: 'ERROR', error: e.message };
    }
}

async function main() {
    // Get ALL products with their exact image_urls
    const { data: products } = await s.from('products').select('name, slug, image_url');

    const results = [];
    for (const p of products) {
        const url = p.image_url?.[0] || null;
        let check = { status: 'NO_URL' };
        if (url) {
            check = await checkUrl(url);
        }
        results.push({
            name: p.name,
            slug: p.slug,
            url: url?.split('public/')[1] || url, // show just the path
            ...check
        });
    }

    // Also check the 4 local public files
    const localFiles = [
        'http://localhost:3000/products/chalecos-1.jpg',
        'http://localhost:3000/products/tapiz-montana-1.jpg',
        'http://localhost:3000/products/portavasos-corazon-1.jpg',
        'http://localhost:3000/products/individuales-redondos-ancestral-1.jpg',
    ];
    const localChecks = [];
    for (const url of localFiles) {
        const check = await checkUrl(url);
        localChecks.push({ url: url.split('localhost:3000')[1], ...check });
    }

    const output = { productUrlChecks: results, localFileChecks: localChecks };
    fs.writeFileSync('scripts/url-check-results.json', JSON.stringify(output, null, 2));

    // Print summary
    console.log('\n=== PRODUCT URL STATUS ===');
    results.forEach(r => {
        const icon = r.ok ? '✓' : '✗';
        console.log(`${icon} [${r.status}] ${r.slug} → ${r.url}`);
    });

    console.log('\n=== LOCAL FILES ===');
    localChecks.forEach(r => {
        const icon = r.ok ? '✓' : '✗';
        console.log(`${icon} [${r.status}] ${r.url}`);
    });
}

main().catch(console.error);
