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
             * 语法检查 eslint-loader eslint
             * 只检查自己的源代码
             * 设置检查规则：
             *  package.json 中 eslintConfig 中设置
             *  airbnb  --> eslint-config-airbnb-base eslint eslint-plugin-import
             */
            // {    // 已过时
            //     test: /\.js$/,
            //     // 排除第三方库
            //     exclude: /node_modules/,
            //     loader: 'eslint-loader',
            //     options: {
            //         // fix: true
            //     }
            // }
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