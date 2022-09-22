import fs from 'fs/promises';
import sharp from 'sharp';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import CanvasService from './canvasService.js';
import { performance } from 'perf_hooks';

(async () => {
  const currentFolder = dirname(fileURLToPath(import.meta.url));
  // Here is where you will change the data in case you want to add other images
  // const imagesNames = ['1', '2', '3','4','5','6','7','8','9','10','11','12'];
  const imagesNames = [
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
    '1',
  ];

  const imagePaths = imagesNames.map(
    (image) => `${currentFolder}/../images/${image}.png`,
  );

  const canvasBuffers = [];

  for (let i = 0; i < imagePaths.length; i++) {
    const imageMetaData = await sharp(imagePaths[i]).metadata();

    const canvasService = new CanvasService({
      imagePath: imagePaths[i],
      imageMetaData,
    });

    const imageBuffer = await canvasService.buildCanvas();

    canvasBuffers.push(imageBuffer);
  }

  console.time('Time Of compressing all images');
  const compressedImagesResult = await Promise.all(
    canvasBuffers.map(async (imgBuffer, index) => {
      console.time(`Compressing Individual Image ${index}`);
      const compressCanvasPromise = await sharp(imgBuffer)
        .resize(1500)
        .trim(10)
        .jpeg({
          mozjpeg: true,
        })
        .toBuffer();
      console.timeEnd(`Compressing Individual Image ${index}`);
      return compressCanvasPromise;
    }),
  );
  console.timeEnd('Time Of compressing all images');

  // This Extra for is not used in the Final code. So I did not put the time log here
  for (let i = 0; i < compressedImagesResult.length; i++) {
    await fs.writeFile(
      `${currentFolder}/../compressedImages/compressed-${i}.png`,
      compressedImagesResult[i],
    );
  }
})();
