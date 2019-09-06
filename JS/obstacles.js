class Obstacles {
	constructor(ctx, gameWidth, gameHeight) {
		this.ctx = ctx
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight

		this.img = new Image()
		this.img.src = 'Images/bad snake.png'
		this.paramX = Math.random() * (this.gameWidth - 110)
    this.paramY = Math.random() * (this.gameHeight - 300)
		this.width = 100
    this.height = 100
    this.sense = -2

    this.img.frames = 10
    this.img.frameIndex = 0
    this.framecounter = 0

    this.sy = 0
    
    this.swidth = 100
    this.sheight = 100


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
      this.sy = 100
      this.img.frameIndex -= 1;
      if (this.img.frameIndex < 0) this.img.frameIndex = 9
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