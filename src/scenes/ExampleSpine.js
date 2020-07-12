import app from 'ft'
import { Scene } from 'ft/scene'
import { Spine } from 'ft/display'
import BG from './BG'

const { rm } = app
const $boy = rm.addSpine('spine.spineboy-pro')

const STATE_WALK = 'walk'
const STATE_IDLE = 'idle'

class ExampleSpine extends Scene {
  constructor(name) {
    super(name)

    this.state = null

    const bg = new BG()
    this.addChild(bg)

    const boy = new Spine(rm.spine($boy))
      .setPosition(app.size.centerX, app.size.centerY + 300)
      .setDefaultMix(0.5)
    this.boy = boy
    this.addChild(boy)

    this.walk()

    boy.setInteractive().on('pointertap', () => {
      if (this.state !== STATE_IDLE) {
        this.idle()
      } else {
        this.walk()
      }
    })
  }

  walk() {
    this.boy.playAnimation('walk', { loop: true, trackID: 0 })
    this.state = STATE_WALK
  }

  idle() {
    this.boy.playAnimation('idle', { loop: true, trackID: 0 })
    this.state = STATE_IDLE
  }
}

export default ExampleSpine
