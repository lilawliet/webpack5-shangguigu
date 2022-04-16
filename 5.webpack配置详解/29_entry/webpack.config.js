const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * 入口起点
 * 1. string --> './src/index.js'
 * 2. array 多入口
 * 3. object 多入口， key name 就是chunk name
 */

module.exports = {
    entry: {
        main: './src/index.js',
        add: './src/add.js',
        // jquery: ['jquery'],
        // react: ['react', 'react-dom', 'react-router-dom']
    },
    output: {
        filename: '[name].[hash:10].js',
        path: resolve(__dirname, 'build'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    mode: 'development'
}