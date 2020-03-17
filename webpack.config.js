const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    MDR: './lib/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),//根据操作系统类型将两个目录连起来
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
}