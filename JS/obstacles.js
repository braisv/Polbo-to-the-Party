class Obstacles {
	constructor(ctx, gameWidth, gameHeight) {
		this.ctx = ctx
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight

		this.img = new Image()
		this.img.src = '../Images/serpiente.png'
		this.paramX = Math.random() * (this.gameWidth - 110)
		this.paramY = Math.random() * (this.gameHeight - 200)
		this.width = 70
    this.height = 100
    this.sense = -2

    this.img.frames = 10
    this.img.frameIndex = 0
    this.framecounter = 0

    this.sy = 0
    
    this.swidth = 110
    this.sheight = 55


	}

	draw() {
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

      this.animateImg()
      this.framecounter++
  }
  
  animateImg() {
    if (this.framecounter % 20 === 0 && this.sense < 0) {
      this.sy = 55
      this.img.frameIndex -= 1;
      if (this.img.frameIndex < 0) this.img.frameIndex = 10
    }
    if (this.framecounter % 20 === 0 && this.sense > 0) {
      this.sy = 0
      this.img.frameIndex += 1;
      if (this.img.frameIndex > 9) this.img.frameIndex = 0
    }
  }

	move() {
    this.paramX += this.sense;
  }
  
  bounce() {
    if (this.paramX <= 40) {
      this.sense = 2
    }
    if (this.paramX >= (this.gameWidth-110)) {
      this.sense = -2
    }
  }
}