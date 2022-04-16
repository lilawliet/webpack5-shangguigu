const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = {
    entry: './src/js/index.js',
    output: {
        // [name] 去文件名
        filename: 'js/[name].[contenthash:10].js',
        path: resolve(__dirname, 'build')
    },
    optimization: {
        /**
         * 可以将 node_modules 中代码单独打包一个 chunk 最终输出
         * 会自动分析多入口 chunk 有无公共依赖，如果有会打包成单独一个chunk
         */
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true

            }
        })
    ],
    mode: 'production'
}