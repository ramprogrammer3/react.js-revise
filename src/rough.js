console.log("_______________________________________________________________");

class App extends React.Component{
    render(){
      return(
        <>
          <h1>App class based component </h1>
        </>
      )
    }
  }

console.log("_______________________________________________________________");

class App extends React.Component{

    a = 10;
    
    render(){
      return(
        <>
          <h1>App class based component </h1>
          <p>the value of a is {this.a} </p>
        </>
      )
    }
  }

console.log("_______________________________________________________________");

class App extends React.Component{
    render(){
      let b = 20;
      return(
        <>
          <h1>App class based component </h1>
          <p>the value of a is {b} </p>
        </>
      )
    }
  }

console.log("_______________________________________________________________");

class App extends React.Component{
    printA(){
      console.log("Hello world")
    }
    render(){
      return(
        <>
          <h1>App class based component </h1>
           <button onClick={this.printA}> print a </button>
        </>
      )
    }
  }

console.log("_______________________________________________________________");

class App extends React.Component{
    a = "ram";
    printA(){
      console.log(`The value of a is ${this.a}`)
    }
    render(){
      return(
        <>
          <h1>App class based component </h1>
           <button onClick={()=>this.printA()}> print a </button>
        </>
      )
    }
  }

console.log("_______________________________________________________________");

class App extends React.Component{
    a = "ram";
    printA=()=>{
      console.log(`The value of a is ${this.a}`)
    }
    render(){
      return(
        <>
          <h1>App class based component </h1>
           <button onClick={this.printA}> print a </button>
        </>
      )
    }
  }

console.log("_______________________________________________________________");

class App extends React.Component{
  
    a = "ram";
    constructor(){
      super();
      this.printA = this.printA.bind(this);
    }
    printA(){
      console.log(`The value of a is ${this.a}`)
    }
    render(){
      return(
        <>
          <h1>App class based component </h1>
           <button onClick={this.printA}> print a </button>
        </>
      )
    }
  }

console.log("_______________________________________________________________");

class App extends React.Component{
    a = "ram";
    printA(){
      console.log(`The value of a is ${this.a}`)
    }
    render(){
      return(
        <>
          <h1>App class based component </h1>
           <button onClick={this.printA.bind(this)}> print a </button>
        </>
      )
    }
  }


console.log("_______________________________________________________________");

class App extends React.Component{
    obj  = {
       a : 10,
    }
    changeA = () =>{
      this.obj.a = 20
      console.log(this.obj)
      
    }
    render(){
      console.log(this.obj)
      return(
        <>
          <h1>App class based component </h1>
          <h3> a = {this.obj.a} </h3>
           <button onClick={this.changeA}>change a </button>
        </>
      )
    }
  }

console.log("_______________________________________________________________");

class App extends React.Component{
    state  = {
       a : 10,
    }
    changeA = () =>{
      this.setState({ a : 20});
    }
    render(){
      
      return(
        <>
          <h1>App class based component </h1>
          <h3> a = {this.state.a} </h3>
           <button onClick={this.changeA}>change a </button>
        </>
      )
    }
  }

console.log("_______________________________________________________________");

class App extends React.Component{
    state  = {
       a : 10,
    }
    render(){
      return(
        <>
          <h1>App class based component </h1>
          <h3> a = {this.state.a} </h3>
           <button onClick={()=>{
            this.setState({a : 30})
           }}>change a </button>
        </>
      )
    }
  }

console.log("_______________________________________________________________");

import React from 'react'
import Home from './Home'
class App extends React.Component{
  render(){
    return(
      <>
        <h1>App class based component </h1> 
        <Home /> 
      </>
    )
  }
}

import React from "react";
class Home extends React.Component{
    render(){
        return(
            <>
            <h1>this is home component </h1>
            </>
        )
    }
}
export default Home;

console.log("_______________________________________________________________");

import React from 'react'
import Home from './Home'
class App extends React.Component{
  render(){
    let a = 10;
    return(
      <>
        <h1>App class based component </h1> 
        <Home  data = {a} /> 
      </>
    )
  }
}

import React from "react";
class Home extends React.Component{
    render(){
        return(
            <>
            <h1>this is home component </h1>
            <h3>the value of a is {this.props.data} </h3>
            </>
        )
    }
}

console.log("_______________________________________________________________");

import Home from './Home'
class App extends React.Component{
  state = {
    a : 10
  }
  render(){
    return(
      <>
        <h1>App class based component </h1> 
        <Home  data = {this.state.a} /> 
      </>
    )
  }
}
console.log("_______________________________________________________________");

import React from 'react'
import Home from './Home'
class App extends React.Component{
  state = {
    a : 10
  }
  changeState = () =>{
    this.setState({
      a : 20
    })
  }
  render(){
    return(
      <>
        <h1>App class based component </h1> 
        <Home changeState = {this.changeState}  data = {this.state.a} /> 
      </>
    )
  }
}

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

console.log("_______________________________________________________________");

import React from 'react'

class App extends React.Component{
 state = {
  a : 0
 }
 decrementValue = () =>{
  this.setState({a : this.state.a - 1})
 }
 incrementValue = () =>{
  this.setState({a : this.state.a + 1});
 }
  render(){
    return(
      <>
        <h1>App class based component </h1> 
        <button onClick={this.incrementValue}> increase </button>
        <span> {this.state.a}  </span>
        <button onClick={this.decrementValue}> decrease </button>
      </>
    )
  }
}

console.log("_______________________________________________________________");

import React from 'react'

class App extends React.Component{
 state = {
  a : 10,
  b : 20
 }

 changestate = () =>{
  this.setState({a : this.state.a + 1});
 }
 
  render(){
    console.log(this.state)
    return(
      <>
        <h1>App class based component </h1> 
        <button onClick={this.changestate}>change state</button>
        
      </>
    )
  }
}

console.log("_______________________________________________________________");

import React from 'react'

class App extends React.Component{
 state = {
  a : 10,
  b : 20
 }

 changestate = () =>{
  this.setState({a : this.state.a + 1});
 }
 
  render(){
    console.log(this.state)
    return(
      <>
        <h1>App class based component </h1>
        <p> a = {this.state.a} </p> 
        <button onClick={this.changestate}>change state</button>
        
      </>
    )
  }
}

console.log("_______________________________________________________________");

import React from 'react'

class App extends React.Component{
 state = {
  a : 10,
  b : 20
 }

 changestate = () =>{
  this.setState((prevState)=>{
    console.log(prevState)
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

console.log("_______________________________________________________________");

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

console.log("_______________________________________________________________");



console.log("_______________________________________________________________");