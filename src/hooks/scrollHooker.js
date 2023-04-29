import {onMounted, onUnmounted, ref} from "vue";
import {throttle} from "underscore";
export default function useScroll(){
	const isReachBottom = ref(false)
	const scrollTop = ref(0)
	const clientHeight = ref(0)
	const scrollHeight = ref(0)
	
	const scrollGetter = throttle( ()=>{
		clientHeight.value = document.documentElement.clientHeight
		scrollTop.value = document.documentElement.scrollTop
		scrollHeight.value = document.documentElement.scrollHeight
		console.log('--------')
		// console.log(reachBottomCB())
		if (clientHeight.value+scrollTop.value >= scrollHeight.value){
			// if (reachBottomCB) {
			// 	reachBottomCB()
			// }
			isReachBottom.value=true
			console.log("到达底部")
		}
	},100)

	onMounted(()=>{
		window.addEventListener("scroll",scrollGetter)
	})

	onUnmounted(()=>{
		window.removeEventListener("scroll",scrollGetter)
	})

	return {isReachBottom, scrollTop}
}