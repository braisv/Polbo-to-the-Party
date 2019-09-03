class Target {
	constructor(ctx, gameWidth, gameHeight) {
		this.ctx = ctx
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight

		this.image = new Image()
		this.image.src = '../Images/gameCharacter.png'
		this.paramX = Math.random() * (this.gameWidth - 70)
		this.paramY = Math.random() * 100
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
    if (this.paramX <= (this.paramX-20)) {
      this.sense = 5
    }
    if (this.paramX >= (this.paramX+20)) {
      this.sense = -5
    }
  }
}