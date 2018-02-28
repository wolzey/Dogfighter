/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/Player'
import Enemy from '../sprites/Enemy'

export default class extends Phaser.State {
  init () { }
  preload () { }

  create () {
    this.game.physics.startSystem(Phaser.Physics.P2JS)
    this.game.physics.p2.setImpactEvents(true)
    this.game.physics.p2.updateBoundsCollisionGroup()

    const bannerText = 'Dogfighter'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText, {
      font: '40px Bangers',
      fill: '#77BFA3',
      smoothed: false
    })

    banner.padding.set(10, 16)
    banner.anchor.setTo(0.5)

    this.mushroom = new Player({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'jet'
    })

    this.enemy = new Enemy({
      game: this.game,
      x: this.world.centerX - 80,
      y: this.world.centerY,
      asset: 'jet'
    })

    this.game.add.existing(this.mushroom)
    this.game.add.existing(this.enemy)
  }

  playerHit (body1, body2) {
    console.log('HIT', body1, body2)
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }
}
