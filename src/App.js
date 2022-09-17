import React from "react";
import Home from "./Home";

class App extends React.Component{
  state = {
    a : 1
  }
  changeState = () =>{
    this.setState({a : 2})
  } 
  render(){
    console.log("render function is called ");
    return(
      <>
        <h1>App component </h1>
        <button onClick={this.changeState}>change state</button>
        <Home a = {this.state.a} />
      </>
    )
  }
}

export default App;