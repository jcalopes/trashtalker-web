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
      compress: false,
      hot: true,
      historyApiFallback: true,
      proxy: {
         '/container': {
            target: 'http://localhost:8098/',
            secure: false,
            changeOrigin: true,
         },
         '/measurements/stream': {
            target: 'http://localhost:8098/',
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

/*
 const sse = new EventSource('api/measurements/stream', {withCredentials: true});
 function getRealtimeData(data) {
    console.log(data);
 }
 sse.onmessage = e => getRealtimeData(JSON.parse(e.data));
 sse.onerror = (ev) => {
    console.log('error',ev);
    sse.close();
 }
 return () => {
    sse.close();
 };
*/