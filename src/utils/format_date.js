import dayjs from "dayjs"

export function formatMonthDay(date, template='MM月DD日'){
    return dayjs(date).format(template)
}

export function getDays(now,end) {
    return dayjs(end).diff(now,"day")
}