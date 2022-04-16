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
        open: true
    }
}