const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: './src/app.tsx',
  output: {
    path: __dirname + '/public',
    filename: 'build/bundle.js'
  },
  devServer: {
    compress: true,
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: true,
      sourceMap: true,
      chunksSortMode: 'dependency'
    })
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
}