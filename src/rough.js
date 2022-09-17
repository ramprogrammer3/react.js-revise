console.log("__________________________________________________________________________");

import React from "react";

class App extends React.Component{
  state = {
    a : 0
  }
  changeState = () =>{
    this.setState({a : this.state.a + 1})
  }
  render(){
    return(
      <>
        <h1>App component </h1>
        <h3> a = {this.state.a} </h3>
        <button onClick={this.changeState}>change state </button>
      </>
    )
  }
}


console.log("__________________________________________________________________________");

import React from "react";

class App extends React.Component{
  state = {
    a : 0
  }
  changeState = () =>{
    this.setState({a : this.state.a + 1});
    this.setState({a : this.state.a + 1});
    this.setState({a : this.state.a + 1});
  }
  render(){
    return(
      <>
        <h1>App component </h1>
        <h3> a = {this.state.a} </h3>
        <button onClick={this.changeState}>change state </button>
      </>
    )
  }
}


console.log("__________________________________________________________________________");

import React from "react";

class App extends React.Component{
  state = {
    a : 0
  }
  changeState = () =>{
    this.setState((prevState)=>{return {a : prevState.a + 1}});
    this.setState((prevState)=>{return {a : prevState.a + 1}});
    this.setState((prevState)=>{return {a : prevState.a + 1}});
  }
  render(){
    return(
      <>
        <h1>App component </h1>
        <h3> a = {this.state.a} </h3>
        <button onClick={this.changeState}>change state </button>
      </>
    )
  }
}

console.log("__________________________________________________________________________");

import React from "react";

class App extends React.Component{
 constructor(){
  super();
  console.log("constructor called ");
 }
  render(){
    console.log("render function is called ");
    return(
      <>
        <h1>App component </h1>
        
      </>
    )
  }
}
console.log("__________________________________________________________________________");

import React from "react";
import Home from "./Home";
class App extends React.Component{
 constructor(){
  super();
  console.log("constructor called ");
 }
  render(){
    console.log("render function is called ");
    return(
      <>
        <h1>App component </h1>
        <Home />
      </>
    )
  }
}

import React from "react";

class Home extends React.Component{
    render(){
        console.log("child component is render ")
        return(
            <>
                <h1>Home component </h1>
            </>
        )
    }
}

console.log("__________________________________________________________________________");

import React from "react";
import Home from "./Home";
class App extends React.Component{
 constructor(){
  super();
  console.log("constructor called ");
 }
 componentDidMount(){
  console.log("componentDidMount function is called ");
 }
  render(){
    console.log("render function is called ");
    return(
      <>
        <h1>App component </h1>
        <Home />
      </>
    )
  }
}

console.log("__________________________________________________________________________");

import React from "react";
import axios from 'axios';
class App extends React.Component{
  state = {
    data : []
  }
 componentDidMount(){
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((res)=>{
    console.log(res.data);
    this.setState({data : res.data});

  }).catch((err)=>{
    console.log(err);
  })
 }
  render(){
    return(
      <>
        <h1>App component </h1>
        {
          this.state.data.map((item,i)=>{
            return <h4> {item.name} </h4>
          })
        }
      </>
    )
  }
}

console.log("__________________________________________________________________________");

import React from "react";

class App extends React.Component{
  state = {
    a : 1
  }
  changeState = () =>{
    this.setState({a : 1})
  }
  render(){
    console.log("render function is called ");
    return(
      <>
        <h1>App component </h1>
        <h2> a = {this.state.a} </h2>
        <button onClick={this.changeState}>change state</button>
      </>
    )
  }
}


console.log("__________________________________________________________________________");

import React from "react";

class App extends React.Component{
  state = {
    a : 1
  }
  changeState = () =>{
    this.setState({a : 2})
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log("shouldComponentUpdate is called before render function ");
    if(this.state.a !== nextState.a){
      return true;
    }else{
      return false;
    }
  }
  render(){
    console.log("render function is called ");
    return(
      <>
        <h1>App component </h1>
        <h2> a = {this.state.a} </h2>
        <button onClick={this.changeState}>change state</button>
      </>
    )
  }
}

console.log("__________________________________________________________________________");

import React from "react";

class App extends React.Component{
  state = {
    a : 1
  }
  changeState = () =>{
    this.setState({a : 2})
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log("shouldComponentUpdate is called before render function ");
    if(this.state.a !== nextState.a){
      return true;
    }else{
      return false;
    }
  }

  componentDidUpdate(){
    console.log("componentDidUpdate is called ");
  }
  
  render(){
    console.log("render function is called ");
    return(
      <>
        <h1>App component </h1>
        <h2> a = {this.state.a} </h2>
        <button onClick={this.changeState}>change state</button>
      </>
    )
  }
}


console.log("__________________________________________________________________________");


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

import React from "react";

class Home extends React.Component{
    render(){
        console.log("child component is render ")
        return(
            <>
                <h1>Home component </h1>
                <h2> home : a  = {this.props.a} </h2>
            </>
        )
    }
}

console.log("__________________________________________________________________________");

import React from "react";
class Home extends React.Component{
    shouldComponentUpdate(nextProps, nextState){
        if(this.props.a !== nextProps.a){
            return true
        }else{
            return false
        }
    }
    render(){
        console.log("child component is render ")
        return(
            <>
                <h1>Home component </h1>
                <h2> home : a  = {this.props.a} </h2>
            </>
        )
    }
}
console.log("__________________________________________________________________________");