import app from 'ft'
import { PIXI } from 'ft/core'
import { Scene } from 'ft/scene'
import { Sprite, DOM } from 'ft/display'
import BG from './BG'

const { Texture } = PIXI

class ExampleDOM extends Scene {
  constructor(name) {
    super(name)

    const bg = new BG()
    this.addChild(bg)

    const block = new Sprite(Texture.WHITE)
      .setScale(20)
      .setOrigin(0.5)
      .setPosition(app.size.centerX + 100, app.size.centerY + 100)
      .setInteractive(true)
      .on('pointerdown', () => console.log('pointerdown'))
      .on('pointerup', () => console.log('pointerup'))
      .on('pointerupoutside', () => console.log('pointerupoutside'))
      .on('pointerover', () => console.log('pointerover'))
      .on('pointerout', () => console.log('pointerout'))
      .on('pointerup', () => console.log('pointerup'))
    this.addChild(block)

    const cover = new DOM('div', { debug: true })
      .setSize(block.width, block.height)
      .setOrigin(0.5)
      .setPosition(block.x, block.y)
    cover.dom.style.backgroundColor = 'red'
    this.addChild(cover)
  }
}

export default ExampleDOM
