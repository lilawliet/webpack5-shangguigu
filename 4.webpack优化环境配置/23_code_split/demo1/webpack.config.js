const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = {
    entry: {
        // 多入口，最终多个bundle
        main: './src/js/index.js',
        test: './src/js/test.js'
    },
    output: {
        // [name] 去文件名
        filename: 'js/[name].[contenthash:10].js',
        path: resolve(__dirname, 'build')
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