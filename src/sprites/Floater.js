import { Sprite } from 'phaser'

let isNegative = () => {
  let num = Math.random() * 1
  if (num > 0.5) return true
  return 0
}

let chooseRandom = (range) => {
  return Math.floor(Math.random() * range)
}

let randomNumber = (num) => {
  return {
    x: isNegative() ? -chooseRandom(num) : chooseRandom(num),
    y: isNegative() ? -chooseRandom(num) : chooseRandom(num)
  }
}
export default class Floater extends Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.asset = asset
    this.game = game
    this.x = x
    this.y = y

    this.game.mushrooms.add(this)
    this.body.bounce.y = 0.95
    this.body.bounce.x = 0.95
    this.body.setCircle(30)
    this.body.speed = 20
    this.body.rotation = Math.random() * 360
    this.body.angularAcceleration = Math.floor(Math.random() * 2)

    this.body.collideWorldBounds = true
    this.anchor.setTo(0.5)

    this.remainingHealth = 20
    this.body.mass = 5
  }

  removeHealth (damage) {
    this.remainingHealth -= damage
    if (this.remainingHealth <= 0) return this.destroy()
  }

  update () {}
}
