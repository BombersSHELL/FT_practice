<template>
	<router-view/>
<!--	<tab-bar v-if=" !route.meta.hideFooter "/>-->
	<tab-bar/>
</template>

<script setup>
import TabBar from "@/components/TabBar/TabBar.vue";
import {useRouter} from "vue-router";
const route = useRouter();
</script>

<style scoped>
</style>
