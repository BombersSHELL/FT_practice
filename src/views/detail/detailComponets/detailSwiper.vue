<script setup>
const props = defineProps({
    swipeData:{
        type:Array,
        default:()=>{}
    }
})
console.log(props.swipeData)
</script>

<template>
  <div class="swiper">
	  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in swipeData" :key="index">
            <img :src="item.url" alt="">
        </van-swipe-item>
    </van-swipe>
  </div>
</template>

<style scoped lang="less">

</style>