import React from "react"
const Button=(x)=>{
    return(
        <div>
            <button onClick={x.fun}>{x.children}</button>
        </div>
    )
}
export default React.memo(Button)