import { Component } from "react";

class Statecls extends Component{
    constructor(){
        super()
        this.state={
            name:"Hungry"
        }
    }
    btn=()=>
    {
        this.setState({
            name:"i am full"
        })
    }

    


    render(){
        return(
            <div>
                {this.state.name}
                <button onClick={this.btn}>food</button>
            </div>
        )

    }

}
export default Statecls