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
    },
    devServer: {
        // 运行代码的目录
        contentBase: resolve(__dirname, 'build'),
        // 监视目录文件，一旦变化会重载
        watchContentBase: true,
        watchOptions: {
            ignored: /node_modules/,

        },
        // 启动 gzip 压缩
        compress: true,
        port: 5000,
        host: 'localhost',
        open: true,
        hot: true,
        clientLogLevel: 'none',  // 日志等级
        quiet: true,  // 静默模式
        overlay: false,  // 出错不全屏提示
        // 服务器代理
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: {
                    '^/api': ''
                },
            }
        }
    }
}