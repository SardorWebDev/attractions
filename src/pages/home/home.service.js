import {useCallback, useEffect, useState} from "react";
import api from '../../helpers/api'
import axios from "axios";


const useHomeService = () => {
    const [name, setName] = useState("")
    const [state, setState] = useState(null)
    const [selectedAttraction, setSelectedAttraction] = useState(null)

    const [page, setPage] = useState(1)

    const [limit, setLimit] = useState(5)

    const [features, setFeatures] = useState([])

    useEffect(()=>{
        // const options = {
        //     method: 'POST',
        //     url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
        //     headers: {
        //         'content-type': 'application/x-www-form-urlencoded',
        //         'accept-encoding': 'application/gzip',
        //         'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
        //         'x-rapidapi-key': '3a6c41a26amsh7e82b3642544ee0p1f7460jsn5189d276bf0a'
        //     },
        //     data: {q: 'Hello, world!', target: 'es', source: 'en'}
        // };
        //
        // axios.get("  https://translate.yandex.net/api/v1.5/tr.json/translate?key=AQAAAAA2S91sAATuwcyiRXanvk3oiVXgGD8XXog&text=Hello&lang=ru&format=plain"
        //     ).then(function (response) {
        //     console.log(response.data);
        // }).catch(function (error) {
        //     console.error(error);
        // });



    },[])

    useEffect(()=>{
        getOpenData()
    },[])

    const getOpenData = async ()=>{

     //    const u = "https://data.gov.uz/uz/api/v1/api?format=json&dataset=dataset&access_key=311e0741fad6e0d15c34a8f2585a38a7"
     // const res = await   fetch(u,{credentials:"include"})
     //     const data = await res.json()
     //    console.log(data)





        const res = await   fetch(" https://data.egov.uz/apiPartner/Partner/Get?limit=5&offset=0&GuidId=610b6fa01a64fdd0373a8eab&token=616523fdb17932704f72ff62")
        const data = await res.json()
        console.log(data)

    }











    const getGeoInfo = useCallback(async () => {
        if (name.length>=3) {
            api.get('/geoname', {params: {name}})
                .then(({data}) => {
                    setState(data)
                    getAttractionsByRadius(data)
                })
        }

    }, [name])

    const getAttractionsByRadius = async (state) => {

        if (state){
            api.get('/radius', {params: {lat: state.lat, lon: state.lon, radius: 1000, limit, offset: page-1}})
                .then(({data}) => setFeatures(data.features))
        }

    }

    const getAttractionInfo =async (xid) => {
            api.get(`/xid/${xid}`,{params: {}})
                .then(({data}) => setSelectedAttraction(data))
    }




    return {state, name, setName, getGeoInfo, features, selectedAttraction, setSelectedAttraction, getAttractionInfo}
}
export default useHomeService