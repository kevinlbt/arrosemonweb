import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Mentions from './pages/Mentions'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/apropos' Component={About}/> 
        <Route path='/mentions' Component={Mentions}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
