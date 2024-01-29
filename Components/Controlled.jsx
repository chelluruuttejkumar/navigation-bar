import { useState } from "react"
import style from "./controlled.module.css"
const Controlled=()=>{
 let [name,setName]=useState()
 let[password,setPassword]=useState()
 let[referaloptional,setreferaloptional]=useState()
 let nameData=(e)=>{
    // console.log(e.target.value)
    setName(e.target.value)
 }
 let passwordData=(e)=>{
    // console.log(e.target.value)
    setPassword(e.target.value)

 }
 let referaloptionaldata=(e)=>{
    setreferaloptional(e.target.value)
 }

 let formHandle=(e)=>{
    e.preventDefault()
    console.log(name);
    console.log(password);
    console.log(referaloptional);
 } 
    return(
        <div id={style.nav}>
            <form onSubmit={formHandle}>
                <label>name:</label>
                <input type="text"  value={name} onChange={nameData}/>
                <br></br>
                <label>password:</label>
                <input type="password" value={password} onChange={passwordData} />
                <br></br>
                <label>referal</label>
                <input type="text" value={referaloptional} onChange={referaloptionaldata} />
                <br></br>
                <input type="Submit" value="Submit" />
            </form>
        </div>
    )
}

export default Controlled