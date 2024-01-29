import { Component } from "react";

class Propscls extends Component{
    render(){
        return(
            <div>
                <h1>propsclass</h1>
                <h1>{this.props.data}</h1>
            </div>
        )
    }
}
export default Propscls