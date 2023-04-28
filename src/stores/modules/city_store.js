import {getCitiesData} from "@/services";
import {defineStore} from "pinia";

const useCityStore = defineStore("city",{
    state:()=>({
        allCities : {},
        currentCity: {
            cityName:"娄底"
        }
    }),
    actions:{
        async fetchCitiesData(){
            const res = await getCitiesData()
            return this.allCities = res.data
        },
        // async getPosition(){
        //     const res = await navigator.geolocation.getCurrentPosition(res=>{
        //         return res
        //     })
        //
        //     return this.currentCity.cityName = res
        // }
    }
})

export default useCityStore