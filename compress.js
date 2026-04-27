const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'client', 'public', 'Images');
const files = fs.readdirSync(imgDir);

(async () => {
  console.log('Starting image compression... This may take a minute depending on your computer speed.');
  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;
    
    const filePath = path.join(imgDir, file);
    const stats = fs.statSync(filePath);
    totalBefore += stats.size;

    let sharpInstance = sharp(filePath).resize({ width: 1920, withoutEnlargement: true });
    
    if (file.toLowerCase().endsWith('.png')) {
      sharpInstance = sharpInstance.png({ compressionLevel: 8 });
    } else {
      sharpInstance = sharpInstance.jpeg({ quality: 75, progressive: true });
    }

    try {
      const buffer = await sharpInstance.toBuffer();
      fs.writeFileSync(filePath, buffer);
      
      const newStats = fs.statSync(filePath);
      totalAfter += newStats.size;
      
      console.log(`Compressed ${file}: ${(stats.size/1024/1024).toFixed(2)}MB -> ${(newStats.size/1024/1024).toFixed(2)}MB`);
    } catch (e) {
      console.log(`Failed to compress ${file}:`, e.message);
    }
  }
  
  console.log(`\n===========================================`);
  console.log(`OPTIMIZATION COMPLETE!`);
  console.log(`Total Size Before: ${(totalBefore/1024/1024).toFixed(2)} MB`);
  console.log(`Total Size After: ${(totalAfter/1024/1024).toFixed(2)} MB`);
  console.log(`Space Saved: ${((totalBefore - totalAfter)/1024/1024).toFixed(2)} MB!`);
  console.log(`===========================================`);
})();
