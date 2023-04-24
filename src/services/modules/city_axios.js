import myRequest from "@/services/request";

export function getCitiesData(){
    return myRequest.get({
	url:"/city/all"
    })
}