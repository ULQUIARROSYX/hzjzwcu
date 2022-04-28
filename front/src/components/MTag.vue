<template>
    <div>
        <el-tag v-for="(tag, i) in props.modelValue" :key="tag" class="m-tag" closable :disable-transitions="false"
            @close="handleClose(i)">
            {{ tag }}
        </el-tag>
        <el-input v-if="inputVisible" ref="InputRef" v-model="inputValue" class="m-tag-input" size="small"
            @keyup.enter="handleInputConfirm" @blur="handleInputConfirm" />
        <el-button v-else class="button-new-tag ml-1" size="small" @click="showInput"> + New Tag </el-button>
    </div>
</template>

<script lang="ts" setup>
import { nextTick, ref, PropType } from 'vue';
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
    modelValue: { type: Array as PropType<string[]>, default: () => [] },
});

const inputVisible = ref(false);
const InputRef = ref();
const inputValue = ref('');

// 显示输入框并聚焦
const showInput = () => {
    inputVisible.value = true;
    nextTick(() => InputRef.value!.input!.focus());
};

// 输入完成
const handleInputConfirm = () => {
    const value = inputValue.value.trim();
    if (value) {
        const newTagsSet = [...new Set([...props.modelValue, value])];
        emit('update:modelValue', newTagsSet);
    }
    inputVisible.value = false;
    inputValue.value = '';
};

// 删除标签
/**
 * @description: 左右
 * @param {*} i
 * @return {*}
 */
const handleClose = (i: number) => {
    const newTags = [...props.modelValue.slice(0, i), ...props.modelValue.slice(i + 1)];
    emit('update:modelValue', newTags);
};
</script>
<style>
.m-tag {
    margin-right: 10px;
}

.m-tag-input {
    width: 8em;
}
</style>
