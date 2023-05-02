<script setup>

import {computed, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {fetchDetailData} from "@/services";
import DetailSwiper from "@/views/detail/detailComponets/detailSwiper.vue";

const router = useRouter()
const route = useRoute()
const houseId = route.params.id
const detailData = ref({})
fetchDetailData(houseId).then(res=>{
	console.log(res.data)
	detailData.value = res.data
	console.log("asdaasd",detailData.value)
})
setTimeout(()=>{console.log('~~~~~~~',detailData.value)}, 5000)
const mainPart = computed(()=>detailData.value.mainPart)


const onClickLeft = ()=>{
	router.back()
}
</script>

<template>
	<div class="detail topPage">
		<van-nav-bar
			title="Title"
			left-text="Back"
			left-arrow
			@click-left="onClickLeft"
		/>
		<detail-swiper :swipe-data="mainPart.topModule.housePicture.housePics"/>
	</div>
</template>

<style scoped lang="less">

</style>