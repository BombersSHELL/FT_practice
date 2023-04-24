<template>
    <van-index-bar class="city_groups">
			<template v-for="(value,key,index) in groupData?.cities">
<!--				{cityGroup --- hotciies & cities }		-->
				<van-index-anchor :index="value.group"/>
				<template v-for="(city,key,index) in value.cities">
					<van-cell :title="city.cityName"/>
				</template>
			</template>
    </van-index-bar>
</template>

<script setup>
const props = defineProps({
	groupData:{
		type:Object,
		default:()=>({})
	}
})
</script>

<style lang="less" scoped>
:deep(.van-index-anchor--sticky){
	color: #ff9854;
}
:deep(.van-index-bar__index--active ){
	color: #ff9854;
}
</style>