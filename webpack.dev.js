const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
      static: './dist',
      port: 3000,
      hot: true,
      historyApiFallback: true,
      proxy: {
         '/api': {
            pathRewrite: {
               '^/api': '',
            },
            target: 'http://localhost:8080/',
            secure: false,
            changeOrigin: true,
         },
      },
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './public/index.html',
      }),
      new ReactRefreshWebpackPlugin(),
   ],
});
