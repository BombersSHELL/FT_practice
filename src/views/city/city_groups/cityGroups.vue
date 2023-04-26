<template>
    <div class="city-group">
			<van-index-bar :index-list="alphabet">
	<!--		热门城市			-->
				<van-index-anchor index="热门"/>
				<div class="popularCities">
						<template v-for="(city,index) in groupData.hotCities">
								<div class="city" @click="clickCity(city)">{{city.cityName}}</div>
						</template>
				</div>
	<!--		城市列表		-->
				<template v-for="(value,key,index) in groupData?.cities">
					<van-index-anchor :index="value.group"/>
<!--				{cityGroup --- hotciies & cities }		-->
					<template v-for="(city,key,index) in value.cities">
						<van-cell :title="city.cityName" @click="clickCity(city)"/>
					</template>
			</template>
    	</van-index-bar>
		</div>
</template>

<script setup>
import {computed} from "vue";
import useCityStore from "@/stores/modules/city_store";
import {storeToRefs} from "pinia";
import {useRouter} from "vue-router";
// 接收来自cities的数据
const props = defineProps({
	groupData:{
		type:Object,
		default:()=>({})
	}
})

// 边栏字母修正
const alphabet = computed(()=>{
	const list = props.groupData.cities.map(item=> item.group)
	list.unshift("#")
	return list
})

// 城市回滚 1. 获得当前点击对象
const router = useRouter()
const cityStore = useCityStore()
// const {currentCity} = storeToRefs(cityStore.currentCity)
const clickCity = (city)=>{
	cityStore.currentCity = city
	console.log(city)
	router.back()
}
</script>

<style lang="less" scoped>
:deep(.van-index-anchor--sticky){
	color: #ff9854;
}
:deep(.van-index-bar__index--active ){
	color: #ff9854;
}
.city-group{
	.popularCities{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 10px;
		.city{
			width: 70px;
			height: 28px;
			border-radius: 14px;
			font-size: 12px;
			background-color: #fff4ec;
			text-align: center;
			line-height: 28px;
			margin: 5px 5px;
		}
	}
}
</style>