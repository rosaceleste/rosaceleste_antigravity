const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// We need to match HEIC files to product slugs
// Based on file sizes from public/products/ (the HEIC-disguised-as-jpg files):
// - chalecos-1.jpg = 1102496 bytes → public/Productos/28480F51... is 8059060 (no match)
// Let's try to convert each HEIC to JPEG and see which ones we can process

const heicFiles = [
    { src: 'public/Productos/IMG_6754.HEIC', dest: 'public/products/heic-converted-1.jpg' },
    { src: 'public/Productos/IMG_6949.HEIC', dest: 'public/products/heic-converted-2.jpg' },
    { src: 'public/Productos/IMG_8002.HEIC', dest: 'public/products/heic-converted-3.jpg' },
];

async function main() {
    for (const f of heicFiles) {
        try {
            await sharp(f.src)
                .jpeg({ quality: 85 })
                .toFile(f.dest);
            console.log('OK: ' + f.src + ' -> ' + f.dest);
        } catch (e) {
            console.log('FAIL: ' + f.src + ' -> ' + e.message);
        }
    }
}

main();
