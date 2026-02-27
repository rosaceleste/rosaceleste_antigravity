const https = require('https');
const fs = require('fs');

const url = "https://erqgcpwmulrxlfmzsffi.supabase.co/storage/v1/object/public/products/tapiz-montana-1.jpg";

https.get(url, (res) => {
    const filePath = 'downloaded-test.jpg';
    const fileStream = fs.createWriteStream(filePath);
    res.pipe(fileStream);

    fileStream.on('finish', () => {
        fileStream.close();
        const stats = fs.statSync(filePath);
        console.log(`Downloaded ${filePath}`);
        console.log(`Size on disk: ${stats.size} bytes`);
        console.log(`Status Code: ${res.statusCode}`);
        console.log(`Content-Type: ${res.headers['content-type']}`);
    });
}).on('error', (err) => {
    console.error('Error:', err.message);
});
