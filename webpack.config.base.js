const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
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
  })
  ]
};
