class Target {
	constructor(ctx, gameWidth, gameHeight) {
		this.ctx = ctx
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight

		this.img = new Image()
    this.img.src = '../Images/Octopus 100x100 1000.png'

    this.img.frames = 10
    this.img.frameIndex = 0
    this.framecounter = 0

    this.sy = 0

		this.paramX = Math.random() * (this.gameWidth - 70)
		this.paramY = Math.random() * (this.gameHeight - 300)
		this.width = 70
    this.height = 70

    this.swidth = 100
    this.sheight = 100

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
      if (this.img.frameIndex > 8) this.img.frameIndex = 0
    }
  }
}