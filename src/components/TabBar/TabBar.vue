<template>
	<div class="tab-bar">
		<van-tabbar v-model="currentIndex" active-color="#ff9854">
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
import {ref} from "vue";

const currentIndex = ref(0);

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