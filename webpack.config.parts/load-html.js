/* eslint-env node */

const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = (
  template = 'src/index.html',
  { filename = 'index.html', inject = true } = {}
) => {
  return {
    plugins: [
      new HTMLWebpackPlugin({
        template,
        filename,
        inject,
      }),
    ],
  }
}
