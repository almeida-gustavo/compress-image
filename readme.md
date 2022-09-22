This project is so you can use the lib sharp with canvas to compress and draw what you like on a image.

## To Run This Project:

- Have node 16 or higher
- Run `npm i` or `yarn`
- Run the script `yarn dev`. This will give you the results on the log

## Observations:

- Because it's hard to find large images, only one image was added to the images folder. If you want you can add other images
- What will determine how many images it will compress is the `imagesNames` variable on the `index.js` file.
- For simplicity reasons, try to always use .png files. The code is hardcoded that extension.
- If you wish to not get write the compressed images on the compressed folder, just comment the last `for()` of the code
- You have two different types of logs output
  - Compressing Individual Image {index}: this is the individual time for each image compression
  - Time Of compressing all images: this is for the total time of all the compressions

## Result of script

- This is the result for running the compression 16 times for the current image on the project.

```
Compressing Individual Image 0: 1.353s
Compressing Individual Image 1: 1.383s
Compressing Individual Image 3: 1.402s
Compressing Individual Image 2: 1.411s
Compressing Individual Image 4: 2.672s
Compressing Individual Image 5: 2.695s
Compressing Individual Image 6: 2.726s
Compressing Individual Image 7: 2.759s
Compressing Individual Image 8: 3.943s
Compressing Individual Image 9: 3.958s
Compressing Individual Image 11: 3.993s
Compressing Individual Image 10: 4.023s
Compressing Individual Image 12: 5.178s
Compressing Individual Image 13: 5.218s
Compressing Individual Image 14: 5.269s
Compressing Individual Image 15: 5.428s
Compressing Individual Image 17: 6.079s
Compressing Individual Image 16: 6.086s
Time Of compressing all images: 6.089s
```
