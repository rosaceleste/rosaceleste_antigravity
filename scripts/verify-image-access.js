const https = require('https');

const fileId = '1MXnX7nylHmzj4yC4yE-fdiEs9JjCQx5W';

const urls = [
    { name: 'Direct Link (uc?export=view)', url: `https://drive.google.com/uc?export=view&id=${fileId}` },
    { name: 'LH3 Link', url: `https://lh3.googleusercontent.com/d/${fileId}` },
    { name: 'Drive Viewer', url: `https://drive.google.com/file/d/${fileId}/view` } // HTML page, not image
];

function checkUrl(label, url) {
    return new Promise((resolve) => {
        console.log(`Checking ${label}: ${url}`);
        const req = https.get(url, (res) => {
            console.log(`  Status: ${res.statusCode}`);
            console.log(`  Content-Type: ${res.headers['content-type']}`);

            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                console.log(`  Redirects to: ${res.headers.location}`);
            }

            let data = '';
            res.on('data', chunk => data += chunk.toString().substring(0, 100)); // Just sample
            res.on('end', () => {
                // console.log(`  Sample: ${data.substring(0, 50)}...`); 
                resolve();
            });
        });

        req.on('error', (e) => {
            console.error(`  Error: ${e.message}`);
            resolve();
        });
    });
}

(async () => {
    for (const item of urls) {
        await checkUrl(item.name, item.url);
        console.log('---');
    }
})();
