const http = require('http');
const fs = require('fs');

http.get('http://localhost:3000/api/products', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        fs.writeFileSync('api-products.json', data);
        console.log('Saved api-products.json');
    });
}).on('error', (err) => {
    console.error('Error:', err.message);
});
