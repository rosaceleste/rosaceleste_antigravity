const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
require('dotenv').config({ path: '.env.local' });

const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function main() {
    const results = {};

    // 1. List root of bucket
    const { data: rootFiles, error: rootError } = await s.storage.from('products').list('', { limit: 200 });
    results.rootFiles = rootFiles?.map(f => ({ name: f.name, type: f.id ? 'file' : 'folder' })) || [];
    results.rootError = rootError?.message;

    // 2. Get all product image_url values (first 5 to avoid truncation)
    const { data: products } = await s.from('products').select('name, slug, image_url').limit(5);
    results.sampleUrls = products?.map(p => ({
        name: p.name,
        slug: p.slug,
        url: p.image_url?.[0] || 'EMPTY'
    }));

    // 3. Check if the URL for "Espejo Mandala" (first product) returns 200
    const testUrl = products?.[0]?.image_url?.[0];
    if (testUrl) {
        const resp = await fetch(testUrl, { method: 'HEAD' }).catch(e => ({ ok: false, status: e.message }));
        results.testUrlStatus = { url: testUrl, ok: resp.ok, status: resp.status };
    }

    // 4. List 'products' subfolder if it exists
    const { data: productsFolder } = await s.storage.from('products').list('products', { limit: 200 });
    results.productsFolderFiles = productsFolder?.map(f => f.name) || [];

    const out = JSON.stringify(results, null, 2);
    fs.writeFileSync('scripts/deep-debug.json', out);
    console.log(out);
}

main().catch(console.error);
