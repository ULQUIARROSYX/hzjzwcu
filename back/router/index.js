/*
 * @Author: ULQUIARROSYX
 * @LastEditors: ULQUIARROSYX
 * @LastEditTime: 2022-05-08 23:31:41
 * @FilePath: \back\router\index.js
 * @Description:
 */
const Router = require('koa-router');
const router = new Router({ prefix: '/api' });
const common = require('./common.js');
const record = require('./record.js');
router.use('/common', common.routes());
router.use('/record', record.routes());
module.exports = router;
