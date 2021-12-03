import useHomeService from "./home.service";

const Home = ()=>{


    const {state, name, setName, getGeoInfo, features,  selectedAttraction, setSelectedAttraction, getAttractionInfo} = useHomeService()


    return <div>
        <input className={"p-2 text-lg focus:outline-none"} value={name} onChange={e=>setName(e.target.value)} type="text"/>
        <button onClick={getGeoInfo} className={"p-3 bg-green-500"} >Search</button>
        <hr/>
        <div>
            {
                state&& <ul>
                    <li>Name: {state?.name}</li>
                    <li>Country: {state?.country}</li>
                    <li>Population: {state?.population}</li>
                    <li>Time zone: {state?.timezone}</li>
                    <li>Latitude: {state?.lat}</li>
                    <li>Longitude: {state?.lon}</li>
                </ul>
            }

        </div>

        <hr/>

        <div>
            <ul>
                {features.map(f=><li className={"my-4 cursor-pointer border p-2 rounded"} onClick={()=>getAttractionInfo(f.id)} key={f.id}>{f.properties.name}</li>)}
            </ul>

        </div>

        {selectedAttraction&&JSON.stringify(selectedAttraction)}
    </div>
}

export default Home