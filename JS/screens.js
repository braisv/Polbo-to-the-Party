class Screen {
  constructor (ctx, gameWidth, gameHeight) {
    this.ctx = ctx
    this.gameWidth = gameWidth
    this.gameHeight = gameHeight

    this.initImg = new Image()
    this.initImg.src = '../Images/Cover octoskull.png'

    this.pauseImg = new Image()
    this.pauseImg.src = '../Images/Pause.png'

    this.gOverImg = new Image()
    this.gOverImg.src = '../Images/Cover trasera Juego.png'
    
    this.paramX = 0
    this.paramY = 0
    
    this.width = gameWidth
    this.height = gameHeight
  }

  drawInit() {
     this.ctx.drawImage(this.initImg, 0, 0, this.width, this.height);
  }

  drawPause() {
    this.ctx.drawImage(this.pauseImg, 0, 0, this.width, this.height);
  }

  drawGameOver() {
    this.ctx.drawImage(this.gOverImg, 0, 0, this.width, this.height);
  }
}


