/*
 * @Author: ULQUIARROSYX
 * @LastEditors: ULQUIARROSYX
 * @LastEditTime: 2022-04-29 00:10:28
 * @FilePath: \back\index.js
 * @Description:
 */
const Koa = require('koa');
const koaBody = require('koa-body');
const router = require('./router/index');

// 连接数据库
const DB = require('./models/db');
new DB();

// 创建实例和路由
const app = new Koa();
app.use(koaBody({ multipart: true }));
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('app listen: http://localhost:3000');
});
