import {useState} from "react"




const State=()=>{
    let[ data,setData]=useState("hungry")
    let btn=()=>{
        setData("my stomach is full")
    }
    return(
        <div>
            {data}
            <button onClick={btn}>food</button>
        </div>
    )
}
export default State