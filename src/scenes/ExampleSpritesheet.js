import app from 'ft'
import { Scene } from 'ft/scene'
import { AnimatedSprite } from 'ft/display'
import { Draggable } from 'ft/component'
import BG from './BG'

const { rm } = app

const $logo = rm.addSpritesheet('spritesheet.pirate')

class ExampleSpritesheet extends Scene {
  constructor(name) {
    super(name)

    const bg = new BG()
    this.addChild(bg)

    const animation = new AnimatedSprite(rm.spritesheetTextures($logo))
      .setScale(3)
      .setOrigin(0.5)
      .setPosition(...app.size.center)
      .addComponent(new Draggable())
    this.addChild(animation)

    animation.loop = true
    animation.animationSpeed = 24 / 60
    let time = 0
    animation.onLoop = () => {
      console.log(`play ${++time} time`) // eslint-disable-line
    }

    animation.play()
  }
}

export default ExampleSpritesheet
