/*
 * @Author: ULQUIARROSYX
 * @LastEditors: ULQUIARROSYX
 * @LastEditTime: 2022-05-06 23:19:34
 * @FilePath: \front\src\main.ts
 * @Description:
 */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);

import * as Icons from '@element-plus/icons-vue';
Object.keys(Icons).forEach(icon => {
    app.component(icon, Icons[icon]);
});

app.use(ElementPlus);
app.use(router);
app.mount('#app');
