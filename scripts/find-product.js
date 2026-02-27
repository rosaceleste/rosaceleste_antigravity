const fs = require('fs');
const data = JSON.parse(fs.readFileSync('api-products.json', 'utf8'));
const product = data.find(p => p.name.includes('Tapiz Montaña'));
console.log(JSON.stringify(product, null, 2));
