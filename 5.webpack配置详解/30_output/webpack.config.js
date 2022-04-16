const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: './src/index.js',
    output: {
        // 文件名称
        filename: '[name].[hash:10].js',
        // 文件输出的目录（所有资源输出的公共目录）
        path: resolve(__dirname, 'build'),
        // 所有资源引入的公共路径 --> 路径的前缀
        publicPath: '/',
        chunkFilename: '[name]_chunk.js',
        library: '[name]',  // 库向外暴露的变量名
        libraryTarget: 'window',    // 变量名添加到哪个对象上面
        libraryTarget: 'global',    // node
        clean: true, // 打包自动清理之前版本
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    mode: 'development'
}