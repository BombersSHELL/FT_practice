<template>
	<div class="city">
<!-- 标签栏 -->
		<div class="top">
			<van-search
	    placeholder="城市/区域/位置"
	    show-action
	    shape="round"
	    clearable
	    @cancel=" returnHomePage "
		/>
			<van-tabs v-model:active="activeName"
		          color="#ff9854"
		>
		  <template v-for="(value, key, index) in allCities" :key="key">
				<van-tab :title="value.title" :name="key"></van-tab>
			</template>
		</van-tabs>
		</div>
<!-- 城市检索栏 -->
		<div class="content">
<!--			性能优化////一次加载两个组件，通过条件判断v-show是否显示，注意此时只需要传入value即可-->
			<template v-for="(value,key,index) in allCities" :key="key">
				<city-groups v-show="activeName === key" :group-data="value"/>
			</template>
		</div>
	</div>
</template>

<script setup>
import {useRouter} from "vue-router";
import {computed, ref} from "vue";
import useCityStore from "@/stores/modules/city_store"
import {storeToRefs} from "pinia";
import CityGroups from "@/views/city/city_groups/cityGroups.vue";


const router = useRouter()
function returnHomePage() {
	router.back()
}

const activeName = ref('');
// 通过pinia传递数据
const cityStore = useCityStore()
cityStore.fetchCitiesData()
const {allCities} = storeToRefs(cityStore)
console.log(allCities)
// 使v-moduel里active值，通过绑定name为allcities里的key，改写获得当前cities
const currentCities = computed(()=> allCities.value[activeName.value])
console.log(currentCities)
</script>

<style lang="less" scoped>
.city{
	position: relative;
	z-index: 9;
	height: 100vh;
	background-color: #fff;
	overflow-y: auto;
	.top{
		position: relative;
		z-index: 9;
	}
	.content{
		height: calc(100vh - 98px);
		overflow-y: auto;
	}
}
</style>