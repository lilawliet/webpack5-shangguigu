/*
	loader: install / 配置
	plugins: install / 引入 / 使用
*/


const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const addAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'built.js',
		path: resolve(__dirname, 'build')
	},
	module: {
		rules: [

		]
	},
	plugins: [
		// 功能： 默认创建一个空的 HTML, 引入打包输出的所有资源
		new HtmlWebpackPlugin({
			// 自动引入 ./src/index.html, 不创建
			template: './src/index.html'
		}),
		// 告诉 webpack 哪些库不参与打包，同时使用时名称也得变
		new webpack.DllReferencePlugin({
			manifest: resolve(__dirname, 'dll/manifest.json')
		}),
		// 将某个文件打包输出， 并在html中自动引入该资源
		new addAssetHtmlWebpackPlugin({
			filepath: resolve(__dirname, 'dll/jquery.js')
		})
	],
	mode: 'production'
}