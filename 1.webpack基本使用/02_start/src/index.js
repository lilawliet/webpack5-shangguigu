/*
	index.js: webpack 入口起点文件

	1. 运行指令: 
		// webpack 会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js
		开发环境： webpack ./src/index.js -o ./build/built.js --mode=development
		开发环境： webpack ./src/index.js -o ./build/built.js --mode=production
		// 将 ES6 编译成浏览器能识别的模块化
*/

/*
	会报错
	1. webpack 不能处理 css/img 等其他资源
	import './index.css';
*/


import data from './data.json';
console.log(data);

function add(x, y) {
	return x + y;
}

console.log(add(1, 2));