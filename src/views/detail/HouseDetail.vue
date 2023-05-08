<script setup>

import {computed, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import {fetchDetailData} from "@/services";
import DetailSwiper from "@/views/detail/detailComponets/detailSwiper.vue";
import DetailTile from "@/views/detail/detailComponets/detailTile.vue";
import DetailFacility from "@/views/detail/detailComponets/detailFacility.vue";
import DetailHouseLord from "@/views/detail/detailComponets/detailHouseLord.vue";
import DetailComments from "@/views/detail/detailComponets/detailComments.vue";
import DetailNotice from "@/views/detail/detailComponets/detailNotice.vue";
import DetailPriceDescription from "@/views/detail/detailComponets/detailPriceDescription.vue";
import DetailMap from "@/views/detail/detailComponets/detailMap.vue";
import TabControl from "@/components/tab-control/tab-control.vue";
import useScroll from "@/hooks/scrollHooker";
import tabControl from "@/components/tab-control/tab-control.vue";
import tabControlRef from "underscore/cjs/underscore";

const router = useRouter()
const route = useRoute()
const houseId = route.params.id
const detailData = ref({})
fetchDetailData(houseId).then(res=>{
	console.log(res.data)
	detailData.value = res.data
	console.log("asdaasd",detailData.value)
})
setTimeout(()=>{console.log('~~~~~~~',detailData.value)}, 5000)
const mainPart = computed(()=>detailData.value.mainPart)


const onClickLeft = ()=>{
	router.back()
}

const detailRef = ref()
const {scrollTop} = useScroll(detailRef)
const sectionEls = ref({})

const showTabControl = computed(()=>{
	return scrollTop.value >=300
})

const getSectionRef = (value)=>{
	// 判断value是否为null 否则在每次挂载或卸载时，对value进行读取时即会报错，所以需要进行判断
	if( !value ) return
	const name = value.$el.getAttribute("name")
	if (name!=null){
		sectionEls.value[name] = value.$el
	}
	console.log("sec",sectionEls.value)
}

// 创建一个对象，动态获取tabbar的title
const titles = computed(()=>{
	return Object.keys(sectionEls.value)
})
const tabClick = (index)=>{
	const key = Object.keys(sectionEls.value)[index]
	const el = sectionEls.value[key]
	let instance = el.offsetTop
	if(index !== 0){
		instance -= 44
	}
	detailRef.value.scrollTo({
	top:instance,
	behavior:"smooth"
	})
}


// tabbar随动，获取scrollTop至一个数组
const tabControlRef1 = ref()

watch(scrollTop, (newValue)=>{
	const els = Object.values(sectionEls.value)
	const values = els.map(el=>el.offsetTop)
	console.log(values)

	let index = values.length - 1
	for (let i = 0; i < values.length; i++) {
		const value = values[i];
		if (value>=newValue+44){
			index = i -1
			break
		}
	}

	tabControlRef1.value?.setCurrentIndex(index)
})


</script>

<template>
	<div class="detail topPage" ref="detailRef">
		<tab-control v-if="showTabControl"
								 class="tabs"
								 :titles="titles"
								 @tabItemClick="tabClick"
								 ref="tabControlRef1"
		/>
		<van-nav-bar
			title="Title"
			left-text="Back"
			left-arrow
			@click-left="onClickLeft"
		/>
		<div class="main" v-if="mainPart" v-memo="[mainPart]">
			<detail-swiper :ref="getSectionRef" :swipe-data="mainPart.topModule.housePicture.housePics"/>
			<detail-tile name="描述" :ref="getSectionRef" :titleData="mainPart.topModule"/>
			<detail-facility name="设施" :ref="getSectionRef" :facilities="mainPart.dynamicModule.facilityModule.houseFacility"/>
			<detail-house-lord name="房东" :ref="getSectionRef" :lord-info="mainPart.dynamicModule.landlordModule"/>
			<detail-comments name="评论" :ref="getSectionRef" :comments-data="mainPart.dynamicModule.commentModule"/>
			<detail-notice name="须知" :ref="getSectionRef" :notice-data="mainPart.dynamicModule.rulesModule.orderRules"/>
			<detail-map name="周边" :map-data="mainPart.dynamicModule.positionModule"/>
			<detail-price-description :description-data="mainPart.introductionModule"/>
		</div>
		<div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">WillBeen, Anywhere you will be.</div>
    </div>
	</div>
</template>

<style scoped lang="less">
.tabs{
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	z-index: 9;
	background-color: #fff;
}
.footer{
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 30px;
	img{
		width: 123px;
	}
	.text{
		margin-top: 12px;
		font-size: 12px;
		color: #7688a7;
	}
}
</style>