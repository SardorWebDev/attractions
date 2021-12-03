import {useCallback, useEffect, useState} from "react";
import api from '../../helpers/api'


const useHomeService = () => {
    const [name, setName] = useState("")
    const [state, setState] = useState(null)
    const [selectedAttraction, setSelectedAttraction] = useState(null)

    const [page, setPage] = useState(1)

    const [limit, setLimit] = useState(5)

    const [features, setFeatures] = useState([])

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