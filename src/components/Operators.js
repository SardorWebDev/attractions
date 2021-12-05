import React, {useEffect, useState} from 'react';

const Operators = () => {

    const [operators, setOperators] = useState([])
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(0)

    useEffect(()=>{
        getOpenData()
    },[page])

    const getOpenData = async ()=>{

        //    const u = "https://data.gov.uz/uz/api/v1/api?format=json&dataset=dataset&access_key=311e0741fad6e0d15c34a8f2585a38a7"
        // const res = await   fetch(u,{credentials:"include"})
        //     const data = await res.json()
        //    console.log(data)


        const res = await   fetch(`https://data.egov.uz/apiPartner/Partner/Get?limit=10&offset=${10*page}&GuidId=610b6fa01a64fdd0373a8eab&token=616523fdb17932704f72ff62`)
        const data = await res.json()
        console.log(data)
        setOperators(data.result.data)
        setCount(data.result.count)

    }


    return (
        <section id={"operators"}>

            <div className="container mx-auto">
                <h2 className={"text-3xl text-gray-400"}>Litsenziyaga ega tur operatorlar. {count&&`Jami ${count}`}</h2>

                <div className={"flex flex-wrap mt-10"}>
                    {operators.map(operator=><div key={operator.id} className={"w-1/5 p-2"}>

                        <div className={"p-2 border rounded shadow text-center h-60"}>
                            <h3 className={"font-bold text-gray-500"}>{operator.tableColumn.name.data}</h3>
                            <p>{operator.tableColumn.obl.data}</p>
                            <p>Litsenziya raqami: {operator.tableColumn.licnum.data}</p>
                            <p>Manzil: {operator.tableColumn.addr.data}</p>
                            <p>Tel: {operator.tableColumn.tel.data}</p>
                        </div>

                    </div>)}
                </div>


                <div className={"flex justify-around text-3xl mt-5 text-gray-400"}>
                    <button onClick={()=>setPage(page-1)} disabled={page===0}>👈 Oldingi 10 ta</button>

                    <span>{page*10} - {(page*10)+10}</span>
                    <button onClick={()=>setPage(page+1)}>Keyingi 10 ta 👉</button>
                </div>


                    {/*<ul className={"flex flex-wrap"}>*/}
                    {/*    {new Array(Math.ceil(count/10)).fill("").map((p,i)=><li key={i} className={"mx-1"}><button className={"p-1 border rounded m-1"} onClick={()=>setPage(i)}>{i+1}</button></li>)}*/}

                    {/*</ul>*/}




            </div>



        </section>
    );
};

export default Operators;