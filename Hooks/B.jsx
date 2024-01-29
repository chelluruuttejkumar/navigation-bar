import { useContext } from "react"
import { userData } from "./Main"


const B=()=>{
    let user=useContext(userData)
    console.log(user);
    return(
        <div>
            component B {user.arr[0].name}
           
        </div>
    )
}
export default B