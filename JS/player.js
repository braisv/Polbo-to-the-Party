

class Player {
  constructor(w, h, ctx, keys) {
    this.canvasWidth = w;
    this.canvasHeight = h;
    this.ctx = ctx;
    this.keys = keys;

    this.paramX = 40;
    this.paramY = this.canvasHeight * .75;

    this.img = new Image();
    this.img.src = '../Images/ship.png';

    this.width = 60;
    this.height = 70;
    this.speed = 1;

    this.factor = 1;
    this.angle = 0;
    this.line;

    this.setListeners();
  }

  draw() {
    let rads = this.angle * Math.PI / 180
    let line = new Victor(0, -100);
    line.rotate(rads);
    line.multiply(new Victor(this.factor, this.factor));

    console.log(line.x, line.y)



    this.ctx.save()


    // this.ctx.translate(this.canvasWidth/2, this.canvasHeight / 2)
    this.ctx.beginPath()
    this.ctx.moveTo( this.canvasWidth / 2,  this.canvasHeight / 2);
    this.ctx.lineTo(this.canvasWidth / 2 + line.x,  this.canvasHeight / 2 + line.y);
    this.ctx.stroke();
    this.ctx.closePath()

    this.ctx.translate(line.x ,line.y )

    this.ctx.save()
    this.ctx.translate(this.canvasWidth / 2 , this.canvasHeight / 2 )
    this.ctx.rotate(rads)
    this.ctx.drawImage(this.img, -this.width / 2 , -this.height/2, this.width, this.height);
    this.ctx.restore()


    // this.ctx.drawImage(this.img, this.angle, this.factor, this.width, this.height);
    // this.ctx.drawImage(this.img, line.x - 30, line.y - ((145 / 2) - 10), this.width, this.height);
    // this.ctx.drawImage(this.img, this.canvasWidth / 2 + line.x - this.width / 2, this.canvasHeight / 2 + line.y - this.height / 2, this.width, this.height);


    this.ctx.restore()
    // console.log("current angle is: " + this.angle + " degrees");
    // this.ctx.save();

    // this.ctx.translate(this.canvasWidth/2, this.canvasHeight/2);
    // this.ctx.beginPath();

    // this.ctx.drawImage(this.img,-this.img.width/2,-this.img.width/2);
    // this.ctx.moveTo(0, 0);
    // this.ctx.lineTo(this.paramX, this.ParamY);
    // this.ctx.stroke();
    // this.ctx.closePath();
    // this.ctx.restore();


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