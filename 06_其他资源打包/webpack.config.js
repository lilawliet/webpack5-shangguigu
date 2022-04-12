const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {   // 打包其他资源
                // 排除这些资源
                exclude: /\.(css|js|html|less|sass)$/,
                loader: 'file-loader'

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',

    // 开发服务器 devServer: 用来自动化 （编译/打开浏览器/刷新浏览器）
    // 只会在内存中编译打包，不会有任何输出
    // 启动指令： npx webpack-dev-server
    devServer: {
        // contentBase: resolve(__dirname, 'build'),
        static: { directory: resolve(__dirname, 'build')},
        // 启用 gzip 压缩
        compress: true,
        port: 3000,
        // 自动打开浏览器
        open: true
    }
}