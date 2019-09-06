

class Player {
  constructor(w, h, ctx, keys) {
    this.canvasWidth = w;
    this.canvasHeight = h;
    this.ctx = ctx;
    this.keys = keys;

    this.paramX = this.canvasWidth / 2
    this.paramY = this.canvasHeight * .75;

    this.img = new Image();
    this.img.src = '../Images/boat square.png';

    this.width = 100;
    this.height = 100;
    this.speed = 30;

    this.factor = 1;
    this.angle = 0;
    this.line;

    this.img.frames = 7;
    this.img.frameIndex = 3;
    this.framecounter = 0;

    this.sy = 0;

    this.swidth = 100;
    this.sheight = 100;

    // this.setListeners();
  }

  draw() {
    // this.ctx.drawImage(this.img, this.paramX , this.paramY, this.width, this.height);

    this.ctx.drawImage(
      this.img,
      this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
      this.sy,
      this.swidth,
      this.sheight,
      this.paramX,
      this.paramY,
      this.height,
      this.width
    );

    this.framecounter++

  }

  checkBoundaries() {
    if (this.paramX >= this.canvasWidth/2 + 70 && this.paramY >= this.canvasHeight - 225 ||
    this.paramX <= this.canvasWidth/2 - 70 && this.paramY >= this.canvasHeight - 225 ||
    this.paramX <= 0 ||
    this.paramX >= this.canvasWidth ||
    this.paramY <= 0 ||
    this.paramY >= this.canvasHeight) this.speed = 0;

  }

  move() {
    window.onkeydown = e => {
      switch (e.keyCode) {
        case 39:
          if (this.paramX >= this.canvasWidth/2 + 70 && this.paramY >= this.canvasHeight - 255 ||
          this.paramX > this.canvasWidth -100) {
            this.speed = 0; 
          } else {
          this.paramX += 30;
          }
          this.img.frameIndex += 1;
          if (this.img.frameIndex > 6) this.img.frameIndex = 6
          break;
        case 37:
          if (this.paramX <= this.canvasWidth/2 - 70 && this.paramY >= this.canvasHeight - 255 ||
          this.paramX < 0) {
            this.speed = 0; 
          } else {
          this.paramX -= 30;
          }
          this.img.frameIndex -= 1;
          if (this.img.frameIndex < 0) this.img.frameIndex = 0
          break;
        case 38:
          if (this.paramY < 0) {
            this.speed = 0; 
          } else {
          this.paramY -= 30;
          }
          this.sy = 0
          if (this.img.frameIndex < 3) this.img.frameIndex += 1
          if (this.img.frameIndex > 3) this.img.frameIndex -= 1
          break;
        case 40:
          if (this.paramY >= this.canvasHeight -275) {
            this.speed = 0; 
          } else {
          this.paramY += 30;
          }
          this.sy = 100
          if (this.img.frameIndex < 3) this.img.frameIndex += 1
          if (this.img.frameIndex > 3) this.img.frameIndex -= 1
          break;
        case 32:
            Game.pause = !Game.pause;
            Game.pausesound = true;
            break;
      }
    };
  }
}