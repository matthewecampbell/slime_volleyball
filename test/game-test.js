const chai = require('chai');
const assert = chai.assert;
const Ball = require('../lib/scripts/ball')
const stub = require('./support/stub')
const Slime = require('../lib/scripts/slime')
const Net = require('../lib/scripts/net')
const Player = require('../lib/scripts/player')
const Scoreboard = require('../lib/scripts/scoreboard')
const Menu = require('../lib/scripts/menu')
const Game = require('../lib/scripts/game')

describe('Game', function() {
  context('With default attributes', function () {
    it('should be instantiated', function() {
      let slime = new Slime;
      let ball = new Ball;
      let net = new Net;
      let scoreboard = new Scoreboard;
      let context = stub();
      let menu = new Menu;
      let game = new Game;
      assert.equal(game.showGameOverMenu, false)
      assert.equal(game.showMainMenu, true)
      assert.equal(game.difficulty, "normal")
      assert.equal(game.isNewPoint, false)
    });
  })
  context('With default functions', function () {
    it('should be instantiated', function() {
      let slime = new Slime;
      let ball = new Ball;
      let net = new Net;
      let scoreboard = new Scoreboard;
      let context = stub();
      let menu = new Menu;
      let game = new Game;
      assert.isFunction(game.renderGame)
      assert.isFunction(game.saveScore)
      assert.isFunction(game.gameOverMenu)
      assert.isFunction(game.renderBackground)
      assert.isFunction(game.changeBackgroundImage)
      assert.isFunction(game.mainMenu)
      assert.isFunction(game.scoreGame)
      assert.isFunction(game.checkIfPointScored)
      assert.isFunction(game.move)
      assert.isFunction(game.calculateDistance)
      assert.isFunction(game.collideWithPlayer)
      assert.isFunction(game.delayServe)
      assert.isFunction(game.collideWithWall)
      assert.isFunction(game.collideWithGround)
      assert.isFunction(game.collideWithNet)
      assert.isFunction(game.collideWithCeiling)
      assert.isFunction(game.startNewMatch)
      assert.isFunction(game.checkDifficulty)
      assert.isFunction(game.startNormalMode)
      assert.isFunction(game.returnToMainMenu)
      assert.isFunction(game.insanePlayer1GamePoint)
      assert.isFunction(game.insanePlayer2GamePoint)
      assert.isFunction(game.startInsaneMode)
      assert.isFunction(game.insaneSlimeCollision)
      assert.isFunction(game.insaneBorderCollision)
      assert.isFunction(game.insaneNetCollision)
    });
    it("it knows it's game point in insane mode", function() {
      let ball = new Ball;
      let net = new Net;
      let scoreboard = new Scoreboard;
      let context = stub();
      let canvas = stub();
      let keysDown = {};
      let menu = new Menu;
      let game = new Game;
      let player1Attributes = {context: context, canvas: canvas, keysDown: keysDown, ball: this.ball, player: "player 1"};
      let player1KeyCodes = {moveLeft: 65, moveRight: 68, jump: 87};
      let player1 = new Player(player1Attributes, player1KeyCodes);
      let slime = new Slime(player1Attributes);
      player1.slime = slime;
      scoreboard.player1Score = 6
      game.difficulty = "insane"
      this.showGameOverMenu = false
      assert.equal(player1.slime.radius, 80);
      game.insanePlayer1GamePoint();
      assert.notStrictEqual(player1.slime.radius, 20);
    })
    it("it knows it's game point in insane mode for player 2", function() {
      let ball = new Ball;
      let net = new Net;
      let scoreboard = new Scoreboard;
      let context = stub();
      let canvas = stub();
      let keysDown = {};
      let menu = new Menu;
      let game = new Game;
      let player2Attributes = {context: context, canvas: canvas, keysDown: keysDown, ball: this.ball, player: "player 1"};
      let player2KeyCodes = {moveLeft: 65, moveRight: 68, jump: 87};
      let player2 = new Player(player2Attributes, player2KeyCodes);
      let slime = new Slime(player2Attributes);
      player2.slime = slime;
      scoreboard.player1Score = 6
      game.difficulty = "insane"
      this.showGameOverMenu = false
      assert.equal(player2.slime.radius, 80);
      game.insanePlayer2GamePoint();
      assert.notStrictEqual(player2.slime.radius, 20);
    })
  })
})
