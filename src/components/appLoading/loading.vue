<template>
    <div class="loading" v-show="mainStore.isShowLoading">
        <div class="image">
            <img src="@/assets/img/home/full-screen-loading.gif" alt="">
        </div>
    </div>
</template>

<script setup>
import useMainStore from "@/stores/modules/mian_store";
const mainStore = useMainStore()
</script>

<style lang="less" scoped>
.loading{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0, .3);
    .image{
        img{
            width: 55px;
            height: 55px;
        }
    }
}
</style>