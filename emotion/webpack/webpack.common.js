const { join, resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: join(__dirname, '../src/index.tsx'),
  devtool: 'eval-source-map',
  output: {
    filename: 'main.js',
    path: join(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // .ts파일을 만나면
        exclude: /node_modules/, // node_modules를 제외하고
        use: ['babel-loader'], // babel-loader에게 일을 맡긴다!
      },
      {
        test: /\.(png|jpg|jpeg)$/i,
        type: 'asset/resource', // asset/resource는 webpack5 에서 url-loader, file-loader대신 지원하는 기능입니다
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, '../public/index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@components': resolve(__dirname, '../src/components'),
      '@styles': resolve(__dirname, '../src/styles'),
    },
  },
};
