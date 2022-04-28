<!--
 * @Author: ULQUIARROSYX
 * @LastEditors: ULQUIARROSYX
 * @LastEditTime: 2022-04-29 01:29:34
 * @FilePath: \front\src\App.vue
 * @Description:
-->
<template>
    <div>
        <router-link to="/">列表</router-link> |
        <router-link :to="{ path: '/about', query: { id: '111' } }"> 表单 </router-link>
        <br>
        <br>
        <br>
        <router-view></router-view>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
</style>
