/*
	loader: install / 配置
	plugins: install / 引入 / 使用
*/


const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'built.[hash:10].js',
		path: resolve(__dirname, 'build')
	},
	plugins: [
		// 功能： 默认创建一个空的 HTML, 引入打包输出的所有资源
		new HtmlWebpackPlugin({
			// 自动引入 ./src/index.html, 不创建
			template: './src/index.html'
		})
	],
	mode: 'production',
	externals: {
		// 忽略库名 -- npm 包名
		// 拒绝 jquery 被打包进来
		jquery: 'jQuery'
	}
}