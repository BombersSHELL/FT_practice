import {defineStore} from "pinia";

const nowDate = new Date()
const tmoDate = new Date()
tmoDate.setDate(nowDate.getDate()+1)

const useMainStore = defineStore("mian",{
	state:()=>({
		nowDate : nowDate,
		tmoDate : tmoDate,
		isShowLoading:false
	})
})


export default useMainStore