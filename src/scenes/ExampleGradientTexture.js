import app from 'ft'
import { PIXI } from 'ft/core'
import { Scene } from 'ft/scene'
import { Graphics } from 'ft/display'
import BG from './BG'

const { Texture } = PIXI

class ExampleGradientTexture extends Scene {
  constructor(name) {
    super(name)

    const bg = new BG()
    this.addChild(bg)

    const width = 450
    const height = 20

    const grd = gradient(width, height, {
      from: '#46faac',
      middle: '#56e0fd',
      to: '#ffff00',
    })

    const circle = new Graphics()
      .beginTextureFill({ texture: grd })
      .drawRect(0, 0, width, height)
      .setOrigin(0.5)
      .setPosition(...app.size.center)
    this.addChild(circle)

    function gradient(width, height, { from, middle, to }) {
      const y = height / 2

      const c = document.createElement('canvas')
      const ctx = c.getContext('2d')
      const gradient = ctx.createLinearGradient(0, y, width, y)
      gradient.addColorStop(0, from)
      gradient.addColorStop(0.5, middle)
      gradient.addColorStop(1, to)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
      return new Texture.from(c)
    }
  }
}

export default ExampleGradientTexture
