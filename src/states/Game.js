/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/Player'
import Enemy from '../sprites/Enemy'

export default class extends Phaser.State {
  init () {
    this.game.stage.disableVisibilityChange = true
  }
  preload () { }

  create () {
    this.game.world.setBounds(-this.game.width, -this.game.height, this.game.width * 4, this.game.height * 4)
    let background = this.game.add.tileSprite(
      -this.game.width,
      -this.game.height,
      this.game.width * 4,
      this.game.height * 4,
      'background'
    )

    background.tileScale.y = 0.6
    background.tileScale.x = 0.6

    this.game.physics.startSystem(Phaser.Physics.ARCADE)
    this.game.jetGroup = this.game.add.group()
    this.game.bulletGroup = this.game.add.group()
    this.game.bulletGroup.scale.set(0.05)
    this.game.jetGroup.enableBody = true

    this.player = new Player({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'ship'
    })

    this.enemy = new Enemy({
      game: this.game,
      x: this.world.centerX - 80,
      y: this.world.centerY,
      asset: 'ship'
    })

    this.game.add.existing(this.player)
    this.game.add.existing(this.enemy)

    this.game.camera.follow(this.player)
  }

  update () {
    this.game.physics.arcade.collide(this.player, this.enemy)
    this.game.physics.arcade.overlap(this.player.weapon.bullets, this.enemy, () => {}, (b1, b2) => {
      b1.removeHealth(5)
      b2.kill()
    })
  }

  render () {
    if (__DEV__) {
      this.game.debug.body(this.player)
      this.game.debug.spriteInfo(this.player, 32, 32)
    }
  }
}
