import React from "react";
const Title=()=>{
    console.log("rendering",Title);
    return(
        <div>
            title
        </div>
    )
}
export default React.memo(Title)