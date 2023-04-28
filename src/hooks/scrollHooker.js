import {onMounted, onUnmounted, ref} from "vue";

export default function useScroll(reachBottomCB){
	const isReachBottom = ref(false)
	const scrollGetter = ()=>{
		const clientHeight = document.documentElement.clientHeight
		const scrollTop = document.documentElement.scrollTop
		const scrollHeight = document.documentElement.scrollHeight
		console.log('--------')
		// console.log(reachBottomCB())
		if (clientHeight+scrollTop >= scrollHeight/2){
			// if (reachBottomCB) {
			// 	reachBottomCB()
			// }
			isReachBottom.value=true
		}
	}

	onMounted(()=>{
		window.addEventListener("scroll",scrollGetter)
	})

	onUnmounted(()=>{
		window.removeEventListener("scroll",scrollGetter)
	})

	return isReachBottom
}