const mongoose = require('mongoose');
const connectionStr = 'mongodb://localhost:27017/hzjzwcu';

module.exports = class DB {
    constructor() {
        mongoose.connect(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
            if (err) {
                console.log('数据库连接失败', err);
            } else {
                console.log('数据库连接成功');
            }
        });
    }
};
