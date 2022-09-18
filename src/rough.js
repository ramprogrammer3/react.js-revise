console.log("__________________________________________________________")

import React from 'react'
class App extends React.Component{
  state = {
    val : 0
  }
  incrementValue = () =>{
    this.setState((prevState)=>{
      return{val : prevState.val + 1 }
    })
  }
  decrementValue = () =>{
    this.setState((prevState)=>{
      return {val : prevState.val - 1}
    })
  }
  render(){
    return(
      <>
        <button onClick={this.incrementValue}>inclement</button>
        <span> {this.state.val}  </span>
        <button onClick={this.decrementValue}>decrement</button>
      </>
    )
  }
}

console.log("__________________________________________________________")
import React from "react";

class Home extends React.Component{
    state = {
      val : 0
    }
    incrementValue = () =>{
      this.setState((prevState)=>{
        return{val : prevState.val + 1 }
      })
    }
    decrementValue = () =>{
      this.setState((prevState)=>{
        return {val : prevState.val - 1}
      })
    }
    render(){
      return(
        <>
          <button onClick={this.incrementValue}>inclement</button>
          <span> {this.state.val}  </span>
          <button onClick={this.decrementValue}>decrement</button>
        </>
      )
    }
  }

// export default Home
console.log("__________________________________________________________")
import React from "react";

class About extends React.Component{
    state = {
      val : 0
    }
    incrementValue = () =>{
      this.setState((prevState)=>{
        return{val : prevState.val + 1 }
      })
    }
    decrementValue = () =>{
      this.setState((prevState)=>{
        return {val : prevState.val - 1}
      })
    }
    render(){
      return(
        <>
          <button onClick={this.incrementValue}>inclement</button>
          <span> {this.state.val}  </span>
          <button onClick={this.decrementValue}>decrement</button>
        </>
      )
    }
  }

// export default About
console.log("__________________________________________________________")

class App extends React.Component{
    state = {
      appData : {val : 0}
    }
    incrementValue = () =>{
      this.setState((prevState)=>{
        return{appData : {val : prevState.appData.val + 1} }
      })
    }
    decrementValue = () =>{
      this.setState((prevState)=>{
        return {appData : {val : prevState.appData.val - 1}}
      })
    }
    render(){
      return(
        <>
          <button onClick={this.incrementValue}>inclement</button>
          <span> {this.state.appData.val}  </span>
          <button onClick={this.decrementValue}>decrement</button>
          
        </>
      )
    }
  }
  
console.log("__________________________________________________________")

import React from 'react'
import About from './About'
import Home from './Home'
class App extends React.Component{
  state = {
    appData : {val : 0},
    homeData : {val : 0},
    aboutData : {val : 0}
  }
  incrementValue = () =>{
    this.setState((prevState)=>{
      return{appData : {val : prevState.appData.val + 1} }
    })
  }
  decrementValue = () =>{
    this.setState((prevState)=>{
      return {appData : {val : prevState.appData.val - 1}}
    })
  }

  decrementHomeDataValue = ()=>{
    this.setState((prevState)=>{
      return {homeData : { val : prevState.homeData.val - 1}}
    })
  }

  incrementHomeDataValue = () =>{
    this.setState((prevState)=>{
      return {homeData : {val : prevState.homeData.val + 1}}
    })
  }

  incrementAboutValue = () =>{
    this.setState((prevState)=>{
      return {aboutData : {val : prevState.aboutData.val + 1}}
    })
  }

  decrementAboutValue = () =>{
    this.setState((prevState)=>{
      return {aboutData : {val : prevState.aboutData.val - 1}}
    })
  }

  render(){
    return(
      <>
        <button onClick={this.incrementValue}>inclement</button>
        <span> {this.state.appData.val}  </span>
        <button onClick={this.decrementValue}>decrement</button>
        <Home 
        val = {this.state.homeData.val}
        decrementHomeDataValue = {this.decrementHomeDataValue}
        incrementHomeDataValue = {this.incrementHomeDataValue}
        
         />
        <About 
          val = {this.state.aboutData.val}
          incrementAboutValue = {this.incrementAboutValue}
          decrementAboutValue = {this.decrementAboutValue}
        /> 
      </>
    )
  }
}

class Home extends React.Component{
    render(){
      return(
        <>
          <button onClick={this.props.incrementHomeDataValue} >inclement</button>
          <span> {this.props.val}  </span>
          <button onClick={this.props.decrementHomeDataValue} >decrement</button>
        </>
      )
    }
  }

  class About extends React.Component{
    render(){
      return(
        <>
          <button onClick={this.props.incrementAboutValue }>inclement</button>
          <span> {this.props.val}  </span>
          <button onClick={this.props.decrementAboutValue}>decrement</button>
        </>
      )
    }
  }

console.log("__________________________________________________________")