import React, { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import Navbar from '../components/Navbar'
import Prestation from '../components/Prestation'
import HeaderTest from '../components/HeaderTest'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'



function StickyLogo ({stickyLogoAppear, background}) {

    return <div className={`sticky_logo ${stickyLogoAppear ? "sticky_appear" : null}`}>
        <p className={`${background === "white" ? "text-black" : "text-white"}`}><Link to="..#nav">AMW</Link></p>
    </div>
}

function Home() {

    const [background, setBackground] = useState("white")
    const [stickyLogoAppear, setStickyLogoAppear] = useState(false);


    const listenScrollEvent = (event) => {
        console.log(window.scrollY)
        if (window.scrollY < 130) {
             setStickyLogoAppear(false)
        } 
        if (window.scrollY > 130) {
            setStickyLogoAppear(true)
        }
        if (window.scrollY < 500) {
          return setBackground("white")
        } else if (window.scrollY > 500 && window.scrollY < 1500) {
          return setBackground("green")
        } else if (window.scrollY > 1500 && window.scrollY < 2300) {
          return setBackground("white")
        } else if (window.scrollY > 2300 && window.scrollY < 3400) {
          return setBackground("green")
        } else if (window.scrollY > 3400) {
          return setBackground("white")
        } 
      }
      
      useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
      
        return () =>
          window.removeEventListener('scroll', listenScrollEvent);
      }, []);

  return (
    <section className={`main_section ${background}`}>
        <StickyLogo stickyLogoAppear={stickyLogoAppear} background={background} />
        <Navbar background={background} />
        <HeaderTest />
        <Prestation background={background} />
        <Portfolio background={background} />
        <Contact background={background} />
    </section>
  )
}

export default Home