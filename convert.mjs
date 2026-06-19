import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imagesDir = path.join(process.cwd(), 'public', 'images');

const files = fs.readdirSync(imagesDir);

for (const file of files) {
  if (file.endsWith('.png')) {
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(imagesDir, file.replace('.png', '.webp'));
    
    await sharp(inputPath)
      .resize({ width: 800, withoutEnlargement: true }) // Downscale large images
      .webp({ quality: 80 })
      .toFile(outputPath);
      
    console.log(`Converted ${file} to WebP`);
  }
}
