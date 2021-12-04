import useHomeService from "./home.service";
import MainLayout from "../../layouts/MainLayout";
import Navbar from "../../components/Navbar";

const Home = () => {


    const {
        state,
        name,
        setName,
        getGeoInfo,
        features,
        selectedAttraction,
        setSelectedAttraction,
        getAttractionInfo
    } = useHomeService()


    return <MainLayout>
        {/*<Navbar/>*/}
        <div className={"main-header"}>
            <marquee>
                {/*<ul className={"flex justify-around"}>*/}
                <span  className={"text-white text-xl cursor-pointer mx-4 hover:text-blue-500 select-none"}>O'zbekistonliklar qayerlarda dam olmoqda?</span>

                <span  className={"text-white text-xl cursor-pointer mx-4 hover:text-blue-500 select-none"}>Yurtimizga qaysi davlatlardan turistlar kelmoqda?</span>

                <span className={"text-white text-xl cursor-pointer mx-4 hover:text-blue-500 select-none"}>O'zbekistonliklar qaysi davlatlarga vizasiz sayohat qilsa bo'ladi?</span>

                <span className={"text-white text-xl cursor-pointer mx-4 hover:text-blue-500 select-none"}>Eng mashxur turistik shaxarlar?</span>
                <span className={"text-white text-xl cursor-pointer mx-4 hover:text-blue-500 select-none"}><a href="#famous-places">Eng mashxur joylar?</a> </span>

                {/*</ul>*/}
            </marquee>
            <div className={"container mx-auto "}>
                <h1 className={"mt-32 text-5xl text-white"}>Shaxar nomini kiriting va diqqatga sazovor joylar haqida
                    ma'lumot oling</h1>

                <div className={"flex flex-wrap mt-40"}>
                    <button
                        className={"border inline-block m-4 border-pink-400 py-2 px-3 rounded rounded-md text-pink-400 hover:bg-pink-400 hover:text-white"}>
                        Dubay
                    </button>

                    <button
                        className={"border inline-block m-4 border-pink-400 py-2 px-3 rounded rounded-md text-pink-400 hover:bg-pink-400 hover:text-white"}>
                        Samarqand
                    </button>

                    <button
                        className={"border inline-block m-4 border-pink-400 py-2 px-3 rounded rounded-md text-pink-400 hover:bg-pink-400 hover:text-white"}>
                        Rim
                    </button>

                    <button
                        className={"border inline-block m-4 border-pink-400 py-2 px-3 rounded rounded-md text-pink-400 hover:bg-pink-400 hover:text-white"}>
                        London
                    </button>

                    <button
                        className={"border inline-block m-4 border-pink-400 py-2 px-3 rounded rounded-md text-pink-400 hover:bg-pink-400 hover:text-white"}>
                        Istambul
                    </button>

                    <button
                        className={"border inline-block m-4 border-pink-400 py-2 px-3 rounded rounded-md text-pink-400 hover:bg-pink-400 hover:text-white"}>
                        New-York
                    </button>

                    <button
                        className={"border inline-block m-4 border-pink-400 py-2 px-3 rounded rounded-md text-pink-400 hover:bg-pink-400 hover:text-white"}>
                        Amsterdam
                    </button>
                    <button
                        className={"border inline-block m-4 border-pink-400 py-2 px-3 rounded rounded-md text-pink-400 hover:bg-pink-400 hover:text-white"}>
                        Barcelona
                    </button>
                    <button
                        className={"border inline-block m-4 border-pink-400 py-2 px-3 rounded rounded-md text-pink-400 hover:bg-pink-400 hover:text-white"}>
                        Osaka
                    </button>
                    <button
                        className={"border inline-block m-4 border-pink-400 py-2 px-3 rounded rounded-md text-pink-400 hover:bg-pink-400 hover:text-white"}>
                        Agra
                    </button>
                    <button
                        className={"border inline-block m-4 border-pink-400 py-2 px-3 rounded rounded-md text-pink-400 hover:bg-pink-400 hover:text-white"}>
                        Las Vegas
                    </button>
                    <button
                        className={"border inline-block m-4 border-pink-400 py-2 px-3 rounded rounded-md text-pink-400 hover:bg-pink-400 hover:text-white"}>
                        Los Angeles
                    </button>
                    <button
                        className={"border inline-block m-4 border-pink-400 py-2 px-3 rounded rounded-md text-pink-400 hover:bg-pink-400 hover:text-white"}>
                        Shanghai
                    </button>
                    <button
                        className={"border inline-block m-4 border-pink-400 py-2 px-3 rounded rounded-md text-pink-400 hover:bg-pink-400 hover:text-white"}>
                        Pattaya
                    </button>

                    <button
                        className={"border inline-block m-4 border-pink-400 py-2 px-3 rounded rounded-md text-pink-400 hover:bg-pink-400 hover:text-white"}>
                        Miami
                    </button>

                    <button
                        className={"border inline-block m-4 border-pink-400 py-2 px-3 rounded rounded-md text-pink-400 hover:bg-pink-400 hover:text-white"}>
                        Mecca
                    </button>

                    <button
                        className={"border inline-block m-4 border-pink-400 py-2 px-3 rounded rounded-md text-pink-400 hover:bg-pink-400 hover:text-white"}>
                        Prague
                    </button>

                    <button
                        className={"border inline-block m-4 border-pink-400 py-2 px-3 rounded rounded-md text-pink-400 hover:bg-pink-400 hover:text-white"}>
                        Mumbai
                    </button>

                    <button
                        className={"border inline-block m-4 border-pink-400 py-2 px-3 rounded rounded-md text-pink-400 hover:bg-pink-400 hover:text-white"}>
                        Antalya
                    </button>
                </div>

                <div className={" w-1/2 mx-auto p-1  flex items-center text-3xl"}>
                    <input className={"p-3 text-lg focus:outline-none  rounded-r-t w-4/5 text-gray-500 text-3xl"}
                           value={name}
                           placeholder={"Shaxar nomini kiriting..."}
                           onChange={e => setName(e.target.value)}
                           type="text"
                    />
                    <button onClick={getGeoInfo}
                            className={"p-3 transition-100 bg-green-500 w-1/5 text-white font-bold hover:bg-green-600"}
                    >Topaylik
                    </button>
                </div>

            </div>

        </div>


        <section className={"py-10"}>

            <div className={"container mx-auto"}>
                {state&&<h2 className={"text-2xl"}>Qisqacha ma'lumot</h2>}

                {
                    state && <ul className={"flex flex-wrap mt-5"}>
                        <li className={"border rounded p-1 bg-blue-300 m-1 select-none cursor-pointer text-white"}>Nomi: {state?.name}</li>
                        <li className={"border rounded p-1 bg-blue-300 m-1 select-none cursor-pointer text-white"}>Davlat: {state?.country}</li>
                        <li className={"border rounded p-1 bg-blue-300 m-1 select-none cursor-pointer text-white"}>Aholisi: {state?.population}</li>
                        <li className={"border rounded p-1 bg-blue-300 m-1 select-none cursor-pointer text-white"}>Vaqt: {new Date().toLocaleString("ru-Ru", {timeZone: state?.timezone})}</li>
                        <li className={"border rounded p-1 bg-blue-300 m-1 select-none cursor-pointer text-white"}>
                            <a
                            href="https://www.google.com/maps/place/Parij" target={"_blank"}>Xaritada</a></li>
                        {/*<li className={"border rounded p-1 bg-blue-300 m-1"}>Latitude: {state?.lat}</li>*/}
                        {/*<li className={"border rounded p-1 bg-blue-300 m-1"}>Longitude: {state?.lon}</li>*/}
                    </ul>
                }




            </div>
        </section>

        <section className={"py-10"}>
            <div className={"container mx-auto "}>
                {state && <div>
                    <h2 className={"text-2xl"}>Sizni {state.name}ga olib bora oladigan tur operatorlar</h2>
                    <div className={"border rounded"}>

                    </div>
                </div>}
            </div>

        </section>

        <section className={"py-10"}>
            <div className={"container mx-auto "}>
            <div>
                {state && <h2 className={"text-2xl"}>{state.name}dagi diqqatga sazovor joylar</h2>}
                <ul>
                    {features.map(f => <li className={"my-4 cursor-pointer border p-2 rounded"}
                                           onClick={() => getAttractionInfo(f.id)}
                                           key={f.id}>{f.properties.name}</li>)}
                </ul>

            </div>


                {selectedAttraction &&    <div>
                    <h3 className={"text-center"}>{selectedAttraction.name}</h3>
                    {selectedAttraction.image&& <img src={selectedAttraction.image} alt={selectedAttraction.name} className={"w-20 h-20"}/>}

                    <ul>
                        <li>Rate {selectedAttraction.rate}</li>
                    </ul>
                    {/*JSON.stringify(selectedAttraction)}     */}
                </div>}



            </div>
        </section>

        <section className={"py-10"}>
            <div className={"container mx-auto "}>
            {state&&<div className={"container mx-auto"}>
                <h2  className={"text-2xl"}>{state.name}ga borsangiz albatta tatib ko'rishingiz kerak bo'lgan taomlar</h2>

            </div>}
            </div>
        </section>
        <section id={"famous-places"} className={"py-10"}>
            <div className={"container mx-auto "}>
            <h1>Salom</h1>
            <h1>Salom</h1>
            <h1>Salom</h1>
            <h1>Salom</h1>
            <h1>Salom</h1>
            <h1>Salom</h1>
            <h1>Salom</h1>
            <h1>Salom</h1>
            <h1>Salom</h1>
            <h1>Salom</h1>
            </div>
        </section>

    </MainLayout>
}

export default Home