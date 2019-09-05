class Scoreboard {
  constructor(w, h, ctx) {
    this.ctx = ctx
    this.width = w
    this.height = h

    this.paramX = 0;
    this.paramY = 0;

    this.dx = .1;

    this.img = new Image();
    this.img.src = '../Images/background letter.png';

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
    this.ctx.fillStyle = "white";
    this.ctx.fillText(Math.floor(score), 120, this.height - 40);
    this.ctx.fillText(Math.floor(life), this.width/3.2, this.height - 40);
  }

  life() {
    this.ctx.drawImage(
      this.image,
      this.paramX + this.width/4,
      this.paramY + this.height-80,
      50,
      50
    );
  }

  reset() {
    
  }
}