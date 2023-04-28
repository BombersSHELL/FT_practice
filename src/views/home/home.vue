<template>
	<div class="home">
		<home-nav-bar/>
		<div class="banner">
			<img src="@/assets/img/home/banner.webp" alt="">
		</div>
		<home-position/>
		<home-category/>
		<home-house-list/>
<!--		<button @click="getMore">Give me</button>-->
	</div>
</template>

<script setup>
import HomeNavBar from "@/views/home/home-componets/homeNavBar.vue";
import HomePosition from "@/views/home/home-componets/homePosition.vue";
import useHomeStore from "@/stores/modules/home_store";
import HomeCategory from "@/views/home/home-componets/homeCategory.vue";
import HomeHouseList from "@/views/home/home-componets/homeHouseList.vue";
import useScroll from "@/hooks/scrollHooker";
import {watch} from "vue";

const homeStore = useHomeStore()
homeStore.fetchSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouseListData()

const isReachBottom = useScroll()
watch(isReachBottom, (newValue)=>{
	if (newValue){
		homeStore.fetchHouseListData().then(()=>{
		isReachBottom.value =false
	})
	}
}
)

// useScroll(()=>{
// 	homeStore.fetchHouseListData()
// })

</script>

<style lang="less" scoped>
.home{
	padding-bottom: 60px;
	background: beige;
}
.banner{
	img{
		width: 100%;
	}
}
button{
	height: 300px;
}
</style>