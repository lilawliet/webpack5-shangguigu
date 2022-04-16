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
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    mode: 'development',
    resolve: {
        alias: {
            $css: resolve(__dirname, 'src/css')
        },
        // 配置省略路径后缀名
        extensions: ['.js', '.json'],
        // 告诉 webpack 解析模块去哪个目录找
        modules: [resolve(__dirname, '../../node_modules', 'node_modules')]
    }
}