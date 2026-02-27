const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function listStorageFiles() {
    const { data, error } = await supabase
        .storage
        .from('products')
        .list('', {
            limit: 100,
            offset: 0,
            sortBy: { column: 'name', order: 'asc' },
        });

    if (error) {
        console.error('Error:', error);
        return;
    }

    console.log('--- STORAGE FILES ---');
    data.forEach(f => {
        console.log(`${f.name} | ${f.metadata?.size || 'N/A'} bytes | ${f.metadata?.mimetype || 'N/A'}`);
    });
    console.log('---------------------');
}

listStorageFiles();
