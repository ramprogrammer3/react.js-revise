import React from 'react'

class App extends React.Component{
 state = {
  a : 10,
  b : 20
 }

 changestate = () =>{
  this.setState((prevState)=>{
    return {a : prevState.a + 1}
  });
 }
 
  render(){
    return(
      <>
        <h1>App class based component </h1>
        <p> a = {this.state.a} </p> 
        <button onClick={this.changestate}>change state</button>
        
      </>
    )
  }
}

export default App