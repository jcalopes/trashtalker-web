const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
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
            '/measurement/stream': {
                target: 'http://localhost:8098/',
                secure: false,
                changeOrigin: true,
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    plugins: [new ReactRefreshWebpackPlugin()],
});
