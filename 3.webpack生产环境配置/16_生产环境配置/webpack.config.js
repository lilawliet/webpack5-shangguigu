const { resolve } = require("core-js/fn/promise");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'production';

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
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
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
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                // 优先执行
                enforce: 'pre',
                options: {
                    fix: true
                }
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

                    ]
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
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
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
    mode: 'production'
}