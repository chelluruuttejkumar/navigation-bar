import { useState } from "react"

const State1=()=>{
    let[data,setData]=useState("hungry")
    let btn=()=>
    {
        setData("i am full")
    }
    return(
        <div>
            {data}
            <button onClick={btn}>food</button>
        </div>
    )
} 
export default State1