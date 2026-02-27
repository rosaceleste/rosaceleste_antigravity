const fs = require('fs');

const files = [
    'tapiz-montana-1.jpg',
    'portavasos-corazon-1.jpg',
    'individuales-redondos-ancestral-1.jpg',
    'chalecos-1.jpg'
];

files.forEach(file => {
    if (fs.existsSync(file)) {
        const buffer = fs.readFileSync(file, { length: 4 });
        console.log(`File: ${file}`);
        console.log(`Hex: ${buffer.toString('hex')}`);
        // JPEG magic bytes: ff d8 ff
        if (buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) {
            console.log('Valid JPEG magic bytes.');
        } else {
            console.log('INVALID magic bytes!');
        }
    } else {
        console.log(`File ${file} missing.`);
    }
    console.log('---');
});
