

class Player {
  constructor(w, h, ctx, keys) {
    this.canvasWidth = w;
    this.canvasHeight = h;
    this.ctx = ctx;
    this.keys = keys;

    this.paramX = 40;
    this.paramY = this.canvasHeight * .75;

    this.img = new Image();
    this.img.src = '../ship.png';

    this.width = 60;
    this.height = 70;
    this.speed = 1;

    this.factor = 1;
    this.angle = 0;
    this.line;

    this.setListeners();
  }

  draw() {
    this.ctx.drawImage(this.img, this.paramX , this.paramY, this.width, this.height);

  }

  setListeners() {
    window.onkeydown = e => {
      switch (e.keyCode) {
        case 39:
          this.angle += 10;
          break;
        case 37:
          this.angle -= 10;
          break;
        case 38:
          this.factor += 1;
          break;
        case 40:
          this.factor -= 1;
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