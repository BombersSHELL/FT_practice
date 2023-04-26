import myRequest from "../request/index"

export function hotPlace(){
    return myRequest.get({
        url:"/home/hotSuggests"
    })
}