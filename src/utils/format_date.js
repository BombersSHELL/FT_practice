import dayjs from "dayjs"

export function formatMonthDay(date){
    return dayjs(date).format("MM月DD日")
}

export function getDays(now,end) {
    return dayjs(end).diff(now,"day")
}