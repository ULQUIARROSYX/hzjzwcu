/*
 * @Author: ULQUIARROSYX
 * @LastEditors: ULQUIARROSYX
 * @LastEditTime: 2022-04-29 01:12:04
 * @FilePath: \front\src\request\apis\record.ts
 * @Description:
 */
// 导入axios实例
import axios from '../index';

// 定义接口的传参
interface infoParam {
    keyWords: Array<String>;
}

// 获取全部记录
export function getRecord(param: infoParam) {
    return axios({
        url: '/record/getRecord',
        method: 'GET',
        params: param,
    });
}

// 新增一条记录
export function addRecord() {
    return axios({
        url: '/addRecord',
        method: 'POST',
        data: {
            a: 1,
        },
    });
}
