const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry:'./src/index.js',
  output:{
      filename:'[name].[contenthash].js'
  },
  devtool: 'inline-source-map',
  devServer: {
     contentBase: './dist',
   },
  plugins: [
    new HtmlWebpackPlugin({
    title:'Xyx',
    template: 'src/assets/index.html'
  }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
      ignoreOrder: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
        ],
        // use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
