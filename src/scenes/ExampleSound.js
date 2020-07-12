import app from 'ft'
import { Scene } from 'ft/scene'
import { Text } from 'ft/display'
import BG from './BG'

const { rm } = app

const $bgm1 = rm.addSound('sound.bgm1')
const $bgm2 = rm.addSound('sound.bgm2')

class ExampleSound extends Scene {
  constructor(name) {
    super(name)

    const bg = new BG()
    this.addChild(bg)

    this.bgm1Started = false
    const bgm1 = rm.sound($bgm1)
    bgm1.loop = true
    const BGM1_TEXT_PAUSE = 'PAUSE BGM1'
    const BGM1_TEXT_PLAY = 'PLAY BGM1'
    const bgm1Button = new Text(BGM1_TEXT_PLAY, {
      fontSize: 40,
      fill: 0xffffff,
    })
      .setOrigin(0.5)
      .setPosition(app.size.centerX, app.size.centerY - 50)
      .setInteractive()
      .on('pointerup', () => {
        if (!this.bgm1Started) {
          this.bgm1Started = true

          bgm1Button.text = BGM1_TEXT_PAUSE
          bgm1.play()

          return
        }

        if (bgm1.isPlaying) {
          bgm1.pause()
          bgm1Button.text = BGM1_TEXT_PLAY
        } else {
          bgm1.resume()
          bgm1Button.text = BGM1_TEXT_PAUSE
        }
      })
    this.addChild(bgm1Button)

    this.bgm2Started = false
    const bgm2 = rm.sound($bgm2)
    bgm2.loop = true
    const BGM2_TEXT_PAUSE = 'PAUSE BGM2'
    const BGM2_TEXT_PLAY = 'PLAY BGM2'
    const bgm2Button = new Text(BGM2_TEXT_PLAY, {
      fontSize: 40,
      fill: 0xffffff,
    })
      .setOrigin(0.5)
      .setPosition(app.size.centerX, app.size.centerY + 50)
      .setInteractive()
      .on('pointerup', () => {
        if (!this.bgm2Started) {
          this.bgm2Started = true

          bgm2Button.text = BGM2_TEXT_PAUSE
          bgm2.play()

          return
        }

        if (bgm2.isPlaying) {
          bgm2.pause()
          bgm2Button.text = BGM2_TEXT_PLAY
        } else {
          bgm2.resume()
          bgm2Button.text = BGM2_TEXT_PAUSE
        }
      })
    this.addChild(bgm2Button)
  }
}

export default ExampleSound
