<template>
	<div class="home">
		<home-nav-bar/>
		<div class="banner">
			<img src="@/assets/img/home/banner.webp" alt="">
		</div>
		<home-position/>
	</div>
</template>

<script setup>
import HomeNavBar from "@/views/home/home-componets/homeNavBar.vue";
import HomePosition from "@/views/home/home-componets/homePosition.vue";
</script>

<style lang="less" scoped>
.banner{
	img{
		width: 100%;
	}
}
</style>