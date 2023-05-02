import myRequest from '@/services/request/index'

export function fetchDetailData(houseId){
    return myRequest.get({
        url:"/detail/infos",
        params:{
            houseId
        }
    })
}

export function fetchDetailedImg(){}