<template>
	<div class="searchPosition">
		<div class="location">
			<div class="city" @click="changeCity">{{ homeCurrentCity }}</div>
			<div class="position">
				<span class="text">我的位置</span>
				<img src="@/assets/img/home/icon_location.png" alt="" @click="getPosition">
			</div>
		</div>
<!--		日期区域		-->
		<div class="dateSection" @click="showCalender=true">
			<div class="start">
				<div class="date">
					<span class="tip">入住日期</span>
					<span class="time">{{ startDate }}</span>
				</div>
			</div>
			<div class="stayCount">共{{dayCount}}晚</div>
			<div class="end">
				<div class="date">
					<span class="tip">离店日期</span>
					<span class="time">{{ endDate }}</span>
				</div>
			</div>
		</div>
		<div class="calender">
			<van-calendar v-model:show="showCalender"
										@confirm="onConfirm"
										type="range"
										color="#ff9854"
			/>
		</div>
		<div class=" dateSection">
			<div class="start">价格不限</div>
			<div class="end">人数不限</div>
		</div>
		<div class="dateSection">关键字/位置/民宿名</div>
		<div class="dateSection hot-suggests">
			<template v-for="(item,index) in hotSuggests" :key="index">
				<div class="item"
						 :style="{ color: item.tagText.color, background: item.tagText.background.color}"
				>
					{{item.tagText.text}}
				</div>
			</template>
		</div>
		<div class="location searchBox">
			<div class="btn" @click="redirect">搜索</div>
		</div>
		
		
	</div>
</template>

<script setup>
import router from "@/router";
import useCityStore from "@/stores/modules/city_store";
import {formatMonthDay, getDays} from "@/utils/format_date"
import {ref} from "vue";
import useHomeStore from "@/stores/modules/home_store";
import {storeToRefs} from "pinia";
import useMainStore from "@/stores/modules/mian_store";


const getPosition = ()=>{
	navigator.geolocation.getCurrentPosition(res=>{
		console.log(res)
		
	}),err=>{
		console.log("位置获取失败",err)
	}
}

function changeCity(){
	router.push('/city')
}

const cityStore = useCityStore()
const homeCurrentCity = cityStore.currentCity.cityName
const mainStore = useMainStore()
// const nowDate = new Date()
// const tmoDate = new Date()
const showCalender = ref(false)
// tmoDate.setDate(nowDate.getDate()+1)


// 将日期数据存入pinia，供两个组件一起使用

const {nowDate, tmoDate} = storeToRefs(mainStore)
const dayCount = ref(getDays(nowDate.value,tmoDate.value))
console.log(dayCount.value)
console.log(nowDate,tmoDate)

// 获取换日期格式
const startDate = ref(formatMonthDay(nowDate.value))
const endDate = ref(formatMonthDay(tmoDate.value))


const onConfirm = (data)=>{
	console.log(data)
	// 改变pinia里的值
	mainStore.nowDate = data[0]
	mainStore.tmoDate = data[1]
	startDate.value = formatMonthDay(data[0])
	endDate.value = formatMonthDay(data[1])
	
	
	dayCount.value = getDays(data[0], data[1])
	console.log(dayCount.value)
	showCalender.value = false
}

const homeStore = useHomeStore()
const {hotSuggests} = storeToRefs(homeStore)

const redirect = ()=>{
	router.push({
		path:'/search',
		query:{
			startDate:startDate.value,
			endDate:endDate.value
		}
	})
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

.dateSection{
	display: flex;
	padding: 0 20px;
	align-items: center;
	color: #999;
	height: 44px;
	flex-wrap: wrap;
	.start{
		flex: 1;
		display: flex;
		height: 44px;
		align-items: center;
		.date{
			display: flex;
			flex-direction: column;
			.tip{
				font-size: 12px;
				color: #999;
			}
			.time{
				margin-top: 3px;
				color: #333;
				font-size: 15px;
				font-weight: 500;
			}}
	}
	.stayCount{}
	.end{
		min-width: 30%;
		padding-left: 100px;
		.date{
			display: flex;
			flex-direction: column;
			.tip{
				font-size: 12px;
				color: #999;
			}
			.time{
				margin-top: 3px;
				color: #333;
				font-size: 15px;
				font-weight: 500;
			}
		}
	}

	}

.hot-suggests{
	height: 80px;
	.item{
		padding: 3px 5px;
		margin: 3px ;
		border-radius: 14px;
		font-size: 12px;
		line-height: 1;
	}
}

.searchBox{
	.btn{
		width: 342px;
		height: 44px;
		margin-top: 20px;
		text-align: center;
		font-size: 18px;
		line-height: 44px;
		color: #fff;
		background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
	}
}
</style>