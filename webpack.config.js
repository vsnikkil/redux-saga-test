const resolve = require('path').resolve

module.exports = {
  entry: resolve('src/'),
  output: {
    path: resolve('release/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: resolve('src/'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      }
    ]
  }
}

