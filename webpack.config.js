'use strict'  // eslint-disable-line

const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  devServer: {
    port: 3000,
    contentBase: './public/',
  },
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/app.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/assets/'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        include: path.resolve(__dirname, './src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}