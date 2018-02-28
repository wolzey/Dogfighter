import Jet from './Jet'

export default class extends Jet {
  constructor (props) {
    super(props)
    this.cursors = this.game.input.keyboard.createCursorKeys()
  }

  update () {
    let mousePosX = this.game.input.activePointer.worldX
    let mousePosY = this.game.input.activePointer.worldY
    let headX = this.body.x
    let headY = this.body.y
    let angle = (180 * Math.atan2(mousePosX - headX, mousePosY - headY) / Math.PI)

    angle = angle > 0 ? 180 - angle : -180 - angle

    let dif = this.body.angle - angle

    if ((dif < 0 && dif > -180) || (dif > 180)) {
      this.body.rotateRight(this.rotationSpeed)
    } else if ((dif > 0 && dif < 180) || (dif < -180)) {
      this.body.rotateLeft(this.rotationSpeed)
    }

    super.update()
  }
}
