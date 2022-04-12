/**
 * HMR: hot module replacement 热替换
 * 样式文件： 可以使用 HMR， style-loader 内部实现了
 * JS文件： 默认不使用 HMR，添加支持 HMR 的代码
 * html文件： 默认不使用 HMR。解决方案： 修改 entry 入口为数组，加入 html 文件引入
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built,js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                // 处理 less
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                // 处理 css
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                // 处理图片资源
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    name: '[hash:10].[ext]',
                    // 关闭 es6 模块化
                    esModule: false,
                    outputPath: 'imgs'
                }
            },
            {
                // 处理 html 中的 img 资源
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                exclude: /\.(html|js|css|less|jpg|png|gif)/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10]:[ext]',
                    outputPath: 'media'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    devServer: {
        // contentBase: resolve(__dirname, 'build'),
        static: { directory: resolve(__dirname, 'build')},
        compress: true,
        port: 3000,
        open: true,
        hot: true,    // 开启 HMR
    },
    // 源代码到构建代码的映射 （追踪错误代码）
    // 配置 [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map
    // source-map 提示准确错误位置
    // inline-source-map 内联：只生成一个 source-map 提示准确错误位置
    // hidden-source-map 
    // 外部, 提示构建后代码错误位置
    // nosources-source-map 没有源代码信息
    // eval-source-map 每一个文件都生成 source-map ,都在eval 提示准确错误位置
    // cheap-source-map 外部
    // cheap-module-source-map 外部， 错误代码准确信息 和 源代码错误位置 ， module 会将 loader 的 source map 加入， 调试最友好！

    // ------------------ 开发环境：速度快，调试友好
    // 速度快 eval-cheap > eval > inline > cheap > ...
    // 调试友好 sourc-map > cheap-module-souce-map > cheap-souce-map

    // --> eval-source-map (调试，vue/react 脚手架默认) --> eval-cheap-module-source-map (性能)

    // ------------------ 生产环境：不用内联，减少代码体积，使用外部的方式
    // --> nosource-source-map 全部隐藏， hidden-source-map 隐藏源代码，提示构建后代码
    

    // 内联和外部的区别： 1. 外部生成文件 2.内联构建速度快
    devtool: 'eval-source-map'
}