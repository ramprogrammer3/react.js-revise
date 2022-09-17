
import React from "react";
class Home extends React.Component{
    render(){
        return(
            <>
            <h1>this is home component </h1>
            <h3>the value of a is {this.props.data} </h3>
            <button onClick={this.props.changeState}> home button </button>
            </>
        )
    }
}
export default Home;