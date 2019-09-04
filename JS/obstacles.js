class Obstacles {
	constructor(ctx, gameWidth, gameHeight) {
		this.ctx = ctx
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight

		this.img = new Image()
		this.img.src = '../Images/criatura 60x60 360.png'
		this.paramX = Math.random() * (this.gameWidth - 110)
		this.paramY = Math.random() * (this.gameHeight - 200)
		this.width = 70
    this.height = 70
    this.sense = -2

    this.img.frames = 6
    this.img.frameIndex = 3
    this.framecounter = 0

    this.sy = 0
    
    this.swidth = 60
    this.sheight = 60


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
      this.img.frameIndex -= 1;
      if (this.img.frameIndex < 0) this.img.frameIndex = 2
    }
    if (this.framecounter % 20 === 0 && this.sense > 0) {
      this.img.frameIndex += 1;
      if (this.img.frameIndex > 5) this.img.frameIndex = 3
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