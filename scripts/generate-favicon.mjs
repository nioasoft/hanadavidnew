import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputPath = path.join(__dirname, '../public/favicon.png');

const svgBuffer = Buffer.from(`
<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <!-- Background Circle (Optional, using transparent for modern look) -->
  
  <!-- Cup Body -->
  <path d="M9 10 V19 C9 21.2 10.8 23 13 23 H19 C21.2 23 23 21.2 23 19 V10 H9 Z" fill="#FAFAF8" stroke="#2D2D2D" stroke-width="2"/>
  
  <!-- Cup Handle -->
  <path d="M23 12 H25 C26.1 12 27 12.9 27 14 V17 C27 18.1 26.1 19 25 19 H23" fill="none" stroke="#2D2D2D" stroke-width="2"/>
  
  <!-- Liquid line (Coffee) -->
  <path d="M10 11 H22" stroke="#2D2D2D" stroke-width="1"/>

  <!-- Steam (Minimalist) -->
  <path d="M13 7 L13 5" stroke="#A8C5DD" stroke-width="2" stroke-linecap="round"/>
  <path d="M16 6 L16 4" stroke="#A8C5DD" stroke-width="2" stroke-linecap="round"/>
  <path d="M19 7 L19 5" stroke="#A8C5DD" stroke-width="2" stroke-linecap="round"/>
</svg>
`);

async function generateFavicon() {
  try {
    await sharp(svgBuffer)
      .png()
      .toFile(outputPath);
    console.log(`Favicon generated at: ${outputPath}`);
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

generateFavicon();
