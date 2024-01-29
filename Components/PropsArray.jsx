import { useState } from "react"

const PropsArray=()=>
{
    let [data,setData]=useState(["hi","hello","bye",123])
    return(
        <div>
            {/* <h1>{data[0]}</h1>
            <h1>{data[1]}</h1>
            <h1>{data[2]}</h1>
            <h1>{data[3]}</h1> */}
        </div>
    )
}
export default PropsArray