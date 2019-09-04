

class Player {
  constructor(w, h, ctx, keys) {
    this.canvasWidth = w;
    this.canvasHeight = h;
    this.ctx = ctx;
    this.keys = keys;

    this.paramX = this.canvasWidth/2
    this.paramY = this.canvasHeight * .75;

    this.img = new Image();
    this.img.src = '../Images/barco 200x206 1404.png';

    this.width = 150;
    this.height = 160;
    this.speed = 30;

    this.factor = 1;
    this.angle = 0;
    this.line;

    this.img.frames = 7
    this.img.frameIndex = 3
    this.framecounter = 0

    this.sy = 0
    
    this.swidth = 200
    this.sheight = 206

    this.setListeners();
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

  setListeners() {
    window.onkeydown = e => {
      switch (e.keyCode) {
        case 39:
          this.paramX += this.speed;
          this.img.frameIndex += 1;
          if (this.img.frameIndex > 6) this.img.frameIndex = 6
          break;
        case 37:
          this.paramX -= this.speed;
          this.img.frameIndex -= 1;
          if (this.img.frameIndex < 0) this.img.frameIndex = 0
          break;
        case 38:
          this.paramY -= this.speed;
          this.sy = 0
          if (this.img.frameIndex < 3) this.img.frameIndex += 1
          if (this.img.frameIndex > 3) this.img.frameIndex -= 1
          break;
        case 40:
          this.paramY += this.speed;
          this.sy = 206
          if (this.img.frameIndex < 3) this.img.frameIndex += 1
          if (this.img.frameIndex > 3) this.img.frameIndex -= 1
          break;
      }
    };
  }

  move() {
    
    // if (this.paramY <= this.topEdge) {
    //   this.paramY += this.speed;
    //   this.speed += gravity;
    // } else {
    //   this.speed = 1;
    //   this.paramY = this.paramY0;
    // }

    // if (this.paramY >= 0) {
    //   this.paramY += this.speed;
    //   this.speed += gravity;
    // } else {
    //   this.speed = 1;
    //   this.paramY = 0;
    // }
  }
}