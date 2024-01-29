import {useState} from "react"
const State2=()=>{
    let[count,setCount]=useState(0)
    let increment=()=>{
        setCount(count+1)
    }
    let decrement=()=>{
        setCount(count-1)
    }
    let reset=()=>{
        setCount(0)
    }
    return(
    <div>
        {count}
        <button onClick={increment}>Incre</button>
        <button onClick={decrement}>Decre</button>
        <button onClick={reset}>Reset</button>
    </div>
    )
}
export default State2