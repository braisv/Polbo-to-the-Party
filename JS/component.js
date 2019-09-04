

class Component {
  constructor(ctx, keys, width, height, color, x, y, type) {
    this.ctx = ctx;
    this.keys = keys;

    this.type = type;
    this.width = width;
    this.height = height;
    this.speed = 0;
    this.angle = 0;
    this.moveAngle = 0;
    this.x = x;
    this.y = y;  
    this.color = color;

    this.setListeners();
  }

  draw() {  
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate(this.angle);
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
        this.ctx.restore();  
        
                // this.ctx.drawImage(
        //   this.img,
        //   this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
        //   this.sy,
        //   this.swidth,
        //   this.sheight,
        //   this.paramX,
        //   this.paramY,
        //   this.height,
        //   this.width
        // );
  }

  update() {
    this.moveAngle = 0;
    this.speed = 0;
  }
  
  setListeners() {
    // window.onkeydown = e => {
    //   switch (e.keyCode) {
    //     case 39:
    //       this.moveAngle += 1;
    //       break;
    //     case 37:
    //       this.moveAngle -= 1;
    //       break;
    //     case 38:
    //       this.speed += 1;
    //       break;
    //     case 40:
    //       this.speed -= 1;
    //       break;
    //   }
    // };
  }

  move() {
    this.angle += this.moveAngle * Math.PI / 180;
    this.x += this.speed * Math.sin(this.angle);
    this.y -= this.speed * Math.cos(this.angle);
  }
}