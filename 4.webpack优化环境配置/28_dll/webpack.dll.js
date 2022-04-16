/**
    使用 dll 技术， 对某些库 （第三方库） 进行单独打包
    当运行 webpack 时，默认查找 webpack.config.js 配置文件
    --> wepack --config webpack.dll.js
*/

const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        // 最终打包生成的 [name] --> jquery
        // 要打包的库 --> ['jquery']
        jquery: ['jquery']
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dll'),
        library: '[name]_[hash:10]',  // 打包的库向外面暴露的内容叫什么名
    },
    plugins: [
        // 打包生成一个 manifest.json 文件，提供 jquery 映射
        new webpack.DllPlugin({
            name: '[name]_[hash:10]',  // 映射库的暴露的内容
            path: resolve(__dirname, 'dll/manifest.json')   // 输出文件路径
        })
    ]
}