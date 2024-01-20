import React from 'react'
import Navbar from './components/Navbar'

import Prestation from './components/Prestation'

import Header from './components/Header'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  return (
    <>

      <Navbar />
      <Prestation />

        <Navbar />
        <Header />
        <Portfolio />
        <Contact />
        <Footer />

    </>
  )
}

export default App
