<template>
	<div class="searchPosition">
		<div class="location">
			<div class="city" @click="currentCity">娄底</div>
			<div class="position">
				<span class="text">我的位置</span>
				<img src="@/assets/img/home/icon_location.png" alt="">
			</div>
		</div>
	</div>
</template>

<script setup>
import router from "@/router";

function currentCity(){
	router.push('/city')
}

</script>

<style lang="less" scoped>
.location{
	display: flex;
	align-items: center;
	height: 44px;
	padding: 0 20px;
	.city{
		flex: 1;
	}
	.position{
		display: flex;
		width: 74px;
		align-items: center;
		.text{
			position: relative;
			top: 2px;
			font-size: 12px;
		}
		img{
			margin-left: 5px;
			width: 18px;
			height: 18px;
		}
	}
}
</style>