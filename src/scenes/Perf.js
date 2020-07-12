import app from 'ft'
import { PIXI } from 'ft/core'
import { Scene } from 'ft/scene'
import { Sprite } from 'ft/display'

class Perf extends Scene {
  constructor(name) {
    super(name)

    const bunnyURL =
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png'

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max))
    }

    const texture = PIXI.Texture.from(bunnyURL)

    function createBunny() {
      // This creates a texture from a 'bunny.png' image
      const bunny = new Sprite(texture)

      // Setup the position of the bunny
      bunny.x = getRandomInt(app.renderer.width)
      bunny.y = getRandomInt(app.renderer.height)

      // Rotate around the center
      bunny.anchor.x = 0.5
      bunny.anchor.y = 0.5

      // Listen for frame updates
      app.ticker.add(() => {
        // each frame we spin the bunny around a bit
        bunny.rotation += 0.1
      })
      return bunny
    }

    for (let i = 0; i < 10000; i++) {
      const bunny = createBunny()
      this.addChild(bunny)
    }
  }
}

export default Perf
