const https = require('https');
const path = require('path');

const urls = [
    "https://erqgcpwmulrxlfmzsffi.supabase.co/storage/v1/object/public/products/tapiz-montana-1.jpg",
    "https://erqgcpwmulrxlfmzsffi.supabase.co/storage/v1/object/public/products/portavasos-corazon-1.jpg",
    "https://erqgcpwmulrxlfmzsffi.supabase.co/storage/v1/object/public/products/individuales-redondos-1.jpg",
    "https://erqgcpwmulrxlfmzsffi.supabase.co/storage/v1/object/public/products/chalecos-1.jpg",
    "https://erqgcpwmulrxlfmzsffi.supabase.co/storage/v1/object/public/products/individuales-redondos-ancestral-1.jpg",
    "https://erqgcpwmulrxlfmzsffi.supabase.co/storage/v1/object/public/products/espejo-mandala-1.jpg"
];

function checkUrl(url) {
    return new Promise((resolve) => {
        https.request(url, { method: 'HEAD' }, (res) => {
            resolve({
                name: path.basename(url),
                status: res.statusCode,
                contentType: res.headers['content-type'],
                contentLength: res.headers['content-length'],
                cacheControl: res.headers['cache-control']
            });
        }).on('error', (err) => {
            resolve({ name: path.basename(url), error: err.message });
        }).end();
    });
}

async function run() {
    const results = await Promise.all(urls.map(checkUrl));
    console.log('--- URL CHECK RESULTS ---');
    results.forEach(r => {
        console.log(`${r.status || 'ERROR'} | ${r.contentLength || '0'} bytes | ${r.cacheControl || 'N/A'} | ${r.name}`);
    });
    console.log('------------------------');
}

run();
