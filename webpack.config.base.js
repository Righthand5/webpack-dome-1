const HtmlWebpackPlugin = require('html-webpack-plugin');
const { basename } = require('path');
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
  ],
  module: {
    rules: [{
      test:/\.(png|svg|jpg|gif)$/,
      use: ["file-loader"]
    },{
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "less-loader" // compiles Less to CSS
        }]
    },
      {
          test: /\.styl$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "stylus-loader" // compiles Less to CSS
    }]
  },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          {
            loader: 'sass-loader',
            options: {
              implementation:require('dart-sass')
            }  
          },
        ],
      },
    ],
  }
};
