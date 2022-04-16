const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        // 文件名称
        filename: '[name].[contenthash:10].js',
        // 文件输出的目录（所有资源输出的公共目录）
        path: resolve(__dirname, 'build'),
        chunkFilename: 'js/[name]_chunk.[contenthash:10].js',
        clean: true
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
    optimization: {
        // !!! 将当前模块的记录其他模块的 ha是单独大包围一个文件 runtime
        runtimeChunk: {
            name: entrypoint => `runtime-${entrypoint.name}`
        },
        minimizer: [
            // 配置生产环境的压缩方案： js 和 css
            new TerserWebpackPlugin({
                // 开启缓存
                // cache: true,
                // 开启多进程打包
                parallel: true,
                // 启动source-map
                // sourceMap: true
            })
        ],
        // chunks 分开打包
        splitChunks: {
            chunks: 'all',
            // *************** 以下内容都是默认值
            // minSize: 30 * 1024,
            // maxSize: 0,
            // minChunks: 1,  // 要提取的 chunk 最少被引用1次
            // maxAsyncRequests: 5,  // 按需加载时并行加载的文件最大数量
            // maxInitialRequests: 3, // 入口 js 文件最大并行请求数量
            // automaticNameDelimiter: '~',  // 名称连接符
            // name: true,  // 可以使用命名规则
            // cacheGroups: {
            //     // 分割 chunk 的组
            //     // node_modules 文件会被打包到 vendors 组的 chunk 中， --> vendors~xxx.js
            //     // 满足上面的公共规则，如： 大小超过 30kb ，至少被引用一次
            //     vendors: {
            //         test: /[\\/]node_modules[\\/]/,
            //         // 优先级
            //         priority: -10
            //     },
            //     default: {
            //         // 要提取的 chunk 最少被引用两次
            //         minChunks: 2,
            //         // 优先级
            //         priority: -20,
            //         // 如果当前模块已被提取，则复用
            //         reuseExistingChunk: true

            //     }
            // }
            // ***************

        }
    }
}