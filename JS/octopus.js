class Target {
	constructor(ctx, gameWidth, gameHeight) {
		this.ctx = ctx
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight

		this.img = new Image()
    this.img.src = '../Images/Octopus 400x336 1200.png'

    this.img.frames = 3
    this.img.frameIndex = 0
    this.framecounter = 0

    this.sy = 0

		this.paramX = Math.random() * (this.gameWidth - 70)
		this.paramY = Math.random() * (this.gameHeight - 200)
		this.width = 70
    this.height = 70

    this.swidth = 400
    this.sheight = 400

    this.sense = -5
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
    if (this.framecounter % 30 === 0) {
      this.img.frameIndex += 1;
      if (this.img.frameIndex > 2) this.img.frameIndex = 0
    }
  }

	move() {
    this.paramX += this.sense;
  }
  
  bounce() {
    if (this.paramX <= (this.paramX-20)) {
      this.sense = 5
    }
    if (this.paramX >= (this.paramX+20)) {
      this.sense = -5
    }
  }
}