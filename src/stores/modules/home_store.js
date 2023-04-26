import {defineStore} from "pinia";
import {hotPlace} from "@/services";


const useHomeStore= defineStore("home",{
    state:()=>({
        hotSuggests: []
    }),
    actions:{
        async fetchSuggestData(){
            const res =  await hotPlace()
            this.hotSuggests = res.data
        }
    }
})

export default useHomeStore