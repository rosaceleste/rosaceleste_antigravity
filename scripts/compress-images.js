/**
 * P0: Compress all large images in public/Productos/ using sharp.
 * Target: < 500KB for product/hero images, < 200KB for og-home.jpg
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const TARGETS = [
    // Hero & social images in /public root
    { src: 'public/og-home.jpg', dest: 'public/og-home.jpg', maxKB: 200, width: 1200 },
    // All large Tezza photos used in the site
    { src: 'public/Productos/Tezza-5466.jpg', dest: 'public/Productos/Tezza-5466.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-2197.jpg', dest: 'public/Productos/Tezza-2197.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-2197(1).jpg', dest: 'public/Productos/Tezza-2197(1).jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-2987.jpg', dest: 'public/Productos/Tezza-2987.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-7927.jpg', dest: 'public/Productos/Tezza-7927.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-5642.jpg', dest: 'public/Productos/Tezza-5642.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-8502.jpg', dest: 'public/Productos/Tezza-8502.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-2959.jpg', dest: 'public/Productos/Tezza-2959.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-9007.jpg', dest: 'public/Productos/Tezza-9007.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-2326.jpg', dest: 'public/Productos/Tezza-2326.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-2601.jpg', dest: 'public/Productos/Tezza-2601.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-1365.jpg', dest: 'public/Productos/Tezza-1365.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-0801.jpg', dest: 'public/Productos/Tezza-0801.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-3847.jpg', dest: 'public/Productos/Tezza-3847.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-4224.jpg', dest: 'public/Productos/Tezza-4224.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-5227.jpg', dest: 'public/Productos/Tezza-5227.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-6240.jpg', dest: 'public/Productos/Tezza-6240.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-6326.jpg', dest: 'public/Productos/Tezza-6326.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-6797.jpg', dest: 'public/Productos/Tezza-6797.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-7927.jpg', dest: 'public/Productos/Tezza-7927.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-8392.jpg', dest: 'public/Productos/Tezza-8392.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-9007.jpg', dest: 'public/Productos/Tezza-9007.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-9653.jpg', dest: 'public/Productos/Tezza-9653.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-0189.jpg', dest: 'public/Productos/Tezza-0189.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-0537.jpg', dest: 'public/Productos/Tezza-0537.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-0922.jpg', dest: 'public/Productos/Tezza-0922.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-1266.jpg', dest: 'public/Productos/Tezza-1266.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-3363.jpg', dest: 'public/Productos/Tezza-3363.jpg', maxKB: 500 },
    { src: 'public/Productos/Tezza-3548.jpg', dest: 'public/Productos/Tezza-3548.jpg', maxKB: 300 },
    { src: 'public/Productos/Tezza-5836.jpg', dest: 'public/Productos/Tezza-5836.jpg', maxKB: 300 },
    { src: 'public/Productos/Tezza-7156.jpg', dest: 'public/Productos/Tezza-7156.jpg', maxKB: 400 },
    { src: 'public/Productos/Tezza-7370.jpg', dest: 'public/Productos/Tezza-7370.jpg', maxKB: 300 },
    { src: 'public/Productos/28480F51-D5C2-4C3A-9D5C-0D848189CBE9.jpg', dest: 'public/Productos/28480F51-D5C2-4C3A-9D5C-0D848189CBE9.jpg', maxKB: 500 },
    { src: 'public/Productos/65BDB03D-0C03-43B7-82FA-10DCAE70639D.jpg', dest: 'public/Productos/65BDB03D-0C03-43B7-82FA-10DCAE70639D.jpg', maxKB: 500 },
    { src: 'public/Productos/B645D30C-C94B-4DC5-896A-BD8C981D3A01_Original.JPG', dest: 'public/Productos/B645D30C-C94B-4DC5-896A-BD8C981D3A01_Original.JPG', maxKB: 500 },
    { src: 'public/Productos/IMG_0379.JPG', dest: 'public/Productos/IMG_0379.JPG', maxKB: 500 },
    { src: 'public/Productos/IMG_0381.JPG', dest: 'public/Productos/IMG_0381.JPG', maxKB: 500 },
];

async function compress(target) {
    if (!fs.existsSync(target.src)) {
        console.log(`SKIP (not found): ${target.src}`);
        return;
    }

    const sizeBefore = Math.round(fs.statSync(target.src).size / 1024);

    // Skip if already small enough
    if (sizeBefore <= target.maxKB) {
        console.log(`OK   ${sizeBefore}KB  (already small) → ${path.basename(target.src)}`);
        return;
    }

    try {
        let pipeline = sharp(target.src);

        // For og-home.jpg, also resize to standard dimensions
        if (target.width) {
            pipeline = pipeline.resize(target.width, null, { withoutEnlargement: true });
        } else {
            // Resize large images to max 1800px wide to save significant space while keeping quality
            pipeline = pipeline.resize(1800, null, { withoutEnlargement: true });
        }

        // Write to a temp file first, then replace
        const tmpPath = target.dest + '.tmp';
        await pipeline.jpeg({ quality: 80, progressive: true, mozjpeg: true }).toFile(tmpPath);

        const sizeAfter = Math.round(fs.statSync(tmpPath).size / 1024);
        fs.renameSync(tmpPath, target.dest);

        const saved = Math.round((1 - sizeAfter / sizeBefore) * 100);
        console.log(`✓   ${sizeBefore}KB → ${sizeAfter}KB  (-${saved}%)  ${path.basename(target.src)}`);
    } catch (err) {
        console.log(`✗ FAIL: ${target.src} → ${err.message}`);
    }
}

async function main() {
    console.log('=== IMAGE COMPRESSION ===\n');
    for (const t of TARGETS) {
        await compress(t);
    }
    console.log('\n=== DONE ===');
}

main();
