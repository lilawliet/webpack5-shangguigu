const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkBoxWebpackPlugin = require('workbox-webpack-plugin');

process.env.NODE_ENV = 'production';

/**
 * PWA: 渐进式网络开发应用程序（离线可访问）
 * workbox -> workbox-webpack-plugin
 */


const commonCssLoader  = [
    // 可以将 css 提前成单独文件
    MiniCssExtractPlugin.loader,
    'css-loader',
    // 自动兼容性处理
    'postcss-loader',
]

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.[contenthash:10].js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                // 使以下 loader 只会匹配一个
                // 注：不能有两个 loader 处理同一种类型文件
                oneOf: [    
                    {
                        test: /\.css$/,
                        use: [...commonCssLoader]
                    },
                    {
                        test: /\.less$/,
                        use: [
                            ...commonCssLoader,
                            'less-loader'
                        ] 
                    },
                    {   // 兼容性处理
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: [
                            // 开启多进程打包
                            // 进程开启需要时间大概 600ms, 进程通信也要开销
                            // 只有工作消耗时间较长才需要多进程打包
                            // 'thread-loader', // 不用参数的写法
                            {
                                loader: 'thread-loader',
                                options: {
                                    workers: 2 
                                }
                            },
                            {
                                loader: 'babel-loader',
                                options: {
                                    presets: [
                                        ['@babel/preset-env',
                                        {
                                            useBuiltIns: 'usage',
                                            corejs: {version:3},
                                            targets: {
                                                chrome: '60',
                                                firefox: '60'
                                            }
                                        }]
                
                                    ],
                                    // 开启 babel 缓存
                                    // 第二次构建时，会读取之前的缓存
                                    cacheDirectory: true
                                }
                            }
                        ],
                    },
                    {
                        test: /\.(jpg|png|gif)/,
                        loader: 'url-loader',
                        options: {
                            limit: 8 * 1024,
                            name: '[hash:10].[ext]',
                            outputPath: 'imgs',
                            esModule: false
                        }
                    },
                    {
                        test: /\.html$/,
                        loader: 'html-loader'
                    },
                    {
                        exclude: /\.(js|css|less|html|jpg|png|gif)/,
                        loader: 'file-loader',
                        options: {
                            outputPath: 'media'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/built.[contenthash:10].css'
        }),
        // 压缩资源
        new optimizeCssAssetsWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true

            }
        }),
        new WorkBoxWebpackPlugin.GenerateSW({
            /**
             * 1. 帮助 serviceworker 快速启动
             * 2. 删除旧的 serviceworker
             * 
             * 生成一个 serviceworker 配置文件
             */
            clientsClaim: true,
            skipWaiting: true
        })
    ],
    mode: 'production',
    devtool: 'source-map'
}