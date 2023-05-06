<script setup>
const props = defineProps({
    swipeData:{
        type:Array,
        default:()=>{}
    }
})

const swiperGroup = {}

// 思路1
// for (const item of props.swipeData){
// 	swiperGroup[item.enumPictureCategory] = []
// }
//
// for (const item of props.swipeData){
// 	const valueGroup = swiperGroup[item.enumPictureCategory]
// 	valueGroup.push(item)
// }
//
// console.log(swiperGroup)
//

// 思路2
for (const item of props.swipeData){
	let valueGroup = swiperGroup[item.enumPictureCategory]
	
	if (!valueGroup){
		valueGroup = []
		swiperGroup[item.enumPictureCategory] = valueGroup
	}
	
	valueGroup.push(item)
}

// 格式化数据
const nameReg = /【(.*?)】/i

const getName = (name) => {
	const results = nameReg.exec(name)
	return results[1]
}

// 显示图片索引
console.log(swiperGroup)
const getImgIndex = (item)=>{
	// console.log("item",item)
	const indexValue = swiperGroup[item.enumPictureCategory]
	// console.log('item',item)
	// console.log("indexValue",indexValue)
	return indexValue.findIndex(data=> data===item) + 1
}
</script>

<template>
  <div class="swiper">
	  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item class="item" v-for="(item,index) in swipeData" :key="index">
            <img :src="item.url" alt="">
        </van-swipe-item>
		  
		  <template #indicator="{active, total}">
				<div class="indicator">
					<template v-for="(item,key,index) in swiperGroup" :key="key">
						<span
								class="item"
							:class="{active: swipeData[active]?.enumPictureCategory == key}"
						>
							<span class="text" :class="{active: swipeData[active]?.enumPictureCategory == key}">{{getName(item[0].title)}}</span>
<!--							item代表当前数组，getImgIndex应传入的的是swipeData里索引值所对应的数据-->
							<span class="count" v-if="swipeData[active]?.enumPictureCategory == key">{{getImgIndex(swipeData[active])}}/{{item.length}}</span>
						</span>
					</template>
				</div>
		  </template>
    </van-swipe>
  </div>
</template>

<style scoped lang="less">
.swiper {
	.my-swipe {
		.item {
			img {
				width: 100%;
			}
		}
		.indicator{
			position:absolute;
			bottom: 5px;
			right: 5px;
			background: rgba(0,0,0, 0.8);
			color: #fff;
			display: flex;
			padding: 2px 15px;
			font-size: 12px;
			.item{
				margin: 0 3px;
				&.active{
					padding: 0 3px;
					border-radius: 5px;
					background-color: #fff;
					color: #333333;
				}
			}
		}
	}
	
	
}
</style>