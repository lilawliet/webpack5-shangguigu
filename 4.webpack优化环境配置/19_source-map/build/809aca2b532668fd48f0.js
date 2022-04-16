

console.log('abc')();
// 末尾
if (module.hot) {
    // 说明开启 HMR
    module.hot.accept('./other.js', function() {
        // 只会监听 other.js 的变化并重新打包该模块
    })
}