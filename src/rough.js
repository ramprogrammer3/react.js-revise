console.log("_________________________________________________________________________");

import About from './About'
class App extends React.Component{
  render(){
    return(
      <>
        <h1> App component </h1>
        <About />
      </>
    )
  }
}

class About extends React.Component{
    componentWillUnmount(){
        console.log(" componentWillUnmount is being called ");
    }
    render(){
        return(
            <>
                <h1>About  component </h1>
            </>
        )
    }
}

console.log("_________________________________________________________________________");

import About from './About'
class App extends React.Component{
  render(){
    return(
      <>
        <h1> App component </h1>
        <About />
      </>
    )
  }
}


class About extends React.Component{
    componentDidMount(){
        localStorage.setItem("month" , "may");
    }

    componentWillUnmount(){
        console.log(" componentWillUnmount is being called ");
        localStorage.clear("month");
    }
    render(){
        return(
            <>
                <h1>About  component </h1>
            </>
        )
    }
}

console.log("_________________________________________________________________________");

import React from 'react';
import axios from 'axios';
class App extends React.Component{
  componentDidMount(){
    axios.get("http://localhost:5000/books")
    .then((res)=>{
      console.log(res.data);
    })

  }
  render(){
    return(
      <>
        <h1> App component </h1>
      </>
    )
  }
}


console.log("_________________________________________________________________________");

import React from 'react';
import axios from 'axios';
class App extends React.Component{
  componentDidMount(){
    axios.get("http://localhost:5000/books/1")
    .then((res)=>{
      console.log(res.data);
    })
  }
  render(){
    return(
      <>
        <h1> App component </h1>
      </>
    )
  }
}

console.log("_________________________________________________________________________");

import React from 'react';
import axios from 'axios';
class App extends React.Component{

  data = {
    name : "palak",
    email : "palak7777@gmail.com"
  }

  componentDidMount(){
    axios.post("http://localhost:5000/books/",this.data)
    .then((res)=>{
      console.log(res.data);
    })
  }
  render(){
    return(
      <>
        <h1> App component </h1>
      </>
    )
  }
}

console.log("_________________________________________________________________________");

import React from 'react';
import axios from 'axios';
class App extends React.Component{

  data = {
    name : "rohan",
    email : "rohan7777@gmail.com"
  }

  componentDidMount(){
    axios.put("http://localhost:5000/books/4",this.data)
    .then((res)=>{
      console.log(res.data);
    })
  }
  render(){
    return(
      <>
        <h1> App component </h1>
      </>
    )
  }
}

console.log("_________________________________________________________________________");

import React from 'react';
import axios from 'axios';
class App extends React.Component{
  
  componentDidMount(){
    axios.delete("http://localhost:5000/books/5")
    .then((res)=>{
      console.log(res.data);
    })
  }
  render(){
    return(
      <>
        <h1> App component </h1>
      </>
    )
  }
}

console.log("_________________________________________________________________________");

import React from 'react';
class App extends React.Component{
  componentDidMount(){
    fetch("http://localhost:5000/books")
    .then((res)=>{
      return res.json();
    }).then((res2)=>{
      console.log(res2)
    })
  }
  render(){
    return(
      <>
        <h1> App component </h1>
      </>
    )
  }
}

console.log("_________________________________________________________________________");

import React from 'react';
class App extends React.Component{
  user = {
    name : "sudhir",
    email : "sudhir@gmail.com"
  }
  options = {
    method :"POST",
    headers : {
      'content-type' : "application/json"
    },
    body : JSON.stringify(this.user)
  }
  componentDidMount(){
    fetch("http://localhost:5000/books",this.options)
    .then((res)=>{
      return res.json();
    }).then((res2)=>{
      console.log(res2)
    }) 
  }
  render(){
    return(
      <>
        <h1> App component </h1>
      </>
    )
  }
}

console.log("_________________________________________________________________________");

import React from 'react';
class App extends React.Component{
  user = {
    name : "madhav",
    email : "madhav@gmail.com"
  }
  options = {
    method :"PUT",
    headers : {
      'content-type' : "application/json"
    },
    body : JSON.stringify(this.user)
  }
  componentDidMount(){
    fetch("http://localhost:5000/books/5",this.options)
    .then((res)=>{
      return res.json();
    }).then((res2)=>{
      console.log(res2)
    }) 
  }
  render(){
    return(
      <>
        <h1> App component </h1>
      </>
    )
  }
}
console.log("_________________________________________________________________________");

import React from 'react';
class App extends React.Component{
  
  options = {
    method :"delete",
    
  }
  componentDidMount(){
    fetch("http://localhost:5000/books/5",this.options)
    .then((res)=>{
      return res.json();
    }).then((res2)=>{
      console.log(res2)
    }) 
  }
  render(){
    return(
      <>
        <h1> App component </h1>
      </>
    )
  }
}
console.log("_________________________________________________________________________");


function App(){
    return(
      <>
        <h2> App component </h2>
      </>
    )
  }
  
console.log("_________________________________________________________________________");

import { useState } from "react";

function App(){
  const [data , setData] = useState({
    name : "rahul", age : 20
  })
  console.log(data);
  return(
    <>
      <h2> App component {data.name} </h2>
      <button onClick={()=>{
        setData({name : "ram"})
      }}>change state</button>
    </>
  )
} 

console.log("_________________________________________________________________________");

import { useState } from "react";

function App(){
  const [data , setData] = useState({
    name : "rahul", age : 20
  })
  console.log(data);
  return(
    <>
      <h2> App component {data.name} </h2>
      <button onClick={()=>{
        setData({...data,name : "ram"})
      }}>change state</button>
    </>
  )
} 

console.log("_________________________________________________________________________");