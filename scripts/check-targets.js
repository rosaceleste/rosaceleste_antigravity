const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkSpecificProducts() {
    const slugs = [
        'chalecos',
        'tapiz-montana',
        'portavasos-corazon',
        'individuales-redondos-ancestral'
    ];

    const { data, error } = await supabase
        .from('products')
        .select('id, name, slug, image_url, is_active')
        .in('slug', slugs);

    if (error) {
        console.error('Error:', error);
        return;
    }

    console.log('--- TARGET PRODUCTS DATA ---');
    console.log(JSON.stringify(data, null, 2));
    console.log('---------------------------');
}

checkSpecificProducts();
