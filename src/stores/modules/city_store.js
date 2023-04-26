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
        }
    }
})

export default useCityStore