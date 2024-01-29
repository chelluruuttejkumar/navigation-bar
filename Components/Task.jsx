import { useState } from "react"

const Task=()=>
{
    let [count,setCount]=useState(0)
    let incre=()=>
    {
        setCount(count+1)
    }
    let decre=()=>
    {
        setCount(count-1)
    }
    let reset=()=>
    {
        setCount(0)
    }
    return(
        <div>
            Task
            <h1>{count}</h1>
            <button onClick={incre}>Inc</button>
            <button onClick={decre}>Dec</button>
            <button onClick={reset}>Reset</button>
            
        </div>
    )
}
export default Task