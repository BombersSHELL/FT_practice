import myRequest from "../request/index"

export function hotPlace(){
    return myRequest.get({
        url:"/home/hotSuggests"
    })
}

export function fetchCategories(){
    return myRequest.get({
        url:"/home/categories"
    })
}

export function fetchHouseList(currentPage) {
    return myRequest.get({
        url:"/home/houselist",
        params:{
            page:currentPage
        }
    })
}