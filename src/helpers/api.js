import axios from "axios";

const OPEN_TRIP_API = "http://api.opentripmap.com/0.1/ru/places"

const api = axios.create({
    baseURL: OPEN_TRIP_API
})

api.interceptors.request.use(config=>{
    config.params.apikey = "5ae2e3f221c38a28845f05b674fc2235afa379f63615f0c7a8582224"
    return config
})

export default api;


//
// const u = "https://data.gov.uz/uz/api/v1/api"
// axios.get(u,{params: {format: "json", dataset: "dataset", access_key: "311e0741fad6e0d15c34a8f2585a38a7"}}).then(({data})=>console.log(data))