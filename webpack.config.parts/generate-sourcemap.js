/* eslint-env node */
const { isProductionMode } = require('./helper')

const generateSourcemap = () => ({
  devtool: isProductionMode()
    ? 'nosources-source-map'
    : 'eval-cheap-module-source-map',
})

module.exports = generateSourcemap
