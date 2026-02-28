const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });
const fs = require('fs');
const path = require('path');

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const s = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Map: which photo from public/Productos maps to which product slug
// Based on visual inspection of the images shared in chat:
// - Individuales redondos ancestral: round macrame placemat → look for round-shaped photos
// - Chalecos: vest on mannequin
// - Portavasos corazon: heart-shaped coaster green
// - Tapiz montana: wall hanging with mountain waves
const PHOTO_SLUG_MAP = {
    'chalecos': 'B645D30C-C94B-4DC5-896A-BD8C981D3A01_Original.JPG',
    'portavasos-corazon': '28480F51-D5C2-4C3A-9D5C-0D848189CBE9.jpg',
    'tapiz-montana': '65BDB03D-0C03-43B7-82FA-10DCAE70639D.jpg',
    'individuales-redondos-ancestral': 'IMG_5646.PNG',
};

async function uploadFile(slug, filename) {
    const srcPath = path.join(__dirname, '..', 'public', 'Productos', filename);
    if (!fs.existsSync(srcPath)) {
        console.log(`FILE NOT FOUND: ${srcPath}`);
        return null;
    }

    const ext = path.extname(filename).toLowerCase();
    const mimeType = ext === '.png' ? 'image/png' : 'image/jpeg';
    const destFilename = `${slug}-fixed${ext}`;

    const fileBuffer = fs.readFileSync(srcPath);
    const { data, error } = await s.storage
        .from('products')
        .upload(destFilename, fileBuffer, {
            contentType: mimeType,
            upsert: true
        });

    if (error) {
        console.log(`UPLOAD ERROR for ${slug}: ${error.message}`);
        return null;
    }

    const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/products/${destFilename}`;
    console.log(`UPLOADED ${slug}: ${publicUrl}`);
    return publicUrl;
}

async function main() {
    const results = {};

    for (const [slug, filename] of Object.entries(PHOTO_SLUG_MAP)) {
        const url = await uploadFile(slug, filename);
        if (url) {
            // Update DB
            const { data, error } = await s
                .from('products')
                .update({ image_url: [url] })
                .eq('slug', slug)
                .select('name, slug, image_url');

            if (error) {
                console.log(`DB UPDATE ERROR for ${slug}: ${error.message}`);
            } else if (data && data.length > 0) {
                console.log(`DB UPDATED: ${data[0].name} → ${data[0].image_url[0]}`);
                results[slug] = { url, dbUpdated: true };
            } else {
                console.log(`DB NO ROWS UPDATED for slug: ${slug} (RLS?)`);
                results[slug] = { url, dbUpdated: false };
            }
        }
    }

    fs.writeFileSync('scripts/upload-results.json', JSON.stringify(results, null, 2));
    console.log('\n=== DONE ===');
    console.log(JSON.stringify(results, null, 2));
}

main().catch(console.error);
