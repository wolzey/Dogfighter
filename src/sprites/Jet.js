import { Sprite } from 'phaser'

export default class Jet extends Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)

    this.game = game
    this.asset = asset
    this.x = x
    this.y = y

    this.anchor.setTo(0.5)
    this.onDestroyedCallbacks = []
    this.onDestroyedContexts = []
    // game.physics.enable(this, Phaser.Physics.ARCADE)
  }

  addDestroyedCallbacks (callback, context) {
    this.onDestroyedCallbacks.push(callback)
    this.onDestroyedContexts.push(context)
  }

  edgeContact () {
    this.destroy()
  }

  update () {
    this.angle += 2
  }
}
