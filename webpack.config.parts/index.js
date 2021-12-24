const merge = require('webpack-merge')
const setupIO = require('./setup-io')
const setupDevServer = require('./setup-dev-server')
const loadHTML = require('./load-html')
const loadJS = require('./load-js')
const loadMacro = require('./load-macro')
const loadMedia = require('./load-media')
const loadEnvs = require('./load-envs')
const minify = require('./minify')
const forceCaseSensitivePath = require('./force-case-sensitive-path')
const generateSourcemap = require('./generate-sourcemap')
const cleanupBuild = require('./cleanup-build')

module.exports = {
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
}
