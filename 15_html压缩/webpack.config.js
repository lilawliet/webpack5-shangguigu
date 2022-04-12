const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                // 移除空格
                collapseWhitespace: true,
                // 移除注释
                removeComments: true
            }
        }),
        new ESLintPlugin({
            extensions: ['js'],
            context: resolve(__dirname, 'src'),
            exclude: 'node_module',
            fix: true
        })
    ],
    // 生产环境下会自动压缩，使用 UglifyJsPlugin
    mode: 'production'

}