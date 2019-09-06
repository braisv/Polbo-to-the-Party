const Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 40,
  width: undefined,
  height: undefined,
  score: 0,
  counter: 0,
  capture: 0,
  obstacles: [],
  target: [],
  bonus: [],
  life: 3,
  startgame: false,
  pause: false,
  pausesound: false,
  endgame: false,
  introsound: false,
  keys: {
    ArrowLeft: 37,
    ArrowRight: 39,
    ArrowTop: 38,
    ArrowDown: 40,
    Enter: 13,
    Space: 32
  },

  init: function (canvasID) {
    this.canvas = document.getElementById(canvasID);
    this.ctx = this.canvas.getContext('2d');
    this.width = window.innerWidth * .98;
    this.height = window.innerHeight * .98;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.screen = new Screen(this.ctx, this.width, this.height);
    this.initialScreen();
  },

  start: function () {
    this.fps = 60;
    this.reset();
    this.interval();
  },

  interval: function () {
    this.intervalID = setInterval(() => {
      if (!this.pause) {
        this.soundMain.pause();
        this.screen.drawPause();
        if(this.pausesound)
        this.soundPause.play();
        setTimeout ( () => {
          this.soundPause.pause();
          this.soundPause.currentTime=0;
          this.pausesound = false;
        }, 500)
        return
      }
      if (!this.introsound) this.soundIntro.play();
      if (this.introsound) this.soundIntro.pause();
      this.soundDark.pause();
      this.clear();
      if (!this.startgame) {
        this.screen.drawInit();
      } else {
        this.counter++;
        if (this.counter > 1000) this.counter = 0;
        this.soundMain.volume = 0.7;
        this.soundMain.play();
        this.drawAll();
        this.moveAll();
        this.generateObstacles();
        this.isCollision();
        this.isKilling();
        this.isTarget();
        this.isBonus();
        this.drawScore();
      }
    }, 1000 / this.fps);
  },

  stop: function () {
    clearInterval(this.intervalID);
  },

  gameOver: function () {
    this.clear();
    this.stop();
    this.soundMain.pause();
    this.soundMain.currentTime = 0;
    this.endgame = true;
    this.screen.drawGameOver()
    window.onkeydown = e => {
      switch (e.keyCode) {
        case 13:
          this.start();
          this.soundDark.pause();
          this.endgame = false;
          break;
      }
    }
  },

  reset: function () {
    this.background = new Background(this.width, this.height, this.ctx);
    this.scoreboard = new Scoreboard(this.width, this.height, this.ctx);
    this.player = new Player(this.width, this.height, this.ctx, this.keys);
    this.obstacles = [];
    this.target = [];
    this.score = 0;
    this.life = 3;
    this.soundIntro = new Audio('Audio/intro.mp3');
    this.soundCollision = new Audio('Audio/collision.wav');
    this.soundMain = new Audio('Audio/main.mp3');
    this.soundDeath = new Audio('Audio/death.wav')
    this.soundPause = new Audio('Audio/pause.wav')
    this.soundTarget = new Audio('Audio/target.wav')
    this.soundDark = new Audio('Audio/dark world.mp3')
  },

  pause: function () {

  },

  drawAll: function () {
    this.background.draw();
    this.scoreboard.draw();
    this.player.draw();
    this.obstacles.forEach(obs => obs.draw())
    this.target.forEach(oct => oct.draw())
    this.bonus.forEach(oct => oct.draw())
    this.scoreboard.life();
  },

  moveAll: function () {
    this.player.move();
    this.background.move();
    this.obstacles.forEach(obs => obs.move())
    this.obstacles.forEach(obs => obs.bounce())
  },

  initialScreen: function () {
    this.ctx.clearRect(0, 0, this.gameWidth, this.gameHeight);
    this.start();
    window.onkeydown = e => {
      switch (e.keyCode) {
        case 13:
          this.startgame = true;
          this.introsound = !this.introsound;
          break;
      }
    }
  },

  generateObstacles: function () {
    if (this.counter == 10 && this.obstacles.length == 0 && this.target == 0) {
      this.target.push(new Target(this.ctx, this.width, this.height))
      this.obstacles.push(new Obstacles(this.ctx, this.width, this.height))
    }
    if (this.capture === 3 && this.bonus.length == 0) {
      this.bonus.push(new Bonus(this.ctx, this.width, this.height))
      this.capture = 0
      setTimeout(() => {
        this.bonus.shift();
      }, 5000)
    }
  },

  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  isKilling: function () {
    this.obstacles.some(obs => {
      if (
        this.target.paramX + this.target.width > obs.paramX &&
        this.target.paramX < obs.paramX + obs.width &&
        this.target.paramY < obs.paramY + obs.height &&
        this.target.paramY + this.target.height > obs.paramY
      ) {
        this.gameOver()
      }
    })
  },

  isCollision: function () {
    let obstacleCollidedIndex = -1;

    this.obstacles.some((obs, idx) => {
      if (
        this.player.paramX + 70 > obs.paramX &&
        this.player.paramX < obs.paramX + 70 &&
        this.player.paramY < obs.paramY + 70 &&
        this.player.paramY + 70 > obs.paramY
      ) {
        this.soundCollision.play()
        obstacleCollidedIndex = idx
      }
    })

    if (obstacleCollidedIndex > -1) {
      this.obstacles.splice(obstacleCollidedIndex, 1)
      this.life--
      
      if (this.life <= 0) {
        console.log('hola')
        this.gameOver();
        this.soundDeath.play()
      }
    }
  },

  isTarget: function () {
    this.target.some(oct => {
      if (
        this.player.paramX + 80 > oct.paramX &&
        this.player.paramX < oct.paramX + 50 &&
        this.player.paramY < oct.paramY + 60 &&
        this.player.paramY + 80 > oct.paramY
      ) {
        this.soundTarget.play()
        this.capture++
        this.score++
        this.target.push(new Target(this.ctx, this.width, this.height))
        this.target.shift()
        this.obstacles.push(new Obstacles(this.ctx, this.width, this.height))
      }
    })
  },

  isBonus: function () {
    this.bonus.some(sail => {
      if (
        this.player.paramX + this.player.width > sail.paramX &&
        this.player.paramX < sail.paramX + sail.width &&
        this.player.paramY < sail.paramY + sail.height &&
        this.player.paramY + this.player.height > sail.paramY
      ) {
        this.soundTarget.volume= .5;
        this.soundTarget.play()
        this.bonus.shift()
        this.obstacles.shift()
        this.life++
        this.score += 5
      }
    })
  },

  drawScore() {
    if (!this.endgame) {
      this.scoreboard.print(this.score, this.life);
      this.scoreboard.life();
    }
  }
};