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

    this.fastSpeed = 250
    this.rotationSpeed = 40
    this.slowSpeed = 150
    this.speed = this.slowSpeed

    this.startingHealth = 100
    this.remainingHealth = this.startingHealth
    this.body.setCircle(30.0)
    this.body.onBeginContact.add(this.onHit, this)
  }

  addDestroyedCallback (callback, context) {
    this.onDestroyedCallbacks.push(callback)
    this.onDestroyedContexts.push(context)
  }

  onHit (phaserBody) {
    if (phaserBody) {
      if (phaserBody.sprite && phaserBody.sprite.key === 'jet') {
        this.removeHealth(50)
      }
    }
  }

  removeHealth (amount) {
    this.remainingHealth -= amount
    if (this.remainingHealth <= 0) {
      // this.destroy()
    }
  }

  update () {
    this.body.moveForward(this.speed)
  }
}
