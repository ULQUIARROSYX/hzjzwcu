<!--
 * @Author: ULQUIARROSYX
 * @LastEditors: ULQUIARROSYX
 * @LastEditTime: 2022-05-11 00:32:18
 * @FilePath: \front\src\components\MUpload.vue
 * @Description: 上传组件
-->
<template>
    <div>
        <!-- 上传组件 -->
        <el-upload ref="uploadCom" class="uploadComponent" action="" :http-request="onUpload" :file-list="fileList">
            <el-button type="primary">上传图片</el-button>
            <template #file="file">
                <div class="fileListItem" @click="onClickPreviewFile(file)">
                    <div class="fileName">
                        <el-icon>
                            <document />
                        </el-icon>
                        <pre>{{ file.index }}</pre>
                    </div>
                    <el-icon class="deleteIcon" @click.stop="onClickDelImg(file)">
                        <close />
                    </el-icon>
                </div>
            </template>
        </el-upload>
        <!-- 预览弹出框 -->
        <el-dialog v-model="preview.show">
            <img class="previewImg" w-full :src="preview.url" alt="Preview Image" />
        </el-dialog>
    </div>

</template>

<script setup lang="ts">
import { onMounted, PropType, reactive, ref } from 'vue';
import { upload } from '@/request/apis/common';
import { UploadFile, UploadRequestOptions } from 'element-plus';
interface File extends UploadFile {
    url: string;
}
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
    modelValue: { type: Array as PropType<string[]>, default: () => [] },
});

const uploadCom = ref(); // 上传组件实例
const fileList = ref<File[]>([]); // 文件列表

onMounted(() => {
    console.log(props.modelValue[0]);

});

/**
 * @description: 上传图片
 * @param {UploadRequestOptions} options
 */
const onUpload = (options: UploadRequestOptions) => {
    return upload(options).then(res => {
        fileList.value[fileList.value.length - 1].url = res.data.data.tmpPath;
    });
};

// 预览图片
const preview = reactive({ show: false, url: '' });

/**
 * @description: 图片预览
 * @param {File} file
 */
const onClickPreviewFile = (file: File) => {
    let url = file.url;
    preview.url = url;
    if (url.startsWith('/tmpImg')) {
        preview.url = `http://localhost/${url}`;
    }
    preview.show = true;
};

/**
 * @description: 删除图片
 * @param {File} file
 */
const onClickDelImg = (file: File) => {
    uploadCom.value.handleRemove(file);
};

</script>

<style lang="scss">
.uploadComponent {
    width: 300px;
}

.fileListItem {
    padding: 0 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .fileName {
        .el-icon {
            margin: 2px 10px 0 0;
            font-size: 1em;

        }
    }

    .deleteIcon {
        color: gray;

        &:hover {
            color: black;
            font-weight: bold;
        }
    }
}

.previewImg {
    width: 100%;
}
</style>
