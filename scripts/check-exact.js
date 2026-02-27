const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkExactUrls() {
    const { data, error } = await supabase
        .from('products')
        .select('name, image_url')
        .in('slug', ['tapiz-montana', 'individuales-redondos-ancestral']);

    if (error) {
        console.error('Error:', error);
        return;
    }

    data.forEach(p => {
        const url = p.image_url[0];
        console.log(`Product: [${p.name}]`);
        console.log(`URL: [${url}]`);
        console.log(`Length: ${url.length}`);
        console.log(`Char codes: ${Array.from(url).map(c => c.charCodeAt(0)).join(',')}`);
        console.log('---');
    });
}

checkExactUrls();
