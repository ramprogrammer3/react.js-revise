console.log("____________________________________________________________________");

import { BrowserRouter ,Routes, Route  } from "react-router-dom"
import About from "./About"
import Details from "./Details"
import Home from "./Home"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about"  element = {<About />} />
          <Route path="/detail" element = {<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

console.log("____________________________________________________________________");


import { BrowserRouter ,Routes, Route, Link  } from "react-router-dom"
import About from "./About"
import Details from "./Details"
import Home from "./Home"
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to= "/">Home</Link>
        <Link to= "/about">about</Link>
        <Link to= "/detail">details</Link>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about"  element = {<About />} />
          <Route path="/detail" element = {<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

console.log("____________________________________________________________________");


import { BrowserRouter ,Routes, Route } from "react-router-dom"
import About from "./About"
import Details from "./Details"
import Header from "./Header"
import Home from "./Home"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about"  element = {<About />} />
          <Route path="/detail" element = {<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


console.log("____________________________________________________________________");

import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
  return (
    <header className='header'>
        <Link to= "/">Home</Link>
        <Link to= "/about">about</Link>
        <Link to= "/detail">details</Link>
    </header>
  )
}

console.log("____________________________________________________________________");

import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>Home page </h1>
      <Link to= "/"> <button>go to home page </button></Link>
    </div>
  )
}

console.log("____________________________________________________________________");


import React from 'react'
import {  useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  function goToHomePage(){
    navigate("/")
  }
  return (
    <div>
      <h1>Home page </h1>
       <button onClick={goToHomePage}>go to home page </button>
    </div>
  )
}

console.log("____________________________________________________________________");

import { useState } from "react"
import { BrowserRouter ,Routes, Route } from "react-router-dom"
import About from "./About"
import Details from "./Details"
import Header from "./Header"
import Home from "./Home"
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  function LoginStatusButton(){
    if(isLoggedIn === true){
      return <button onClick={()=>setIsLoggedIn(false)}> Logout </button>
    }else{
      return <button onClick={()=> setIsLoggedIn(true)}>Login</button>
    }
  }
  return (
    <div>
      <BrowserRouter>
      <Header />
      <LoginStatusButton />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about"  element = {<About />} />
          <Route path="/detail" element = {<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

console.log("____________________________________________________________________");

import { useState } from "react"
import { BrowserRouter ,Routes, Route, Navigate } from "react-router-dom"
import About from "./About"
import Details from "./Details"
import Header from "./Header"
import Home from "./Home"
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  function LoginStatusButton(){
    if(isLoggedIn === true){
      return <button onClick={()=>setIsLoggedIn(false)}> Logout </button>
    }else{
      return <button onClick={()=> setIsLoggedIn(true)}>Login</button>
    }
  }
  return (
    <div>
      <BrowserRouter>
      <Header />
      <LoginStatusButton />
        <Routes>
          <Route path="/" element = { <Home />} />
          <Route path="/about"  element = {isLoggedIn === true ? <About /> : <Navigate to= "/" />} />
          <Route path="/detail" element = { isLoggedIn === true ?  <Details /> : <Navigate to= "/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

console.log("____________________________________________________________________");

import { useState } from "react"
import { BrowserRouter ,Routes, Route, Navigate } from "react-router-dom"
import About from "./About"
import Details from "./Details"
import Header from "./Header"
import Home from "./Home"
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  function LoginStatusButton(){
    if(isLoggedIn === true){
      return <button onClick={()=>setIsLoggedIn(false)}> Logout </button>
    }else{
      return <button onClick={()=> setIsLoggedIn(true)}>Login</button>
    }
  }
  return (
    <div>
      <BrowserRouter>
      <Header />
      <LoginStatusButton />
        <Routes>
          <Route path="/" element = { <Home />} />
          <Route path="/about"  element = {isLoggedIn === true ? <About /> : <Navigate to= "/" />} />
          <Route path="/detail" element = { isLoggedIn === true ?  <Details /> : <Navigate to= "/" />} />
          <Route path="*" element = {<h1> 404 page not found </h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

console.log("____________________________________________________________________");

import React, { useEffect, useState } from 'react';
const App = () => {
  const [state, setState] = useState(true);

  useEffect(()=>{
    console.log("useEffect is called ");
  })

  const changeState = () =>{
    setState(!state)
  }
  return (
    <div>
      <h1>App components state = {state.toString()} </h1>
      <button onClick={changeState}>change state </button>
    </div>
  )
}

console.log("____________________________________________________________________");

import React, { useEffect, useState } from 'react';
const App = () => {
  const [state, setState] = useState(true);

  useEffect(()=>{
    console.log("useEffect is called ");
  },[])

  const changeState = () =>{
    setState(!state)
  }
  return (
    <div>
      <h1>App components state = {state.toString()} </h1>
      <button onClick={changeState}>change state </button>
    </div>
  )
}
console.log("____________________________________________________________________");

import React, { useEffect } from 'react';
function Home1(){
  useEffect(()=>{
    console.log("useEffect is called in home1 components ");
    return ()=> {console.log("HOme1 component is being unmounted ")}
  },[])
  return(
    <>
      <h1> Home 1 components </h1>
    </>
  )
}

const App = () => {
  return (
    <div>
      <h1>App components</h1>
      <Home1 />
    </div>
  )
}

console.log("____________________________________________________________________");



console.log("____________________________________________________________________");