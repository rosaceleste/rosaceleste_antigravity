const heicConvert = require('heic-convert');
const fs = require('fs');
const path = require('path');

const conversions = [
    {
        src: 'public/Productos/IMG_6754.HEIC',
        // Based on size 1097566 bytes ≈ 1072KB - likely chalecos or portavasos 
        dest: 'public/products/converted-img6754.jpg',
    },
    {
        src: 'public/Productos/IMG_6949.HEIC',
        // 1473175 bytes matches tapiz-montana-1.jpg in the original broken copies
        dest: 'public/products/converted-img6949.jpg',
    },
    {
        src: 'public/Productos/IMG_8002.HEIC',
        // 1652510 bytes - largest of the 3
        dest: 'public/products/converted-img8002.jpg',
    },
];

async function main() {
    for (const c of conversions) {
        try {
            const input = fs.readFileSync(c.src);
            const output = await heicConvert({
                buffer: input,
                format: 'JPEG',
                quality: 0.85,
            });
            fs.writeFileSync(c.dest, Buffer.from(output));
            const stats = fs.statSync(c.dest);
            console.log(`✓ CONVERTED: ${path.basename(c.src)} → ${path.basename(c.dest)} (${Math.round(stats.size / 1024)}KB)`);
        } catch (e) {
            console.log(`✗ FAILED: ${c.src} → ${e.message}`);
        }
    }
}

main();
