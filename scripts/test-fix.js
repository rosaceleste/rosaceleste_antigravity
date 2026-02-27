const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function testFix() {
    const workingUrl = "https://erqgcpwmulrxlfmzsffi.supabase.co/storage/v1/object/public/products/cojin-granito-1.jpg";

    const { data, error } = await supabase
        .from('products')
        .update({ image_url: [workingUrl] })
        .eq('slug', 'tapiz-montana')
        .select();

    if (error) {
        console.error('Error:', error);
        return;
    }

    console.log('--- TEST FIX APPLIED ---');
    console.log(JSON.stringify(data, null, 2));
    console.log('------------------------');
}

testFix();
