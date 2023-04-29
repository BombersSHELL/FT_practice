<template>
	<div class="home">
		<home-nav-bar/>
		<div class="banner">
			<img src="@/assets/img/home/banner.webp" alt="">
		</div>
		<home-position/>
		<home-category/>
		<div class="homeSearchBar" v-if="isShowBar">
			<home-search-bar/>
		</div>
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
import {ref, watch} from "vue";
import HomeSearchBar from "@/components/homeSearchBar/homeSearchBar.vue";

const homeStore = useHomeStore()
homeStore.fetchSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouseListData()

const {isReachBottom, scrollTop} = useScroll()
console.log(isReachBottom)
watch(isReachBottom, (newValue)=>{
	if (newValue){
		homeStore.fetchHouseListData().then(()=>{
			console.log("**********")
		isReachBottom.value =false
	})
	}
}
)
// useScroll(()=>{
// 	homeStore.fetchHouseListData()
// })

const isShowBar = ref(false)

watch(scrollTop, (newValue)=>{
	isShowBar.value = newValue>350
})


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
.homeSearchBar{
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	z-index: 9;
	padding: 16px 16px 10px ;
	background-color: #fff;
}
</style>