import sunnyImage from "../image/SunnyWeatherImage.svg"
import rainyImage from "../image/RainyWeatherImage.svg"
import cloudyImage from "../image/CloudWeatherImage.svg"
import snowyImage from "../image/SnowyWeatherImage.svg"




export const getDateNow = () => {
    const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"]
    //? дни недели тоже имеют отсчет от 0 и ноль это воскресенье
    const date = new Date()
    const day = date.getDay()
    const year = date.getFullYear()
    let month = date.getMonth() + 1
    //? месяца всегда имеет отсет от 0 

    const normMonth = month.toString().length < 2 ? `0${month}` : month

    const dayNum = date.getDate()
    const currentDay = days[day]
    let fullData = `${dayNum}.${normMonth}.${year} ${currentDay}`
    return fullData
}




export const getWeatherDesign = (data) => {


    if (data !== undefined) {
        const { cloudCoverAvg, rainAccumulationAvg, snowAccumulationAvg } = data

        let back = {
            category: "",
            top: "",
            bottom: "",
            textColor: "",
            textTitle: "",
            textDesc: "",
            image: ""
        }
        
        if (cloudCoverAvg > 50) {
            if (snowAccumulationAvg > 0) {
                back.category = "snowy"
                back.top = "black"
                back.bottom = "black"
                back.textColor = "white"
                back.textDesc = "Нou wanted snow so much"
                back.textTitle = "Today is so snowy"
                back.image = snowyImage
            } else if (rainAccumulationAvg > 0) {
                back.category = "rainy"
                back.top = "white"
                back.bottom = "white"
                back.textColor = "white"
                back.textDesc = "We love rain, right?"
                back.textTitle = "Today is so rainy"
                back.image = rainyImage
            } else {
                back.category = "cloudy"
                back.top = "white"
                back.bottom = "white"
                back.textColor = "black"
                back.textDesc = "But let's not be Chinese"
                back.textTitle = "Today is so cloudy"
                back.image = cloudyImage
            }
        } else if (snowAccumulationAvg > 0) {
            back.category = "snowy"
            back.top = "black"
            back.bottom = "black"
            back.textColor = "white"
            back.textDesc = "Нou wanted snow so much"
            back.textTitle = "Today is so snowy"
            back.image = snowyImage
        } else if (rainAccumulationAvg > 0) {
            back.category = "rainy"
            back.top = "white"
            back.bottom = "white"
            back.textColor = "white"
            back.textDesc = "We love rain, right?"
            back.textTitle = "Today is so rainy"
            back.image = rainyImage
        } else {
            back.category = "sunny"
            back.top = "black"
            back.bottom = "white"
            back.textColor = "white"
            back.textDesc = "Maybe we can go for a walk"
            back.textTitle = "Today is so sunny"
            back.image = sunnyImage
        }
        return back
    }
    else {
        return false
    }
}


export const timeConvFunc = (timeString) => {
    if (timeString && timeString.length > 0) {
        const date = new Date(timeString)

        return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
    return false
}


export const dayFunc = (data) => {
    if (data && data.length > 0) {
        return data.slice(2, 8)
    }
    return false
}

export const getDayFunc = (time) => {
    const date = new Date(time)
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]

    return days[date.getDay()]
}