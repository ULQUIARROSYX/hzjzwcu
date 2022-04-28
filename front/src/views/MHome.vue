<!--
 * @Author: ULQUIARROSYX
 * @LastEditors: ULQUIARROSYX
 * @LastEditTime: 2022-04-29 01:23:35
 * @FilePath: \front\src\views\MHome.vue
 * @Description:列表页
-->
<template>
    <div>
        <el-button @click="addRecord">add record</el-button>
        <el-button @click="onClickGetRecord">get record</el-button>
        <h1>Record List</h1>
        <ul>
            <li v-for="(record, i) in recordList" :key="i">
                {{ record }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getRecord, addRecord } from '@/request/apis/record';

let recordList = ref([]);
const onClickGetRecord = async () => {
    let data = await getRecord({ keyWords: ['key'] });
    recordList.value = data.data.data;
};

onMounted(async () => {
    onClickGetRecord();
});
</script>

<style lang="scss" scoped>
</style>
