import Phaser, { Sprite } from 'phaser'

export default class Jet extends Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)

    this.asset = asset
    this.game = game
    this.x = x
    this.y = y

    this.anchor.setTo(0.5)
    this.onDestroyedCallbacks = []
    this.onDestroyedContexts = []

    this.fastSpeed = 250
    this.rotationSpeed = 40
    this.slowSpeed = 150
    this.speed = this.slowSpeed
    game.physics.enable(this, Phaser.Physics.P2JS)

    this.remainingHealth = this.startingHealth
    this.startingHealth = 100
  }

  addDestroyedCallbacks (callback, context) {
    this.onDestroyedCallbacks.push(callback)
    this.onDestroyedContexts.push(context)
  }

  edgeContact () {
    this.destroy()
  }

  onHit () {
    this.removeHealth(10)
    if (!this.remainingHealth > 0) return this.destroy()
  }

  removeHealth (amount) {
    this.remainingHealth -= amount
  }

  update () {
    this.body.moveForward(this.speed)
  }
}
