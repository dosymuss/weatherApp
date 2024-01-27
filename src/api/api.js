import axios from "axios"

const API1 = "https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=GEUL1GkNztvEoeVkcoRpbEwPFAdVMN5L"
const API2 = "https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=9eIlmxGlrvXiorrN9CCFHK9qHcYUwkpw"

export const getWeather = async()=>{
    try {
        const res = await axios.get(API2)
        return res
    } catch (error) {
        throw error
    }
}