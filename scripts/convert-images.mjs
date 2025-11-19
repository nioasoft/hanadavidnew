import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, '../public/images/services');

async function convertImages() {
  try {
    const files = fs.readdirSync(sourceDir);
    
    for (const file of files) {
      if (path.extname(file).toLowerCase() === '.png') {
        const inputPath = path.join(sourceDir, file);
        const outputPath = path.join(sourceDir, path.basename(file, '.png') + '.webp');
        
        console.log(`Converting ${file} to WebP...`);
        
        await sharp(inputPath)
          .webp({ quality: 80 }) // Adjust quality as needed
          .toFile(outputPath);
          
        console.log(`Done: ${outputPath}`);
        
        // Optional: Delete original file
        fs.unlinkSync(inputPath);
        console.log(`Deleted original: ${file}`);
      }
    }
    console.log('All images converted successfully!');
  } catch (error) {
    console.error('Error converting images:', error);
  }
}

convertImages();
