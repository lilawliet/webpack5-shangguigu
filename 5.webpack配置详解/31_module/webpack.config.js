const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: './src/index.js',
    output: {
        // 文件名称
        filename: '[name].[hash:10].js',
        // 文件输出的目录（所有资源输出的公共目录）
        path: resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            // loader 配置
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclued: /node_modules/,
                include: resolve(__dirname, 'src'),  // 只检查这个目录下
                enforce: 'pre',  // 优先执行
                enforce: 'post',  // 延后执行
                loader: 'eslint-loader'
            },
            {
                oneOf: [] // 只执行其中一个
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    mode: 'development'
}