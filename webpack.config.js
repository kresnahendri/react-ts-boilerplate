const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: {
    app: ['./src/app.tsx'],
    vendor: ['react', 'react-dom']
  },
  output: {
    path: __dirname + '/public',
    filename: 'build/[name].bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    compress: true,
    port: 3000,
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: true,
      sourceMap: true,
      chunksSortMode: 'dependency'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
}