import app from 'ft'
import { Scene } from 'ft/scene'
import { Sprite, Text, DOM } from 'ft/display'
import { capture } from 'ft/util'
import BG from './BG'

const { rm } = app
const $card = rm.addImage('card')

class ExampleCapture extends Scene {
  constructor(name) {
    super(name)

    this.count = 0

    const bg = new BG()
    this.addChild(bg)

    const tip = new Text('HOLD TO SAVE IMAGE', {
      fontSize: 28,
      fill: '#e8e8e8',
      align: 'center',
    })
      .setOrigin(0.5)
      .setPosition(app.size.centerX, app.size.centerY + 350)
    this.addChild(tip)

    const button = new Text(`CAPTURE !`, {
      fontSize: 28,
      fill: '#e8e8e8',
      align: 'center',
    })
      .setOrigin(0.5)
      .setPosition(app.size.centerX, app.size.centerY + 450)
      .setInteractive(true)
      .on('pointertap', this.capture, this)
    this.addChild(button)

    const counter = new Text(this.count, {
      fontSize: 24,
      fill: '#e8e8e8',
      align: 'center',
    })
      .setOrigin(0.5)
      .setPosition(app.size.centerX, app.size.centerY + 500)
    this.counter = counter
    this.addChild(counter)

    const cardForShow = new Sprite(rm.texture($card))
      .setOrigin(0.5)
      .setScale(0.5)
      .setPosition(app.size.centerX, app.size.centerY - 100)
    this.addChild(cardForShow)

    const { width, height, x, y } = cardForShow
    const cover = new DOM('img')
      .setOrigin(0.5)
      .setSize(width, height)
      .setPosition(x, y)
      .setAlpha(0.0001)
    this.cover = cover
    this.addChild(cover)

    this.capture()
  }

  capture() {
    const cardForSave = this.generateCard()
    this.cover.dom.src = capture(cardForSave)
  }

  generateCard() {
    const cardForSave = new Sprite(rm.texture($card))
    this.count += 1
    this.counter.text = this.count.toString()
    const copywriting = new Text(this.count, {
      fontSize: 40,
      fill: '#ff0000',
    })
      .setOrigin(0.5)
      .setPosition(cardForSave.width / 2, cardForSave.height / 2)
    cardForSave.addChild(copywriting)

    return cardForSave
  }
}

export default ExampleCapture
