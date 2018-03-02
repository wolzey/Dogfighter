import Phaser, { Sprite } from 'phaser'

export default class Jet extends Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)

    this.asset = asset
    this.game = game
    this.x = x
    this.y = y

    this.game.jetGroup.add(this)

    this.body.bounce.y = 0.95
    this.body.bounce.x = 0.95
    this.body.setCircle(165, 0, 142)
    this.body.collideWorldBounds = true

    this.anchor.y = 0.5
    this.anchor.x = 0.380
    this.onDestroyedCallbacks = []
    this.onDestroyedContexts = []

    this.fastSpeed = 300
    this.rotationSpeed = 40
    this.slowSpeed = 150
    this.speed = this.slowSpeed

    this.startingHealth = 100
    this.remainingHealth = this.startingHealth
    this.scale.setTo(0.2)
    // this.body.onBeginContact.add(this.onHit, this)

    this.weapon = this.game.add.weapon(30, 'bullet')
    this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS
    this.weapon.bulletSpeed = 600
    this.weapon.fireRate = 100
    this.weapon.trackSprite(this, 0, 0, true)
    this.weapon.bullets.forEach((b) => {
      b.scale.setTo(0.05)
    }, this)
  }

  onHit (phaserBody) {
    if (phaserBody) {
      if (phaserBody.sprite && phaserBody.sprite.key === 'ship') {
        this.removeHealth(50)
        if (this.remainingHealth <= 0) return this.destroy()
      }
    }
  }

  removeHealth (amount) {
    this.remainingHealth -= amount
    if (this.remainingHealth <= 0) {
      this.destroy()
    }
  }

  addDestroyedCallback (callback, context) {
    this.onDestroyedCallbacks.push(callback)
    this.onDestroyedContexts.push(context)
  }

  update () {
    // this.body.moveForward(this.speed)

    this.weapon.fireAngle = this.body.angle - 90
  }

  render () {
    this.game.debug.body(this)
  }
}
