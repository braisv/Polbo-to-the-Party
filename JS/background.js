class Background {
  constructor(w, h, ctx) {
    this.ctx = ctx
    this.width = w
    this.height = h

    this.paramX = 0;
    this.paramY = 0;

    this.img = new Image();
    this.img.src = '../Images/sea.jpg';
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.paramX,
      this.paramY,
      this.width,
      this.height
    );
  }
}
