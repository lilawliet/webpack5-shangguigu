function sum(...args) {
    return args.reduce((p, c) => p + c, 0);
};

/**
 * 通过 js 代码，让某个文件被单独打包成一个 chunk
 */
import(/* webpackChunkName: 'test'*/'./test').then((mul, count) => {
    console.log( mul(2,3));

    console.log('文件加载成功');
}).catch(() => {
    console.log('文件加载失败');
})

console.log(sum(1, 2, 3, 4));
