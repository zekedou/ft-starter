import app from 'ft'
import { Scene } from 'ft/scene'
import { Scroller, Sprite } from 'ft/display'
import BG from './BG'

const { rm } = app

const $content = rm.addImage('content-long')

class ExampleScroll extends Scene {
  constructor(name) {
    super(name)

    const bg = new BG()
    this.addChild(bg)

    const scrollerWidth = 600

    const content = new Sprite(rm.texture($content))
    content.setScale(scrollerWidth / content.width)

    const scroller = new Scroller(content, {
      width: scrollerWidth,
      height: 700,
      enableX: false,
      enableY: true,
    })
      .setOrigin(0.5)
      .setPosition(...app.size.center)
    this.addChild(scroller)

    scroller.on('progress', ({ x, y }) => {
      console.log(x, y)
    })
  }
}

export default ExampleScroll
