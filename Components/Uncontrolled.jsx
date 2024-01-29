import { useRef } from "react"

const Uncontrolled=()=>{
let name =useRef()
let email=useRef()
let btn=(e)=>{
    e.preventDefault()
    console.log(name.current.value)
    console.log(email.current.value)
}
    return(
        <div>
            <form>
                <label>name</label>
                   <input type="text" ref={name} />
                   <label>email</label>
                   <input type="text" ref={email} />
                   <button onClick={btn}>submit</button>
            </form>
        </div>
    )
}
export default Uncontrolled