import app from 'ft'
import { Scene } from 'ft/scene'
import { Text } from 'ft/display'
import Component from 'ft/component'
import { delay } from 'ft/time'
import BG from './BG'

class ExampleLifecycle extends Scene {
  constructor(name) {
    super(name)

    this.interactive = true
    this.once('pointerup', () => {
      lc.removeSelf()
    })

    const bg = new BG()
    this.addChild(bg)
    bg.addComponent(new ComponentA())
    bg.addComponent(new ComponentB())

    const lc = new Text('LIFE CYCLE\n(click to remove me)', {
      align: 'center',
      fill: 0xffffff,
    })
      .setOrigin(0.5)
      .setPosition(...app.size.center)
    this.addChild(lc)
    lc.addComponent(new ComponentA())
    lc.addComponent(new ComponentB())

    this.addChildDelay()
  }

  async addChildDelay() {
    const lcd = new Text('LIFE CYCLE\n(I am added after a timeout)', {
      align: 'center',
      fill: 0xffffff,
    })
      .setOrigin(0.5)
      .setPosition(app.size.centerX, app.size.centerY + 100)

    lcd.addComponent(new ComponentA())
    lcd.addComponent(new ComponentB())
    await delay(2000)
    console.log('add lcd')
    this.addChild(lcd)

    await delay(2000)
    console.log('remove lcd')
    lcd.removeSelf()
  }
}

class ComponentA extends Component {
  onAdded() {
    console.log('[component] A run')
  }

  onRemoved() {
    console.log('[component] A stop')
  }
}

class ComponentB extends Component {
  onAdded() {
    console.log('[component] B run')
  }

  onRemoved() {
    console.log('[component] B stop')
  }
}

export default ExampleLifecycle
