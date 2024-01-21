import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Prestation from '../components/Prestation'
import HeaderTest from '../components/HeaderTest'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'


function Home() {

    const [background, setBackground] = useState("white")

    const listenScrollEvent = (event) => {
        if (window.scrollY < 300) {
          return setBackground("white")
        } else if (window.scrollY > 300 && window.scrollY < 1500) {
          return setBackground("green")
        } else if (window.scrollY > 1500 && window.scrollY < 2300) {
          return setBackground("white")
        } else if (window.scrollY > 2300) {
          return setBackground("green")
        } 
      }
      
      useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
      
        return () =>
          window.removeEventListener('scroll', listenScrollEvent);
      }, []);

  return (
    <section className={`main_section ${background}`}>
        <Navbar background={background} />
        <HeaderTest />
        <Prestation background={background} />
        <Portfolio />
        <Contact />
    </section>
  )
}

export default Home