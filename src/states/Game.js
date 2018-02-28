/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/Player'

export default class extends Phaser.State {
  init () { }
  preload () { }

  create () {
    this.game.physics.startSystem(Phaser.Physics.P2JS)
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

    this.enemyJets = this.game.add.group()

    this.game.add.existing(this.mushroom)
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }
}
