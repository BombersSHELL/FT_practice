import {onMounted, onUnmounted, ref} from "vue";
import {throttle} from "underscore";
export default function useScroll(elRef){
	let el = window
	const isReachBottom = ref(false)
	const scrollTop = ref(0)
	const clientHeight = ref(0)
	const scrollHeight = ref(0)
	
	const scrollGetter = throttle( ()=>{
		if (el=== window){
			clientHeight.value = document.documentElement.clientHeight
			scrollTop.value = document.documentElement.scrollTop
			scrollHeight.value = document.documentElement.scrollHeight
		}else{
			clientHeight.value = el.clientHeight
			scrollTop.value = el.scrollTop
			scrollHeight.value = el.scrollHeight
		}
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
		if (elRef){
			el = elRef.value
		}
		el.addEventListener("scroll",scrollGetter)
	})

	onUnmounted(()=>{
		el.removeEventListener("scroll",scrollGetter)
	})

	return {isReachBottom, scrollTop}
}