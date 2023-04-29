<template>
	<router-view/>
<!--	<tab-bar v-if=" !route.meta.hideFooter "/>-->
	<tab-bar v-if="!route.meta.hideFooter"/>
	<loading></loading>
</template>

<script setup>
import TabBar from "@/components/TabBar/TabBar.vue";
import {useRoute} from "vue-router";
import Loading from "@/components/appLoading/loading.vue";
const route = useRoute();
console.log(route.meta)
</script>

<style scoped>
</style>
