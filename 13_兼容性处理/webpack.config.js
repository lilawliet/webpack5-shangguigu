const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            /**
             * js 兼容性处理 babel-loader
             * npm install babel-loader @babel/core @babel/preset-env -D
             * 1. 基本js兼容性处理 --> @babel/preset-env
             * 问题，只能转换基本语法
             * 2. 全部js兼容性问题 --> @babel/polyfill, 只要引入即可
             * 问题，兼容性代码全部引入，体积太大
             * 3. 按需处理 --> core-js
             */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    // 预设：指示babel做怎样的兼容性处理
                    presets: [['@babel/preset-env',
                        {
                            // 按需加载
                            useBuiltIns: 'usage',
                            corejs: {
                                version: 3
                            },
                            // 指定兼容性做到哪个版本浏览器
                            targets: {
                                chrome: '60',
                                firefox: '60',
                                ie: '9',
                                safari: '17'
                            }
                        }
                    ]]
                }
            }
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ESLintPlugin({
            extensions: ['js'],
            context: resolve(__dirname, 'src'),
            exclude: 'node_module',
            fix: true
        })
    ],
    mode: 'development'
}