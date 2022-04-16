console.log('index.js 被加载了');

document.getElementById('id').onclick = function() {
    // 懒加载
    // webpackChunkName 打包的名字
    // webpackPrefetch 预加载
    // 预加载： 必要资源加载完毕后，空闲时间自动加载
    // 问题： 兼容性差
    import(/* webpackChunkName: 'test', webpackPrefetch:true */'./test').then(({mul}) => {
        console.log(mul(4,5));
    })
}