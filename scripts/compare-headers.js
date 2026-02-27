const https = require('https');

const working = "https://erqgcpwmulrxlfmzsffi.supabase.co/storage/v1/object/public/products/cojin-granito-1.jpg";
const broken = "https://erqgcpwmulrxlfmzsffi.supabase.co/storage/v1/object/public/products/tapiz-montana-1.jpg";

function getHeaders(url) {
    return new Promise((resolve) => {
        https.request(url, { method: 'HEAD' }, (res) => {
            resolve(res.headers);
        }).on('error', (err) => {
            resolve({ error: err.message });
        }).end();
    });
}

async function run() {
    const hWorking = await getHeaders(working);
    const hBroken = await getHeaders(broken);

    console.log('--- WORKING HEADERS ---');
    console.log(JSON.stringify(hWorking, null, 2));
    console.log('--- BROKEN HEADERS ---');
    console.log(JSON.stringify(hBroken, null, 2));
}

run();
