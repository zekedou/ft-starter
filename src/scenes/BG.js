import app from 'ft'
import { TilingSprite } from 'ft/display'
const { rm } = app

const $patternDark = rm.addImage('pattern-dark')
const $patternLight = rm.addImage('pattern-light')

class BG extends TilingSprite {
  constructor(color = 'dark') {
    super(rm.texture(color === 'dark' ? $patternDark : $patternLight))

    this.setSize(app.size.width, app.size.height)
  }
}

export default BG
