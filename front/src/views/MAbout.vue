<!--
 * @Author: ULQUIARROSYX
 * @LastEditors: ULQUIARROSYX
 * @LastEditTime: 2022-05-11 00:30:46
 * @FilePath: \front\src\views\MAbout.vue
 * @Description:表单页面
-->
<template>
    <div style="max-width: 500px">
        <pre>
            <code>
                {
                    "_id": "001",
                    "title": "标题1",
                    "tags": [ "tag1", "tag2" ],
                    "time": "2022-04-18T16:02:10.739Z",
                    "imgs": ["img1", "img2" ],
                    "links": [ "https://www.baidu.com", "https://www.baidu.com" ],
                    "marks": "asdasd",
                }
            </code>
    </pre>

        <h1>上传表单</h1>
        <el-form :model="form" label-width="120px">
            <el-form-item label="标题">
                <el-input v-model="form.title" placeholder="请输入标题" />
            </el-form-item>
            <el-form-item label="标签">
                <m-tag v-model="form.tags"></m-tag>
            </el-form-item>
            <el-form-item label="图片">
                <m-upload v-model="form.imgs"></m-upload>
            </el-form-item>
        </el-form>
        <m-test></m-test>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import MTag from '@/components/MTag.vue';
import MUpload from '@/components/MUpload.vue';
import MTest from '@/components/MTest.vue';

interface formType {
    title: string,
    tags: string[],
    date: Date,
    imgs: string[],
    links: string[],
    marks: string,
}
let form = reactive<formType>({
    title: '',
    tags: ['平权'],
    date: new Date(),
    imgs: ['http://localhost/tmpImg/upload_f2948fdd609839f97ece40017f6537bc.jpeg', 'http://localhost/tmpImg/upload_f2948fdd609839f97ece40017f6537bc.jpeg'],
    links: ['https://www.baidu.com', 'https://www.baidu.com'],
    marks: 'asdasd',

});
</script>

<style lang="scss" scoped>
</style>
