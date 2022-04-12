const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                // 默认处理不了 html 中的 img 图片
                // 处理图片
                test: /\.(jpg|png|gif)$/,
                // 下周 url-loader file-loader
                // 使用一个 loader
                loader: 'url-loader',
                options: {
                    // 图片大小小于 8 kb, 就会被 base64 处理
                    // 优点：减少请求数量（减轻服务器压力）
                    // 缺点：图片集体会更大（文件请求速度变慢）
                    limit: 128 * 1024,
                    // 关闭 es6 模块化解析，使用 commonjs 解析
                    esModule: false,
                    // 给图片重命名
                    // [hash:10] 取哈希值前十位
                    // [ext] 取文件扩展名
                    name: '[hash:10].[ext]'
                },
                type: 'javascript/auto'
            },
            // {
            //     test: /\.html$/,
            //     // 专门处理 html 文件的 img 图片（负责引入图片，从而能被 url-loader 处理, commonjs 引入）
            //     loader: 'html-loader'
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}