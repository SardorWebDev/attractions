import useHomeService from "./home.service";
import MainLayout from "../../layouts/MainLayout";
import Navbar from "../../components/Navbar";
import Operators from "../../components/Operators";
import FamousCities from "../../components/FamousCities";
import FeatureInfoModal from "../../components/FeatureInfoModal";

const Home = () => {


    const {
        state,
        name,
        setName,
        getGeoInfo,
        features,
        selectedAttraction,
        setSelectedAttraction,
        getAttractionInfo,
        operators,
        featuresCount,
        page,
        setPage
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
                <span className={"text-white text-xl cursor-pointer mx-4 hover:text-blue-500 select-none"}><a href="#operators">Litsenziyaga ega tur operatorlar</a> </span>

                {/*</ul>*/}
            </marquee>
            <div className={"container mx-auto "}>
                <h1 className={"mt-32 text-5xl text-white"}>Shaxar nomini kiriting <br/>va sayohatingiz uchun kerakli ma'lumotlarni oling</h1>
                <FamousCities/>


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
                {state&&<h2 className={"text-3xl text-gray-400"}>Qisqacha ma'lumot</h2>}

                {
                    state && <ul className={"flex flex-wrap mt-5 justify-center"}>
                        <li className={"border rounded p-1 bg-blue-300 m-1 select-none cursor-pointer text-white"}>Nomi: {state?.name}</li>
                        <li className={"border rounded p-1 bg-blue-300 m-1 select-none cursor-pointer text-white"}>Davlat: {state?.country}</li>
                        <li className={"border rounded p-1 bg-blue-300 m-1 select-none cursor-pointer text-white"}>Aholisi: {state?.population}</li>
                        <li className={"border rounded p-1 bg-blue-300 m-1 select-none cursor-pointer text-white"}>Vaqt: {new Date().toLocaleString("ru-Ru", {timeZone: state?.timezone})}</li>
                        <li className={"border rounded p-1 bg-blue-300 m-1 select-none cursor-pointer text-white"}>
                            <a href={`https://www.google.com/maps/place/${state.name}`} target={"_blank"}>Xaritada</a></li>
                        <li className={"border rounded p-1 bg-blue-300 m-1  text-white"}>Eng arzon chipta (samolyot): 700 000</li>
                        <li className={"border rounded p-1 bg-blue-300 m-1  text-white"}>Eng qimmat chipta  (samolyot): 1 300 000</li>
                        <li className={"border rounded p-1 bg-blue-300 m-1  text-white"}>Vaqti eng yaqin samolyot reysi: 07:12.2020 11:00</li>
                        <li className={"border rounded p-1 bg-blue-300 m-1  text-white"}>Eng arzon chipta (poyezd): 450 000</li>
                        <li className={"border rounded p-1 bg-blue-300 m-1  text-white"}>Eng qimmat chipta (poyezd): 650 000</li>
                        <li className={"border rounded p-1 bg-blue-300 m-1  text-white"}>Vaqti eng yaqin poyezd reysi: 06:12.2020 07:00</li>
                        <li className={"border rounded p-1 bg-blue-300 m-1  text-white"}>Eng arzon mehmonxona: 120 000</li>
                        <li className={"border rounded p-1 bg-blue-300 m-1   text-white"}>Eng qimmat mehmonxona: 1 430 000</li>
                        {/*<li className={"border rounded p-1 bg-blue-300 m-1"}>Longitude: {state?.lon}</li>*/}
                    </ul>
                }




            </div>
        </section>

        <section className={"py-10"}>
            <div className={"container mx-auto "}>
                <div>
                    {state && <h2 className={"text-3xl text-gray-400"}>{state.name}dagi diqqatga sazovor joylar. Topildi {featuresCount} ta</h2>}
                    <div className={"flex"}>
                        {features.map(f => <div className={"mt-10   p-2 w-1/5"}

                                                onClick={() => getAttractionInfo(f.id)}
                                                key={f.id}>
                                <div className={"p-2 rounded border cursor-pointer shadow"}>
                                  <h2 className={"text-xl font-bold text-gray-500 text-center"}>{f.properties.name?f.properties.name:"Nomi ko'rsatilmagan"}</h2>
                                    <div className={"flex flex-wrap mt-2 justify-center"}>
                                        <span className={"p-1 rounded border bg-blue-100 m-1"}>reyting: {f.properties.rate}</span>
                                        <span className={"p-1 rounded border bg-blue-100 m-1"}>xaritada ko'rsatish</span>
                                        <span className={"p-1 rounded border bg-blue-100 m-1"}>virtual sayohat</span>

                                    </div>
                                </div>


                            </div>
                        )}
                    </div>
                    {
                        !!features.length&&<div className={"flex justify-around text-3xl mt-5 text-gray-400"}>
                            <button onClick={()=>setPage(page-1)} disabled={page===0}>👈 Oldingi 5 ta</button>

                            <span>{page*5} - {(page*5)+features.length}</span>
                            <button onClick={()=>setPage(page+1)}>Keyingi 5 ta 👉</button>
                        </div>
                    }


                </div>


                {/*{selectedAttraction &&    <div>*/}
                {/*    <h3 className={"text-center"}>{selectedAttraction.name}</h3>*/}
                {/*    {selectedAttraction.image&& <img src={selectedAttraction.image} alt={selectedAttraction.name} className={"w-20 h-20"}/>}*/}

                {/*    <ul>*/}
                {/*        <li>Rate {selectedAttraction.rate}</li>*/}
                {/*    </ul>*/}
                {/*</div>}*/}



            </div>
        </section>

        <section className={"py-10"}>
            <div className={"container mx-auto "}>
                {state && <div>
                    <h2 className={"text-3xl text-gray-400"}>Sizni {state.name}ga olib bora oladigan tur operatorlar {operators.length} ta</h2>
                    <div className={"flex flex-wrap mt-10"}>
                        {operators.map((operator,i)=><div key={operator.id} className={"w-1/5 p-2"}>

                            <div className={"p-2 border rounded shadow text-center h-60"}>
                                <h3 className={"font-bold text-gray-500"}>{operator.tableColumn.name.data}</h3>
                                <p>{operator.tableColumn.obl.data}</p>
                                <p>Mijozlar bahosi {i}</p>
                                <div className={"flex flex-wrap mt-2"}>

                                    {i%2===0&&<span className={"p-1 rounded border m-1 bg-green-100"}>Litsenziya mavjud</span>}
                                    <span  className={"p-1 rounded border  m-1  bg-green-100"}>Narxi: {i+231} 000 000 (1 hafta)</span>

                                </div>
                                <a href="#">Izohlar</a>
                                {/*<p>Litsenziya raqami: {operator.tableColumn.licnum.data}</p>*/}
                                {/*<p>Manzil: {operator.tableColumn.addr.data}</p>*/}
                                {/*<p>Tel: {operator.tableColumn.tel.data}</p>*/}
                            </div>

                        </div>)}
                    </div>
                </div>}
            </div>

        </section>



        <section className={"py-10"}>
            <div className={"container mx-auto "}>
            {state&&<div className={"container mx-auto"}>
                <h2 className={"text-3xl text-gray-400"}>{state.name}ga borsangiz albatta tatib ko'rishingiz tavsiya etiladigan taomlar</h2>

            </div>}
            </div>
        </section>
        <section id={"famous-places"} className={"py-10"}>
            <div className={"container mx-auto "}>
           <div className={"flex flex-wrap"}>

           </div>
            </div>
        </section>

        <Operators/>

        <footer className={"py-20"}>
            <div className="container mx-auto">
                <h1>Footer</h1>
            </div>

        </footer>

        <FeatureInfoModal feature={selectedAttraction} hide={setSelectedAttraction}/>

    </MainLayout>
}

export default Home