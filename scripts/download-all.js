const https = require('https');
const fs = require('fs');
const path = require('path');

const urls = [
    "https://erqgcpwmulrxlfmzsffi.supabase.co/storage/v1/object/public/products/tapiz-montana-1.jpg",
    "https://erqgcpwmulrxlfmzsffi.supabase.co/storage/v1/object/public/products/portavasos-corazon-1.jpg",
    "https://erqgcpwmulrxlfmzsffi.supabase.co/storage/v1/object/public/products/individuales-redondos-ancestral-1.jpg",
    "https://erqgcpwmulrxlfmzsffi.supabase.co/storage/v1/object/public/products/chalecos-1.jpg"
];

async function download(url) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            const fileName = path.basename(url);
            const fileStream = fs.createWriteStream(fileName);
            res.pipe(fileStream);

            fileStream.on('finish', () => {
                fileStream.close();
                const stats = fs.statSync(fileName);
                resolve({ name: fileName, size: stats.size, status: res.statusCode });
            });
        }).on('error', (err) => {
            resolve({ name: path.basename(url), error: err.message });
        });
    });
}

async function run() {
    const results = await Promise.all(urls.map(download));
    console.log('--- DOWNLOAD RESULTS ---');
    results.forEach(r => {
        console.log(`${r.status || 'ERROR'} | ${r.size || '0'} bytes | ${r.name}`);
    });
    console.log('------------------------');
}

run();
