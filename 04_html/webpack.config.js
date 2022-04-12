/*
	loader: install / 配置
	plugins: install / 引入 / 使用
*/


const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
		})
	],
	mode: 'development'
}