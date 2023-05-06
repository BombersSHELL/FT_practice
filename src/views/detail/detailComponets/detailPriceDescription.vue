<script setup>
const props = defineProps({
    descriptionData:{
        type:Object,
        default:()=>{}
    }
})
</script>

<template>
<div class="description">
    <h2 class="title">{{descriptionData.title}}</h2>
    <div class="content">{{descriptionData.introduction}}</div>
</div>
</template>

<style scoped lang="less">
.description{
    padding: 16px 12px;
    border-top: 5px solid #f2f3f4;
    .title{
        font-size: 14px;
        color: #000;
        font-weight: 700;
    }
    .content{
        margin-top: 10px;
        font-size: 12px;
        line-height: 1.5;
        color: #666;
    }
}
</style>