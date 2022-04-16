// 全部js兼容性问题 --> @babel/polyfill, 只要引入即可
// import '@babel/polyfill';

const add = (a, b) => a + b;

// 下一行代码不用 esLint 校验
// eslint-disable-next-line
console.log(add(2, 4));

const promise = new Promise((resolve) => {
  setTimeout(() => {
    // eslint-disable-next-line
    console.log('定时器执行完毕');
    resolve();
  }, 1000);
});

// eslint-disable-next-line
console.log(promise);
