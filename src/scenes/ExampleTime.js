import { Scene } from 'ft/scene'
import { timeout, delay } from 'ft/time'
import BG from './BG'

class ExampleTime extends Scene {
  constructor(name) {
    super(name)

    const bg = new BG()
    this.addChild(bg)

    this.testTimeFunctions()
  }

  async testTimeFunctions() {
    let i = 0
    const timer = timeout(1000, () => {
      console.log(`NO ${++i}: ${timer.duration}`)
      timer.reset()
    })

    timer.start()
    console.log('start timer')

    await delay(5000)

    timer.stop()
    console.log('stop timer')

    timer.start()
    console.log('start timer again')
  }
}

export default ExampleTime
