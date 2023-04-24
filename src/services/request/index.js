import axios from "axios";
import {BASE_URL, TIMEOUT} from "./config";
class myRequest{
	constructor(baseURL, timeout = 10000) {
		this.instance = axios.create({
			baseURL,
			timeout
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