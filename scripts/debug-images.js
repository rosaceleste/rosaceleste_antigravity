const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const s = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function main() {
    // List files in storage root
    const { data: files, error: listError } = await s.storage.from('products').list('', { limit: 200 });

    const output = {
        storageFiles: files ? files.map(f => f.name) : [],
        storageError: listError?.message,
    };

    // Get DB image_url for broken products
    const { data: products } = await s.from('products').select('name, slug, image_url')
        .or('name.ilike.%chaleco%,name.ilike.%tapiz%montana%,name.ilike.%portavasos%coraz%,name.ilike.%individuales%redond%');

    output.brokenProducts = products;

    fs.writeFileSync('/tmp/img-debug.json', JSON.stringify(output, null, 2));
    console.log(JSON.stringify(output, null, 2));
}

main().catch(e => { console.error(e); process.exit(1); });
