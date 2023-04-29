<template>
	<div class="tab-bar">
		<van-tabbar v-model="currentIndex" active-color="#ff9854" route>
		  <template v-for="(item,index) in tabBarData" :key="index">
			  <van-tabbar-item :to="item.path">
				  <span>{{item.text}}</span>
				  <template #icon>
					  <img v-if="currentIndex !== index" :src="setURL(item.image)" alt="">
					  <img v-else :src="setURL(item.imageActive)" alt="">
				  </template>
		    </van-tabbar-item>
		  </template>
		</van-tabbar>
	</div>
</template>

<script setup>
import tabBarData from "@/assets/data/tabBarData";
import {setURL} from "@/utils/setURL";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()
const currentIndex = ref(0);
watch(route,(newRoute)=>{
	const index = tabBarData.findIndex(item => item.path === newRoute.path)
	console.log(index)
	currentIndex.value = index
})

</script>

<style lang="less" scoped>
.tab-bar{
	position: fixed;
	bottom:0;
	left: 0;
	right: 0;
	height: 50px;
	display: flex;
	border-top: 1px solid #f3f3f3;
	img{
		height: 26px;
	}
	:deep(.van-tabbar-item_icon){
		font-size: 50px;
	}
}
</style>