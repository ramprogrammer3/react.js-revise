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

export default About