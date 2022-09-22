import { createCanvas, loadImage } from 'canvas';

class CanvasService {
  color;

  constructor(data) {
    this.imagePath = data.imagePath;
    this.width = data.imageMetaData.width;
    this.height = data.imageMetaData.height;
  }

  async buildCanvas() {
    const canvas = createCanvas(this.width, this.height, 'svg');

    this.color = '#df1616';
    const ctx = canvas.getContext('2d');

    await loadImage(this.imagePath).then((image) => {
      ctx.drawImage(image, 0, 0);
    });

    this.drawMarkups({ ctx });

    return canvas.toBuffer();
  }

  generateRandomPostion = () => {
    const min = 0.25;
    const max = 0.85;

    return Math.random() * (max - min) + min;
  };

  async drawMarkups({ ctx }) {
    const xPlacement = this.generateRandomPostion();
    const yPlacement = this.generateRandomPostion();

    const radius = 50;

    const x = xPlacement * this.width;
    const y = yPlacement * this.height;

    const circleBackgroundColor = this.color;
    const circleTextColor = '#000';

    ctx.beginPath();
    ctx.fillStyle = circleBackgroundColor;
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);

    ctx.fill();

    ctx.font = '16pt Calibri';
    ctx.fillStyle = circleTextColor;
    ctx.textAlign = 'center';
    ctx.fillText('OK', x, y + 5);
    ctx.closePath();
  }
}

export default CanvasService;
