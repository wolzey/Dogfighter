import Phaser, { Sprite } from 'phaser'

export default class Jet extends Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)

    this.asset = asset
    this.game = game
    this.x = x
    this.y = y

    this.game.physics.enable(this, Phaser.Physics.P2JS)
    this.anchor.setTo(0.5)
    this.onDestroyedCallbacks = []
    this.onDestroyedContexts = []

    this.fastSpeed = 300
    this.rotationSpeed = 40
    this.slowSpeed = 150
    this.speed = this.slowSpeed

    this.startingHealth = 100
    this.remainingHealth = this.startingHealth
    this.body.setCircle(25.0)
    this.scale.setTo(0.2)
  }

  addDestroyedCallback (callback, context) {
    this.onDestroyedCallbacks.push(callback)
    this.onDestroyedContexts.push(context)
  }

  update () {
    this.body.moveForward(this.speed)
  }
}
