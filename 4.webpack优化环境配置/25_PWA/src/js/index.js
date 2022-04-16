import '../css/index.css';
import { mul } from './test';

function sum(...args) {
    return args.reduce((p, c) => p + c, 0);
};

// eslint-disable-next-line
console.log(sum(1, 2, 3, 4));

// eslint-disable-next-line
console.log( mul(2,3));

// 注册 serviceworker
// 处理兼容性问题

/**
 * 注册 serviceworker
 * 处理兼容性问题
 * 1. 需要配置 package.json 中 eslint 配置
    "eslintConfig": {
        "extends": "airbnb-base",
        "env": {
        "browser": true     // 支持浏览器全局变量
        "node": true        // 支持node全局变量
        }
    },
    
    2. sw 需要运行在服务器上面
    --> node.js
    --> npm i serve -g
        serve -s build 启动服务器，将build目录下资源作为静态资源暴露出去
 */
// console.log(navigator)
if ('serviceWorker'  in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
        .then(() => {
            console.log('sw 注册成功');
        })
        .catch(() => {
            console.log('sw 注册失败');
        })
    })
}