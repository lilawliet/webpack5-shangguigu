/*	
	webpack 配置文件
	基于 nodejs, 模块化默认采用 commonjs
*/

// 使用 resolve 来拼接绝对路径
const { resolve } = require('path');

module.exports = {
	// webpack 配置
	// 入口起点
	entry: './src/index.js',
	// 输出
	output: {
		// 输出文件名
		filename: 'built.js',
		// 输出路径，通常使用绝对路径
		// __dirname nodejs 的变量，代表当前文件的目录绝对路径
		path: resolve(__dirname, 'build')
	},
	// loader 配置
	module: {
		rules: [
			// 详细 loader 配置
			{
				// 正则匹配
				test: /\.css$/,
				// 使用的loader
				use: [	// use 中的loader是尾部到头部的顺序处理的
					// 创建 style 标签，将 JS 中的样式资源插入，添加到页面 head 中
					'style-loader', 
					// 将 css 文件变成 commonjs 模块加载到 js 中， 里面内容是样式字符串
					'css-loader',
				]

			},
			{
				test: /\.less$/,
				use: [
					'style-loader', 
					'css-loader',
					// 将 less 编译成 css
					'less-loader'
				]

			}
		]
	},
	// plugins 配置
	plugins: [
		// 详细 plugins 配置
	],
	mode: 'development',
	// mode: 'production'
}