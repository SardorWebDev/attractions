import React from 'react';

const FeatureInfoModal = ({hide, feature}) => {

    return (
        <div className={`fixed w-1/2 max-h-screen overflow-y-auto overflow-x-hidden bg-white border shadow-md p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${feature?"block":"hidden"}`}>
            <div> <button className={"p-2 float-right border rounded"} onClick={()=>hide(null)}>X</button></div>

            <div className={"py-6"}>
                <h2 className={"text-2xl text-center"}>{feature?.name}</h2>
                {feature?.image?<img src={feature.image} alt=""/>:""}


                <p className={"pt-6"}>
                    {feature?.wikipedia_extracts?.text}
                </p>
            </div>


            {/*{JSON.stringify(feature)}*/}

        </div>
    );
};

export default FeatureInfoModal;