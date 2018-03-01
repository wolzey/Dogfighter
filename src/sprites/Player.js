import Phaser from 'phaser'

import Jet from './Jet'

export default class Player extends Jet {
  constructor (props) {
    super(props)
    this.cursors = this.game.input.keyboard.createCursorKeys()

    this.keyboard = this.game.input.keyboard

    let spaceBar = this.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
    spaceBar.onDown.add(this.fireWeapon, this)

    this.body.drag.set(70)
    this.body.maxVelocity.set(300)
  }

  update () {
    if (this.cursors.up.isDown) {
      this.game.physics.arcade.accelerationFromRotation(this.rotation, 300, this.body.acceleration)
    } else {
      this.body.acceleration.set(0)
    }

    if (this.cursors.left.isDown) {
      this.body.angularVelocity = -300
    } else if (this.cursors.right.isDown) {
      this.body.angularVelocity = 300
    } else {
      this.body.angularVelocity = 0
    }
  }

  fireWeapon () {
    this.weapon.fire()
  }

  wKeyDown () {
    this.game.physics.arcade.accelerationFromRotation(this.rotation, 300, this.body.acceleration)
  }

  wKeyUp () {
    this.body.acceleration.set(0)
  }

  aKeyDown () {
    this.game.physics.arcade.accelerationFromRotation(this.rotation, -300, this.body.acceleration)
  }

  sKeyDown () {
    this.angularVelocity = -300
  }

  dKeyDown () {
    this.angularVelocity = 300
  }
}
