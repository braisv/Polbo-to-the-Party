class Matrix {
  constructor (w, h, ctx) {
    this.canvasWidth = w;
    this.canvasHeight = h;
    this.ctx = ctx;

    this.gridWidth = 700;
    this.gridHeight = 500;

    this.map = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
      0, 1 ,1 ,1 ,1 ,1 ,1 ,1 ,1, 1, 1, 1, 1, 1, 0,
      0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
      0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0,
      0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ];
  }

  draw() {
    for(let y = 0; y < this.gridHeight; y++) {
     for(let x = 0; x < this.gridWidth; x++) {
       switch(this.map[((y * this.gridWidth) + x)]) {
         case 0:
           this.ctx.fillStyle = 'blue';
           break;
          default:
            this.ctx.fillStyle = 'gray';
       }
       this.ctx.fillRect(100, 200, 50, 50);
      }
    }
    this.ctx.fillStyle = 'red';
  }

}