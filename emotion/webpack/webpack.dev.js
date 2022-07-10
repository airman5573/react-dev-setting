const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  // webpack.common.js와 merge해줍니다
  mode: 'development',
  devServer: {
    open: true,
    port: 3000,
    compress: true,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
    historyApiFallback: true,
    // url을 찾을 수 없을때 그냥 index.html을 돌려줍니다.
    // react-router-dom쓸때 필요합니다.
  },
});
