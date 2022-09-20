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

export default Header