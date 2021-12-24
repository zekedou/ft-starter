/* eslint-env node */

const TerserPlugin = require('terser-webpack-plugin')

module.exports = () => {
  return {
    optimization: {
      minimizer: [
        new TerserPlugin({
          parallel: true,
          extractComments: false,
          terserOptions: {
            sourceMap: true,
            format: {
              comments: false,
            },
          },
        }),
      ],
    },
  }
}
