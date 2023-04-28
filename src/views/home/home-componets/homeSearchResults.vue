<template>
	<div class="search-results">
		<h2>{{$route.query.startDate}}</h2>
		<h2>{{$route.query.endDate}}</h2>
		<h2>{{currentCity.cityName}}</h2>
	</div>
</template>

<script setup>
import useCityStore from "@/stores/modules/city_store";
import {storeToRefs} from "pinia";
const cityStore = useCityStore()
const {currentCity} = storeToRefs(cityStore)
</script>

<style lang="less" scoped>

</style>