const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'client', 'public', 'Images');
const tempDir = path.join(__dirname, 'client', 'public', 'Images_Temp');
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

const files = fs.readdirSync(imgDir);

(async () => {
  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;
    
    const filePath = path.join(imgDir, file);
    const tempPath = path.join(tempDir, file);
    const stats = fs.statSync(filePath);
    totalBefore += stats.size;

    let sharpInstance = sharp(filePath).resize({ width: 1920, withoutEnlargement: true });
    
    if (file.toLowerCase().endsWith('.png')) {
      sharpInstance = sharpInstance.png({ compressionLevel: 8 });
    } else {
      sharpInstance = sharpInstance.jpeg({ quality: 75, progressive: true });
    }

    try {
      await sharpInstance.toFile(tempPath);
      const newStats = fs.statSync(tempPath);
      totalAfter += newStats.size;
    } catch (e) {
      console.log('Failed:', e.message);
    }
  }
  
  console.log('Total Before:', (totalBefore/1024/1024).toFixed(2), 'MB');
  console.log('Total After:', (totalAfter/1024/1024).toFixed(2), 'MB');
})();
