const Props=(Props)=>{
    console.log(Props);
    return(
        <section>
    <h1><u>web tech</u></h1>
    {Props.data[0].name}
    {Props.data[0].id}
    <br />
    {Props.data[1].name}
    {Props.data[1].id}
    <br />
    {Props.data[2].name}
    {Props.data[2].id}
    <br />
    <h1><u>LIBRARIES</u></h1>
    {Props.data[3].name}
    {Props.data[3].id}
        </section>
    

    )
    
    
}
export default Props