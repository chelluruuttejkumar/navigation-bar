import { useState } from "react"
import { createContext } from "react"
import A from "./A"
import Count from "./Count"
import Button from "./Button"
import Title from "./Title"
import UseMemo from "./UseMemo"
import { useCallback } from "react"
export let userData=createContext()
const Main=()=>{
    let [age,setAge]=useState(25)
    let[sal,setSal]=useState(25000)

    let increage=useCallback(()=>{
        setAge(age+1)
    },[age])

    let incresal=useCallback(()=>{
        setSal(sal+5000)
    },[sal])  
    return (
        <div>
        <Count data={age}>AGE</Count>
        <Button fun={increage}>INCREMENT-AGE</Button>
        <Count data={sal}>SALARY</Count>
        <Button fun={incresal}>INCREMENT-SALARY</Button>

        </div>
    )
    }
export default Main