/*
 * @Author: ULQUIARROSYX
 * @LastEditors: ULQUIARROSYX
 * @LastEditTime: 2022-05-06 22:18:10
 * @FilePath: \back\router\record.js
 * @Description:首页记录相关的api
 */
const Router = require('koa-router');
const router = new Router();
const Record = require('../models/record');

// 添加记录
router.post('/addRecord', async (ctx) => {
    console.log('/addRecord');
    const newRecord = new Record({
        name: 'ghj',
        price: '123123',
    });

    // 存到数据库
    await newRecord.save();
    ctx.body = {
        code: 200,
        data: newRecord,
    };
});

// 获取记录列表
router.get('/getRecord', async (ctx) => {
    const data = await Record.find();
    ctx.body = {
        code: 200,
        data: data,
    };
});

module.exports = router;
