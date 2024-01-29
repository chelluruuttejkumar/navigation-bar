import { useState } from "react"

const Task2=()=>
{
    let [data,setData]=useState(0)
    let[data1,setData1]=useState(0)
    let btn=()=>
    {
        setData(data+1)
    }
    let btn1=()=>
    {
        setData(data-1)
    }
    return(
        <div>
            <i class="fa-solid fa-heart" onClick={btn}></i> <sup>{data}</sup>
                <button onClick={btn1}>decre</button>
        </div>
    )
}
export default Task2