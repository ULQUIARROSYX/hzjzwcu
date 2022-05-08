<!--
 * @Author: ULQUIARROSYX
 * @LastEditors: ULQUIARROSYX
 * @LastEditTime: 2022-05-08 23:30:25
 * @FilePath: \front\src\components\MUpload.vue
 * @Description: 上传组件
-->
<template>
    <div>
        <!-- 上传组件 -->
        <el-upload ref="uploadCom" class="uploadComponent" action="" :http-request="onUpload" :on-change="handleChange"
            :file-list="fileList">
            <el-button type="primary">Click to upload</el-button>
            <template #file="{ file }">
                <div class="fileListItem" @click="onClickPreviewFile(file)">
                    <div class="fileName">
                        <el-icon>
                            <document />
                        </el-icon>
                        <span>{{ file.name.slice(0, 15) }}</span>
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
import { reactive, ref } from 'vue';
import { upload } from '@/request/apis/common';

const uploadCom = ref();
const preview = reactive({ show: false, url: '' });

const fileList = ref([
    {
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
    {
        name: 'food2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
]);

const handleChange = (uploadFile, uploadFiles) => {
    console.log(uploadFile, uploadFiles);
};

const onClickPreviewFile = (file) => {
    console.log(file);
    preview.url = file.url!;
    preview.show = true;
};

const onClickDelImg = (file) => {
    console.log('删除', file.name);
    console.log(uploadCom.value);
    uploadCom.value.handleRemove(file);
    console.log(fileList.value);

};

const onUpload = (options) => {
    return upload(options);
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
