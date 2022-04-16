const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'production';

/**
 *  树摇 tree shaking: 去除无用代码
 *  使用前提： 1. 必须使用 es6 2. production 环境
 * 
 *  在 package.json 中配置
 *  "sideEffects": false 所有代码没有副作用（可以进行 tree shaking)
 *  问题： css / @babel/prlyfill 会被干掉
 *  改成： "sideEffects": ["*.css"]
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
            // {    // 已过时
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: 'eslint-loader',
            //     // 优先执行
            //     enforce: 'pre',
            //     // options: {
            //     //     fix: true
            //     // }
            // },
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
        })
    ],
    mode: 'production',
    devtool: 'source-map'
}