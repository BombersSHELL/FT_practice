<template>
	<div class="searchBar">
		<div class="dateNode">
				<div class="item start">
					<div class="name">住</div>
					<div class="date">{{ startDateStr }}</div>
				</div>
				<div class="item end">
					<div class="name">离</div>
					<div class="date">{{ endDateStr }}</div>
				</div>
			</div>
		<div class="content">
				<div class="keyWord">关键字/位置/民宿</div>
			</div>
		<div class="right">
				<i class="icon-search"></i>
			</div>
	</div>
</template>

<script setup>
import useMainStore from "@/stores/modules/mian_store";
import {storeToRefs} from "pinia";
import {formatMonthDay} from "@/utils/format_date";
import {ref} from "vue";
const mianStore = useMainStore()
// pinia提供日期数据，供两个组件一起使用
const {nowDate, tmoDate} = storeToRefs(mianStore)
const startDateStr = ref(formatMonthDay(nowDate.value,'MM.DD'))
const endDateStr = ref(formatMonthDay(tmoDate.value, 'MM.DD'))

</script>

<style lang="less" scoped>
.searchBar{
	display: flex;
	flex-direction: row;
	align-items: center;
	background: #f2f4f6;
	height: 45px;
	line-height: 45px;
	color: #999;
	border-radius: 6px;
	padding: 0 10px;
	font-size: 14px;
	.dateNode{
		display: flex;
		flex-direction: column;
		.item{
			display: flex;
			flex-direction: row;
			align-items: center;
			line-height: normal;
			.name{
				font-size: 13px;
			}
			.date{
				font-weight: 500;
				color: #333;
				margin: 0 10px 0 3px;
			}
		}
		.end .date::after{
			content: '';
			width: 0;
			height: 0;
			border: 4px solid #666;
			border-radius: 3px;
      border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666;
			transform: rotate(45deg);
			-webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
			position: absolute;
			bottom: 10px;
		}
	}
	.content{
		display: flex;
		flex:1;
		//background-color: #fa8c1d;
	}
	.icon-search{
		width: 24px;
		height: 24px;
		display: inline-block;
		background-image: url("src/assets/img/home/home-sprite.png");
		background-position: -30px -153px;
		background-size: 207px 192px;
		margin-top: 16px;
	}
}
</style>