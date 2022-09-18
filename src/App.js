import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Books from './components/Books'
import Create from './components/Create'
import Header from './components/Header'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
            <Route path='/' element ={<Books />} />
            <Route path='/create' element = {<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App