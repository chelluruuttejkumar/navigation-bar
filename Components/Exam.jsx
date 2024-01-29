import { Fragment, useState } from "react"
import content from "./userData.json"
const Exam=()=>{
 let [abc,setAbc]=useState(content)
 console.log(abc);
 return(
    <div>
        {abc.map((x)=>{
            return(
                <Fragment key={x.id}>
                    <h1>{x.login}</h1>
                    <img src={x.avatar_url} />
                </Fragment>
            )
        }

        )}
    </div>
 )
}
export default Exam