/*
    服务器代码
    启动命令： npm i nodemon -g
    nodemon server.js 或 node server.js
*/

const express = require('express');

const app = express();

app.use(express.static('build', {maxAge: 1000 * 360}));

app.listen(3000);