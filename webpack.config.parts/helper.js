/* eslint-env node */
const webpackMode = require('webpack-mode')

function getPublicPath() {
  return parseEnvValue(process.env.W_PUBLIC_PATH, '')
}

function getHash() {
  return isFileHashEnabled() ? '-[hash:8]' : ''
}

function getContenthash() {
  return isFileHashEnabled() ? '-[contenthash:8]' : ''
}

function getChunkhash() {
  return isFileHashEnabled() ? '-[chunkhash:8]' : ''
}

function getEntryChunkhash() {
  return isProductionMode() ? '-[chunkhash:8]' : '-[hash]'
}

function isFileFlatEnabled() {
  return parseEnvValue(process.env.W_FILE_FLAT, true)
}

function isFileHashEnabled() {
  return parseEnvValue(process.env.W_FILE_HASH, true)
}

function isProductionMode() {
  return webpackMode.isProduction
}

function isCSS(filename) {
  return filename.endsWith('.css')
}

function isSASS(filename) {
  const re = /\.s[ac]ss$/i
  return re.test(filename)
}

function toArray(data) {
  return data ? (Array.isArray(data) ? data : [data]) : []
}

function parseEnvValue(env, defaultValue = undefined) {
  if (env === undefined) {
    return defaultValue
  } else if (env.trim() === 'true') {
    return true
  } else if (env.trim() === 'false') {
    return false
  } else {
    return env
  }
}

module.exports = {
  getPublicPath,
  getHash,
  getContenthash,
  getChunkhash,
  getEntryChunkhash,
  isFileFlatEnabled,
  isFileHashEnabled,
  isProductionMode,
  isCSS,
  isSASS,
  toArray,
}
