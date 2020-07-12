import { Scene } from 'ft/scene'
import { Text } from 'ft/display'
import { HUD } from 'ft/component'
import BG from './BG'

class ExampleHUD extends Scene {
  constructor(name) {
    super(name)

    const bg = new BG()
    this.addChild(bg)

    const bl = new Text('BOTTOM LEFT', {
      fontSize: 40,
      fill: '#ff0000',
    })
      .setOrigin(0, 1)
      .addComponent(new HUD({ left: 0, bottom: 0 }))
    this.addChild(bl)

    const br = new Text('BOTTOM RIGHT', {
      fontSize: 40,
      fill: '#ff0000',
    })
      .setOrigin(1, 1)
      .addComponent(new HUD({ right: 0, bottom: 0 }))
    this.addChild(br)

    const tl = new Text('TOP LEFT', {
      fontSize: 40,
      fill: '#ff0000',
    })
      .setOrigin(0, 0)
      .addComponent(new HUD({ left: 0, top: 0 }))
    this.addChild(tl)

    const tr = new Text('TOP RIGHT', {
      fontSize: 40,
      fill: '#ff0000',
    })
      .setOrigin(1, 0)
      .addComponent(new HUD({ right: 0, top: 0 }))
    this.addChild(tr)
  }
}

export default ExampleHUD
