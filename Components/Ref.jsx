import { useRef } from "react"
const Ref=()=>{
    let data=useRef()
    console.log(data)
    let color=()=>{
       data.current.style.background="red";
    }
    return(
        <div>
            <h1 ref={data}>Ref</h1>
            <button onClick={color}>ex</button>
        </div>
    )
}
export default Ref