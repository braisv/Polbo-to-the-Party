const Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  width: undefined,
  height: undefined,
  counter: 0,
  capture: 0,
  obstacles: [],
  target: [],
  bonus: [],
  life: 3,
  keys: {
    ArrowLeft: 37,
    ArrowRight: 39,
    ArrowTop: 38,
    ArrowDown: 40
  },
  
  init: function(canvasID) {
    this.canvas = document.getElementById(canvasID);
    this.ctx = this.canvas.getContext('2d');
    this.width = window.innerWidth * .98;
    this.height = window.innerHeight * .98;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.start();
  },

  start: function() {
    this.fps = 60;
    this.reset();
    this.intervalID = setInterval(() => {
      this.clear();
      this.counter++;
      if (this.counter > 1000) this.counter = 0;
      this.drawAll();
      this.moveAll();
      this.generateObstacles();
      this.isCollision();
      this.isKilling();
      this.isTarget();
      this.isBonus();
      this.component.update();
      console.log(this.life)
    }, 1000 / this.fps);
  },

  stop: function() {
    clearInterval(this.intervalID);
  },

  gameOver: function() {
    this.stop();
  },

  reset: function() {
    this.background = new Background(this.width, this.height, this.ctx);
    this.player = new Player(this.width, this.height, this.ctx, this.keys);
    this.component = new Component(this.ctx, this.keys, 30, 30, "red", 225, 225);
    this.obstacles = [];
    this.target = [];

  },

  drawAll: function() {
    this.background.draw();
    this.player.draw();
    // this.component.draw();
    this.obstacles.forEach(obs => obs.draw()) 
    this.target.forEach(oct => oct.draw()) 
    this.bonus.forEach(oct => oct.draw()) 
  },

  moveAll: function () {
    this.player.move();
    this.component.move();
    this.background.move();
    this.obstacles.forEach(obs => obs.move()) 
    this.obstacles.forEach(obs => obs.bounce())
  }, 

  generateObstacles: function() {
    if (this.counter == 10 && this.obstacles.length == 0 && this.target == 0) {
      this.target.push(new Target(this.ctx, this.width, this.height))    
      this.obstacles.push(new Obstacles(this.ctx, this.width, this.height))
    }
    if (this.capture === 3 && this.bonus.length == 0) {
      this.bonus.push(new Bonus(this.ctx, this.width, this.height))
      this.capture = 0
      setTimeout( () => {
        this.bonus.shift();
      }, 5000)
    }
  },

  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  isKilling: function() {   
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

  isCollision: function() {   
    this.obstacles.some(obs => {
			if (
				this.player.paramX + 30 > obs.paramX &&
				this.player.paramX < obs.paramX + 40 &&
        this.player.paramY < obs.paramY + 40 &&
        this.player.paramY + 40 > obs.paramY
			) {
        this.obstacles.splice(obs, 1)
        this.life--
      }
      if (this.life == 0) {
        this.gameOver();
      }
		})
  },

  isTarget: function() {   
    this.target.some(oct => { 
			if (
				this.player.paramX + 30 > oct.paramX &&
				this.player.paramX < oct.paramX + 40 &&
        this.player.paramY < oct.paramY + 40 &&
        this.player.paramY + 40 > oct.paramY
			) {
        console.log('Targeted')
        this.capture++
        this.target.push(new Target(this.ctx, this.width, this.height))
        this.target.shift()
        this.obstacles.push(new Obstacles(this.ctx, this.width, this.height))
      }
		})
  },

  isBonus: function() {   
    this.bonus.some(sail => { 
			if (
				this.player.paramX + this.player.width > sail.paramX &&
				this.player.paramX < sail.paramX + sail.width &&
        this.player.paramY < sail.paramY + sail.height &&
        this.player.paramY + this.player.height > sail.paramY
			) {
        console.log('Bonanza')
        this.bonus.shift()
        this.obstacles.shift()
        this.life++
      }
		})
  },

};