import { useState } from "react"


const UseMemo=()=>{
    let[count1,setCount1]=useState(0)
    let[count2,setCount2]=useState(0)
    
    
    let increcount1=()=>{
        setCount1(count1+1)
    }

    let incre2=()=>{
        setCount2(count2+2)
    }
    
    return(
        <div>
           {count1}
           <button onClick={increcount1}>incre</button>
           {count2}
           <button onClick={incre2}>incre2</button> 
        </div>
    )
}
export default UseMemo