class Obstacles {
	constructor(ctx, gameWidth, gameHeight) {
		this.ctx = ctx
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight

		this.image = new Image()
		this.image.src = '../Images/FlameDemon Evolved.png'
		this.paramX = Math.random() * (this.gameWidth - 70)
		this.paramY = Math.random() * (this.gameHeight - 70)
		this.width = 70
    this.height = 70
    this.sense = -5
	}

	draw() {
		this.ctx.drawImage(this.image, this.paramX, this.paramY, this.width, this.height)
	}

	move() {
    this.paramX += this.sense;
  }
  
  bounce() {
    if (this.paramX <= 0) {
      this.sense = 5
    }
    if (this.paramX >= (this.gameWidth-70)) {
      this.sense = -5
    }
  }
}