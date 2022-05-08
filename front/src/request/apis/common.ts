/*
 * @Author: ULQUIARROSYX
 * @LastEditors: ULQUIARROSYX
 * @LastEditTime: 2022-05-08 23:42:40
 * @FilePath: \front\src\request\apis\common.ts
 * @Description: 通用api
 */
// 导入axios实例
import axios from '../index';

// 新增一条记录
export function upload({ file }) {
    const formData = new FormData();
    formData.append('file', file);

    return axios({
        url: '/common/upload',
        method: 'POST',
        data: formData,
    });
}
