<!--
 * @Author: ULQUIARROSYX
 * @LastEditors: ULQUIARROSYX
 * @LastEditTime: 2022-05-04 01:28:07
 * @FilePath: \front\src\components\MTest.vue
 * @Description: 测试
-->
<template>
    <div>
        <h1 id="h1" style="height: 50px;">noDisplay</h1>
        <h1>checkbox</h1>
        <form>
            <input id="i1" type="text" placeholder="输入内容">
            <br>
            <br>
            <label for="c1">checkbox1</label>
            <input id="c1" v-model="c1" type="checkbox" name="c1">
            <br>
            <br>
        </form>
        <button id="b1" :disabled="false" @click="showTitle">box_div</button>
        <p v-if="boxShow" id="box_title">box_title_show_now!!</p>
        <div id="mask"></div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let boxShow = ref(false);
let c1 = ref(true);
const showTitle = () => {
    setTimeout(() => {
        boxShow.value = true;
    }, 0);
};
</script>

<style scoped>
#box {
    opacity: 0.4;

}

#b1 {
    /* visibility: hidden; */
}

#mask {
    /* position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 1);
    top: 0;
    left: 0 */
}
</style>
