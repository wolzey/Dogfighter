import Jet from './Jet'

export default class extends Jet {
  updateProperties ({angle, x, y, speed}) {
    angle = (180 * Math.atan2(x - this.body.x, y - this.body.y) / Math.PI)
    let dif = this.jet.body.angle - angle

    this.body.setZeroRotation()

    if ((dif < 0 && dif > -180) || (dif > 180)) {
      this.body.rotateRight(this.rotationSpeed)
    } else if ((dif > 0 && dif < 180) || (dif < -180)) {
      this.body.rotateLeft(this.rotationSpeed)
    }
  }
}
