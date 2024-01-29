import axios from "axios"
import { useEffect, useState } from "react"

const Fetchdata=()=>{
    let[dummy,setDummy]=useState([])
    let[id,setid]=useState("")
    let[click,setclick]=useState("")
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${click}`)
        .then((response)=>{
            console.log("Hii");
        setDummy(response.data)
        })
        .catch(()=>{
            console.log("error")

        })
    }
    ,[click])
    let idData=(e)=>{
        setid(e.target.value)
    }
    console.log(id)
    let btn=()=>{
        setclick(id)
    }
    
    return(
        <div>
            {/* {dummy.map((x)=>{ */}
                {/* return(
                <div>
                    <h1>{x.id}</h1>
                </div>
                ) */}
            {/* })} */}
            <input type="text" value={id} onChange={idData} />
           
            <button onClick={btn}>submit</button>
            {dummy.title}
        </div>
    )
}
export default Fetchdata