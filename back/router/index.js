/*
 * @Author: ULQUIARROSYX
 * @LastEditors: ULQUIARROSYX
 * @LastEditTime: 2022-04-29 01:09:06
 * @FilePath: \back\router\index.js
 * @Description:
 */
const Router = require('koa-router');
const router = new Router({ prefix: '/api' });
const record = require('./record.js');
router.use('/record', record.routes());
module.exports = router;
