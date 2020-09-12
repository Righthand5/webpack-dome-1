const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const base = require('./webpack.config.base.js')

module.exports = {
  ...base,//把base的所有属性抄到这里
  mode: 'development',
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],//开发的时候留下它，因为它的速度非常的快!
      },
    ],
  },
};
