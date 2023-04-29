import axios from "axios";
import {BASE_URL, TIMEOUT} from "./config";
import useMainStore from "@/stores/modules/mian_store";

const mainStore = useMainStore()
class myRequest{
	constructor(baseURL, timeout = 10000) {
		this.instance = axios.create({
			baseURL,
			timeout
		})
		this.instance.interceptors.request.use((config)=>{
			mainStore.isShowLoading = true
			console.log(111111111111)
			return config
		},(err)=>{
			return err
		})

		this.instance.interceptors.response.use((config)=>{
			mainStore.isShowLoading = false
			return config
		}, (error) => {
			return error
		})
	}


	request(config){
		return new Promise((resolve,reject)=>{
			this.instance.request(config).then(res=>{
				resolve(res.data)
			}).catch(err=>{
				reject(err)
			})
		})
	}
	
	get(config){
		return this.request({...config, method:"get"})
	}
}

export default new myRequest(BASE_URL, TIMEOUT)