import { Sprite } from 'phaser'

export default class Floater extends Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.asset = asset
    this.game = game
    this.x = x
    this.y = y

    this.game.mushrooms.add(this)
    this.body.bounce.y = 0.95
    this.body.bounce.x = 0.95
    this.body.setCircle(30)
    this.body.speed = 20
    this.body.rotation = Math.random() * 360
    this.body.angularAcceleration = Math.floor(Math.random() * 10)

    this.body.collideWorldBounds = true
    this.anchor.setTo(0.5)

    this.remainingHealth = 20
    this.body.mass = 10
  }

  removeHealth (damage) {
    this.remainingHealth -= damage
    if (this.remainingHealth <= 0) return this.destroy()
  }

  update () { }
}
