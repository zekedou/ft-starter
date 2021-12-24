import 'regenerator-runtime/runtime'

import app from 'ft'
import './register-resources'
import './external'

import Entry from './scenes/Entry'
import ExampleLifecycle from './scenes/ExampleLifecycle'
import ExampleTime from './scenes/ExampleTime'
import ExampleDOM from './scenes/ExampleDOM'
import ExampleSpritesheet from './scenes/ExampleSpritesheet'
import ExampleCapture from './scenes/ExampleCapture'
import ExampleScroll from './scenes/ExampleScroll'
import ExampleHTML5Video from './scenes/ExampleHTML5Video'
import ExampleCanvasVideo from './scenes/ExampleCanvasVideo'
import ExampleGradientTexture from './scenes/ExampleGradientTexture'
import ExampleSound from './scenes/ExampleSound'
import ExampleHUD from './scenes/ExampleHUD'
import Perf from './scenes/Perf'

const containerDOM = document.querySelector('#container')
const options = {
  container: {
    bgColor: '#000000',
  },
  render: {
    type: 'webgl',
    width: 750,
    height: 1500,
  },
  scale: {
    mode: 'COVER',
  },
}

app.init(containerDOM, options)

app.sm.register('entry', Entry)
app.sm.register('lifecycle', ExampleLifecycle)
app.sm.register('time', ExampleTime)
app.sm.register('dom', ExampleDOM)
app.sm.register('spritesheet', ExampleSpritesheet)
app.sm.register('capture', ExampleCapture)
app.sm.register('scroll', ExampleScroll)
app.sm.register('html5-video', ExampleHTML5Video)
app.sm.register('canvas-video', ExampleCanvasVideo)
app.sm.register('gradient-texture', ExampleGradientTexture)
app.sm.register('sound', ExampleSound)
app.sm.register('hud', ExampleHUD)
app.sm.register('perf', Perf)

app.start()
app.sm.load('entry', { oneOff: true })
