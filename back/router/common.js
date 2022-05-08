/*
 * @Author: ULQUIARROSYX
 * @LastEditors: ULQUIARROSYX
 * @LastEditTime: 2022-05-09 00:05:50
 * @FilePath: \back\router\common.js
 * @Description:通用功能
 */
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const Router = require('koa-router');
const router = new Router();

// 添加记录
router.post('/upload', async (ctx) => {
    const file = ctx.request.files.file;
    const filePath = file.path;
    const fileName = `${filePath.split('\\').reverse()[0]}.${mime.getExtension(file.type)}`;
    const tmpPath = path.resolve(__dirname, `../tmpImg/${fileName}`);
    fs.copyFileSync(filePath, tmpPath);
    fs.unlinkSync(filePath);
    ctx.body = {
        code: 200,
        data: {
            tmpPath: `tmpImg/${fileName}`,
        },
    };
});

module.exports = router;
