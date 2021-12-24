/* global APP_ENV */
import app from 'ft'
import { Scene } from 'ft/scene'
import { Text } from 'ft/display'
import BG from './BG'

const { rm } = app

class Entry extends Scene {
  constructor(name) {
    super(name)

    rm.onComplete.add(this.onLoadDone, this)
    rm.load()
  }

  async onLoadDone() {
    if (APP_ENV !== 'release') {
      const isSceneLoaded = await app.sm.qsload()
      if (isSceneLoaded) return
    }

    const bg = new BG()
    this.addChild(bg)

    const title = new Text('Starter app', {
      fontSize: 45,
      fill: '#ffffff',
    })
      .setOrigin(0.5)
      .setPosition(app.size.centerX, app.size.centerY - 100)
    this.addChild(title)

    const description = new Text(
      'visit a scene via:\nPROTOCOL://HOST:PORT/?__scene__=SCENE_NAME',
      { fontSize: 28, fill: '#e8e8e8', align: 'center' }
    )
      .setOrigin(0.5)
      .setPosition(app.size.centerX, app.size.centerY + 50)
    this.addChild(description)
  }
}

export default Entry
