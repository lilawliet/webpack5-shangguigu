const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // 'style-loader',
                    // 取代 style-loader , 提取 css 成为单独文件
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    /**
                     * css 兼容性处理 postcss --> postcss-loader postcss-preset-env
                     * 帮 postcss 找到 package.json 中 browserslist 里面的配置，通过配置
                     * 加载指定的 css 兼容性样式
                     */
                    // 使用 loader 默认配置
                    // 'postcss-loader'
                    // 修改 loader 配置

                    /**
                        "browserslist": {
                            // 开发环境 --> 设置 node 环境变量：process.env.NODE_ENV = 'development';
                            "development": [
                            "last 1 chrome version",
                            "last 1 firefox version",
                            "last 1 safari version"
                            ],
                            "production": [
                            ">0.2%",
                            "not dead",
                            "not op_mini all"
                            ]
                        } 
                     */
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin()
    ],
    mode: 'development'
}