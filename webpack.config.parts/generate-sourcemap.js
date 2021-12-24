/* eslint-env node */
const { isProductionMode } = require('./helper')

const generateSourcemap = () => ({
  devtool: isProductionMode()
    ? 'nosources-source-map'
    : 'cheap-module-eval-source-map',
})

module.exports = generateSourcemap
