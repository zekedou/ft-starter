/* eslint-env node */

const path = require('path')
const { DefinePlugin } = require('webpack')
const {
  merge,
  setupIO,
  setupDevServer,
  loadHTML,
  loadJS,
  loadMacro,
  loadMedia,
  loadEnvs,
  minify,
  forceCaseSensitivePath,
  generateSourcemap,
  cleanupBuild,
} = require('./webpack.config.parts')

function resolve(p) {
  const ROOT = path.resolve(__dirname)
  return path.resolve(ROOT, p)
}

function setModeForFT(isProduction = true) {
  return {
    plugins: [
      new DefinePlugin({
        FT_PRODUCTION_MODE: JSON.stringify(isProduction),
      }),
    ],
  }
}

const PATH_ENTRY = resolve('src/index.html')
const PATH_SRC = resolve('src/')
const PATH_SRC_INDEX = resolve('src/index.js')
const PATH_DIST = resolve('dist/')
const PATH_FT = resolve('node_modules/ft/src/')
console.log(PATH_FT)

const commonConfig = [
  { resolve: { alias: { ft: PATH_FT } } },
  setupIO(PATH_SRC_INDEX, PATH_DIST),
  loadHTML(PATH_ENTRY, { inject: false }),
  loadJS({ include: [PATH_SRC, PATH_FT] }),
  loadMacro({ include: [PATH_SRC, PATH_FT] }),
  loadMedia(),
  loadEnvs(['APP_ENV']),
  forceCaseSensitivePath(),
]

const developmentConfig = [
  ...commonConfig,
  setupDevServer(),
  generateSourcemap(),
  setModeForFT(false),
]

const useCanvasVideo = false
if (useCanvasVideo) {
  // Add workaround for handling HEAD request in webpack-dev-server,
  // this is required by display/CanvasVideo
  const hack = {
    devServer: {
      proxy: {
        '/': {
          target: 'http://127.0.0.1:8080',
          bypass: (req) => (req.method = 'GET'),
        },
      },
    },
  }

  developmentConfig.push(hack)
}

const productionConfig = [
  ...commonConfig,
  minify(),
  cleanupBuild(),
  setModeForFT(true),
]

module.exports = function (_, { mode } = { mode: 'NO_MODE' }) {
  const config = mode === 'production' ? productionConfig : developmentConfig
  return merge(config)
}
