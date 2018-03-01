import Phaser from 'phaser'

import Jet from './Jet'

export default class Player extends Jet {
  constructor (props) {
    super(props)
    this.cursors = this.game.input.keyboard.createCursorKeys()

    this.keyboard = this.game.input.keyboard

    let shiftKey = this.keyboard.addKey(Phaser.Keyboard.SHIFT)
    let spaceKey = this.keyboard.addKey(Phaser.Keyboard.SPACEBAR)

    shiftKey.onDown.add(this.shiftKeyDown, this)
    shiftKey.onUp.add(this.shiftKeyUp, this)

    spaceKey.onDown.add(this.fireWeapon, this)
  }

  update () {
    let mousePosX = this.game.input.activePointer.worldX
    let mousePosY = this.game.input.activePointer.worldY
    let headX = this.body.x
    let headY = this.body.y
    let angle = (180 * Math.atan2(mousePosX - headX, mousePosY - headY) / Math.PI)

    angle = angle > 0 ? 180 - angle : -180 - angle

    let dif = this.body.angle - angle

    this.body.setZeroRotation()

    if ((dif < 0 && dif > -180) || (dif > 180)) {
      this.body.rotateRight(this.rotationSpeed)
    } else if ((dif > 0 && dif < 180) || (dif < -180)) {
      this.body.rotateLeft(this.rotationSpeed)
    }

    super.update()
  }

  fireWeapon () {
    this.weapon.fire()
  }

  shiftKeyDown () {
    this.speed = this.fastSpeed
  }

  shiftKeyUp () {
    this.speed = this.slowSpeed
  }
}
