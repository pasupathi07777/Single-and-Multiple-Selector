


import data from "./data";
import React, { useState } from "react";

export default function Accordion() {
    const [select, setSelect] = useState(null);
    const [enableultiselecter, setenableultiselecter] = useState(false);
    const [multiple, setmultiple] = useState([]);


    function handleSingleSelect(ss) {
        setSelect(ss === select ? null : ss);
    }
    function handlemultiselection(ss) {
        

        let arr = [...multiple,]
        console.log(arr)
        let check = arr.indexOf(ss)
        console.log(check)
        if (check === -1) {
            arr.push(ss)

        } else {

            console.log(check)
            arr.splice(check, 1)


        }

        setmultiple(arr)



    }

    return (
        <div className="wrapper w-full h-full flex justify-center items-center p-2 flex-col gap-3 overflow-x-hidden  ">
            <button className="p-3 w-[250px]   bg-[#614101] text-white font-bold" onClick={() => setenableultiselecter(!enableultiselecter)}>{enableultiselecter !==true  ?"Enable Multi Selection":"Enable Single Selection"}</button>
            <div className="accordion w-full max-w-[700px] flex flex-col justify-center  gap-3  ">
                {data && data.length ? (
                    data.map(a => (
                        <div className="item  w-full h-fit bg-[#614101] text-white  flex flex-col  " key={a.id}>
                            <div className="title flex justify-between  w-full h-full px-3 py-3 cursor-pointer" onClick={enableultiselecter ? () => handlemultiselection(a.id) : (e) => { handleSingleSelect(a.id); }}>
                                <h3 className="font-bold">{a.question}</h3>
                                <span>+</span>
                            </div>
                            {select === a.id || multiple.indexOf(a.id) !== -1 ? <div onClick={enableultiselecter ? () => handlemultiselection(a.id) : (e) => { handleSingleSelect(a.id); }} className="px-3 pb-3 text-center ">{a.answer}</div> : null && <div onClick={enableultiselecter ? () => handlemultiselection(a.id) : (e) => { handleSingleSelect(a.id); }} className="px-3 pb-3 text-center ">{a.answer}</div>}
                        </div>
                    ))
                ) : (
                    <p>No data found</p>
                )}
            </div>
        </div>
    );
}

