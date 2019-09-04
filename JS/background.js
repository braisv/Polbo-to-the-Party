class Background {
  constructor(w, h, ctx) {
    this.ctx = ctx
    this.width = w
    this.height = h

    this.paramX = 0;
    this.paramY = 0;

    this.dx = .1;

    this.img = new Image();
    this.img.src = '../Images/sea background.png';
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.paramX,
      this.paramY,
      this.width,
      this.height
    );

    this.ctx.drawImage(
      this.img,
      this.paramX+this.width,
      this.paramY,
      this.width,
      this.height
    );
  }

  move() {
    this.paramX -= this.dx;
    if (this.paramX <= -this.width) this.paramX = 0;
  }
}
