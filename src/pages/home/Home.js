import useHomeService from "./home.service";
import MainLayout from "../../layouts/MainLayout";

const Home = ()=>{


    const {state, name, setName, getGeoInfo, features,  selectedAttraction, setSelectedAttraction, getAttractionInfo} = useHomeService()


    return <MainLayout>
        <div className={"container mx-auto"}>

            <div className={"mt-40 w-1/2 mx-auto border rounded overflow-hidden p-1"}>
                <input className={"p-2 text-lg focus:outline-none rounded w-4/5 text-gray-500"}
                       value={name}
                       placeholder={"Shaxar nomini kiriting..."}
                       onChange={e=>setName(e.target.value)}
                       type="text"
                />
                <button onClick={getGeoInfo}
                        className={"p-3 bg-green-400 w-1/5 rounded text-white font-bold hover:bg-green-500"}
                >Topaylik</button>
            </div>




            {
                state&& <ul className={"flex flex-wrap mt-10" }>
                    <li className={"border rounded p-1 bg-blue-300 m-1"}>Nomi: {state?.name}</li>
                    <li className={"border rounded p-1 bg-blue-300 m-1"}>Davlat: {state?.country}</li>
                    <li className={"border rounded p-1 bg-blue-300 m-1"}>Aholisi: {state?.population}</li>
                    <li className={"border rounded p-1 bg-blue-300 m-1"}>Vaqt: {new Date().toLocaleString("ru-Ru",{timeZone: state?.timezone})}</li>
                    {/*<li className={"border rounded p-1 bg-blue-300 m-1"}>Latitude: {state?.lat}</li>*/}
                    {/*<li className={"border rounded p-1 bg-blue-300 m-1"}>Longitude: {state?.lon}</li>*/}
                </ul>
            }





        <div>
            <ul>
                {features.map(f=><li className={"my-4 cursor-pointer border p-2 rounded"} onClick={()=>getAttractionInfo(f.id)} key={f.id}>{f.properties.name}</li>)}
            </ul>

        </div>

        {selectedAttraction&&JSON.stringify(selectedAttraction)}
    </div>
    </MainLayout>
}

export default Home