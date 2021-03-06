import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)

    this.load.image('ship', 'assets/images/ship.png')
    this.load.image('mushroom', 'assets/images/mushroom2.png')
    this.load.image('background', 'assets/images/background.gif')
  }

  create () {
    this.state.start('Game')
  }
}
