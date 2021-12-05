import {useCallback, useEffect, useState} from "react";
import api from '../../helpers/api'
import axios from "axios";
import {logDOM} from "@testing-library/react";


const useHomeService = () => {
    const [name, setName] = useState("")
    const [state, setState] = useState(null)
    const [selectedAttraction, setSelectedAttraction] = useState(null)

    const [page, setPage] = useState(1)

    const [limit, setLimit] = useState(5)

    const [features, setFeatures] = useState([])
    const [featuresCount, setFeaturesCount] = useState([])
    const [operators, setOperators] = useState([])

    useEffect(()=>{
        setPage(1)
    },[state])


    useEffect(()=>{
        getAttractionsByRadius(state)
    },[page,state])

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
           await getOperators()
            api.get('/radius', {params: {lat: state.lat, lon: state.lon, radius: 1000, limit, offset: page*limit}})
                .then(({data}) => setFeatures(data.features))

            api.get('/radius', {params: {lat: state.lat, lon: state.lon, radius: 1000, format: "count"}})
                .then(({data}) => setFeaturesCount(data.count))

    }
    }

    const getAttractionInfo =async (xid) => {
            api.get(`/xid/${xid}`,{params: {}})
                .then(({data}) => setSelectedAttraction(data))
    }

    const getOperators = async ()=>{
        const res = await   fetch(`https://data.egov.uz/apiPartner/Partner/Get?limit=5&offset=10&GuidId=610b6fa01a64fdd0373a8eab&token=616523fdb17932704f72ff62`)
        const data = await res.json()
        console.log(data)
        setOperators(data.result.data)
    }




    return {state, name, setName, getGeoInfo, features, selectedAttraction, setSelectedAttraction, operators, getAttractionInfo, featuresCount, page, setPage}
}
export default useHomeService