const Darklight=()=>{
   let dark=()=>{
    document.body.style.background="black"
    document.body.style.color="white"
   } 
   let light=()=>{
    document.body.style.background="wheat"
    document.body.style.color="black"
   }
    return(
        <div>
            <h1>darklight</h1>
            dark
            <input type="radio" name="abc" onClick={dark} />
            light
            <input type="radio" name="abc" onClick={light} />
        </div>
    )
}
export default Darklight