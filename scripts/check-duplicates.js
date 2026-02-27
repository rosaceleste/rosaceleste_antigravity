const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkDuplicates() {
    const { data, error } = await supabase
        .from('products')
        .select('id, name, slug, image_url, is_active')
        .eq('is_active', true);

    if (error) {
        console.error('Error:', error);
        return;
    }

    const nameCounts = {};
    data.forEach(p => {
        nameCounts[p.name] = (nameCounts[p.name] || 0) + 1;
    });

    const duplicates = data.filter(p => nameCounts[p.name] > 1);

    console.log('--- ALL ACTIVE PRODUCTS ---');
    data.forEach(p => {
        console.log(`${p.name} | ${p.slug} | Images: ${p.image_url ? p.image_url.length : 'NULL'}`);
    });
    console.log('---------------------------');

    if (duplicates.length > 0) {
        console.log('--- DUPLICATES FOUND ---');
        console.log(JSON.stringify(duplicates, null, 2));
        console.log('------------------------');
    } else {
        console.log('No duplicates found.');
    }
}

checkDuplicates();
