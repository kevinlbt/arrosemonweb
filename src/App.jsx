import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/apropos' Component={About}/>    
      </Routes>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App
