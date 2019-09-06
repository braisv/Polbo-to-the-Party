class Scoreboard {
  constructor(w, h, ctx) {
    this.ctx = ctx
    this.width = w
    this.height = h

    this.paramX = 0;
    this.paramY = 0;

    this.dx = .1;

    this.img = new Image();
    this.img.src = '../Images/background2.png';

    this.image = new Image();
    this.image.src = '../Images/pirate.png'
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

  print(score, life) {
    this.ctx.font = "60px helvetica"
    this.ctx.fillStyle = "black";
    this.ctx.fillText(Math.floor(score), 0 + this.width/3, this.height - this.height/14);
    this.ctx.fillText(Math.floor(life), this.width - this.width/8
    , this.height - this.height/14);
  }

  life() {
    this.ctx.drawImage(
      this.image,
      this.width - this.width/12,
      this.height - this.height/8,
      50,
      50
    );
  }

  reset() {

  }
}