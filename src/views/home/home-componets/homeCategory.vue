<template>
		<div class="categories">
			
				<template v-for="(item,index) in categories" :key="item.id">
<!--div应该在template里，否则，aCategories的属性会覆盖上级categories的属性-->
					<div class="aCategory">
						<img :src="item.pictureUrl">
						<div class="text">{{item.title}}</div>
					</div>
				</template>
		</div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home_store";
import {storeToRefs} from "pinia";

const homeStore = useHomeStore()
const {categories} = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.categories{
	display: flex;
	margin-top: 15px;
	padding: 0 10px;
	height: 80px;
	overflow-x: auto;
	.aCategory{
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 70px;
		text-align: center;
		img{
			width: 32px;
			height: 32px;
		}
		.text{
			font-size: 12px;
			margin-top: 8px;
		}
	}
}

</style>