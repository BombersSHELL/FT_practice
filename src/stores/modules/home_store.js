import {defineStore} from "pinia";
import {hotPlace, fetchCategories, fetchHouseList} from "@/services";


const useHomeStore= defineStore("home",{
    state:()=>({
        hotSuggests: [],
        categories:[],
        houseList:[],
        currentPage:1
    }),
    actions:{
        async fetchSuggestData(){
            const res =  await hotPlace()
            this.hotSuggests = res.data
        },
        async fetchCategoriesData(){
            const res = await fetchCategories()
            this.categories = res.data
        },
        async fetchHouseListData(){
            const res = await fetchHouseList(this.currentPage)
            this.houseList.push(...res.data)
            this.currentPage++
        }
    }
})

export default useHomeStore