import app from 'ft'
import { Scene } from 'ft/scene'
import { HTML5Video, Sprite, Text } from 'ft/display'
import { HUD } from 'ft/component'

const { rm } = app
const $spinner = rm.addImage('video.spinner')

class Spinner extends Sprite {
  constructor() {
    super(rm.texture($spinner))

    this.setOrigin(0.5)
    this.setPosition(app.size.centerX, app.size.centerY)
  }

  onUpdate() {
    this.rotation += 0.08
  }
}

function onShowSpinner(container) {
  if (!this.spinnerAdded) {
    this.spinnerAdded = true

    if (!this.spinner) {
      this.spinner = new Spinner()
    }

    const stage = container.parent.parent
    stage.addChild(this.spinner)
  }
}

function onHideSpinner(container) {
  if (this.spinnerAdded) {
    this.spinnerAdded = false

    if (this.spinner) {
      const stage = container.parent.parent
      stage.removeChild(this.spinner)
    }
  }
}

const options = {
  onShowSpinner,
  onHideSpinner,
  loop: true,
}

class ExampleHTML5Video extends Scene {
  constructor(name) {
    super(name)

    const videoWidth = 1920
    const videoHeight = 1080
    app.systems.render.resize(videoWidth, videoHeight) // resize stage for the video

    const url = app.rm.url('video.record')
    const video = new HTML5Video(url, options)
      .setSize(videoWidth, videoHeight)
      .addComponent(new HUD({ left: '50%', top: '50%' }))
    this.addChild(video)

    const tip = new Text('TOUCH TO PLAY', {
      fill: '#ffff00',
      fontSize: 50,
      stroke: '#000000',
      strokeThickness: 10,
    })
      .setOrigin(0.5)
      .setPosition(...app.size.center)
      .setInteractive(true)
      .once('pointerup', async () => {
        tip.parent.removeChild(tip)
        await video.unlock()
        video.play()
      })
    this.addChild(tip)
  }
}

export default ExampleHTML5Video
