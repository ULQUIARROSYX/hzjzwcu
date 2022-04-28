/*
 * @Author: ULQUIARROSYX
 * @LastEditors: ULQUIARROSYX
 * @LastEditTime: 2022-04-28 23:28:03
 * @FilePath: \back\models\record.js
 * @Description:
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const recordShema = new Schema({
    name: { type: String, require: true },
    price: { type: String, require: true },
    date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('record', recordShema);
