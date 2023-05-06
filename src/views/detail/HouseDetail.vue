<script setup>

import {computed, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {fetchDetailData} from "@/services";
import DetailSwiper from "@/views/detail/detailComponets/detailSwiper.vue";
import DetailTile from "@/views/detail/detailComponets/detailTile.vue";
import DetailFacility from "@/views/detail/detailComponets/detailFacility.vue";
import DetailHouseLord from "@/views/detail/detailComponets/detailHouseLord.vue";
import DetailComments from "@/views/detail/detailComponets/detailComments.vue";

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
		<div class="main" v-if="mainPart">
			<detail-swiper :swipe-data="mainPart.topModule.housePicture.housePics"/>
			<detail-tile :titleData="mainPart.topModule"/>
			<detail-facility :facilities="mainPart.dynamicModule.facilityModule.houseFacility"></detail-facility>
			<detail-house-lord :lord-info="mainPart.dynamicModule.landlordModule"/>
			<detail-comments :comments-data="mainPart.dynamicModule.commentModule"/>
		</div>
	</div>
</template>

<style scoped lang="less">

</style>