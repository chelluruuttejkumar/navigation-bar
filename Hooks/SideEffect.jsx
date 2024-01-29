import { useEffect, useState } from "react"

const SideEffect=()=>{
    let[count,setCount]=useState(0)
    let [count1,setCount1]=useState(0)

    let incre=()=>{
        setCount(count+1)
    }
    let decre=()=>{
        setCount1=(count1-1)
    }
    useEffect(()=>{
        console.log("hii i am side effect")
        document.title=`incre-${count} decre-${count1}`
    },[count])
    
    
    return(
        <div>
            {count}
            <button onClick={incre}>increment</button>
            {count1}
            <button onClick={decre}>decrement</button>
         
        </div>
    )
}
export default SideEffect