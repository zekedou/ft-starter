/* global APP_ENV */
import scriptjs from 'scriptjs'
import { Console } from 'ft/debug'

if (APP_ENV !== 'release') {
  new Console()
}

if (APP_ENV !== 'release') {
  scriptjs('https://mrdoob.github.io/stats.js/build/stats.min.js', () => {
    const stats = new Stats() // eslint-disable-line no-undef

    stats.dom.style.top = ''
    stats.dom.style.left = ''
    stats.dom.style.right = '0px'
    stats.dom.style.bottom = '0px'

    document.body.appendChild(stats.dom)

    requestAnimationFrame(function loop() {
      stats.update()
      requestAnimationFrame(loop)
    })
  })
}
