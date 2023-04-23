<template>
	<div class="city">
		<van-search
	    placeholder="城市/区域/位置"
	    show-action
	    shape="round"
	    clearable
	    @cancel=" returnHomePage "
		/>
	</div>
</template>

<script setup>
import {useRouter} from "vue-router";
const router = useRouter()
function returnHomePage() {
	router.back()
}
</script>

<style lang="less" scoped>
.city{
	position: relative;
	z-index: 9;
	height: 100vh;
	background-color: #fff;
	overflow-y: auto;
}
</style>