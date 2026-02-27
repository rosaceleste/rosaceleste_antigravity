const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

async function diagnose() {
    const envContent = fs.readFileSync(path.join(__dirname, '..', '.env.local'), 'utf-8');
    const env = {};
    envContent.split('\n').forEach(line => {
        const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?$/);
        if (match) {
            let value = (match[2] || '').trim();
            if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
            env[match[1]] = value;
        }
    });

    const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const supabase = createClient(supabaseUrl, supabaseKey);

    const productsToFind = [
        '%chaleco%',
        '%tapiz mont%',
        '%portavasos coraz%',
        '%individuales redond%'
    ];

    const { data, error } = await supabase
        .from('products')
        .select('*')
        .or(`name.ilike.${productsToFind.join(',name.ilike.')}`);

    if (error) {
        console.error('Error fetching products:', error);
        process.exit(1);
    }

    // Also fetch one known good product to compare structure
    const { data: goodProduct } = await supabase
        .from('products')
        .select('*')
        .limit(1);

    const result = {
        targetProducts: data,
        structureExample: goodProduct ? goodProduct[0] : null
    };

    fs.writeFileSync(path.join(__dirname, 'diagnose-result-clean.json'), JSON.stringify(result, null, 2));
    console.log('Diagnosis complete. Results saved to scripts/diagnose-result-clean.json');
}

diagnose().catch(err => {
    console.error(err);
    process.exit(1);
});
