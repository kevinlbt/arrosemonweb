import React, { useEffect, useState } from "react";
import header1 from "../assets/images/pctest3.webp"
import { HashLink as Link } from 'react-router-hash-link';


export default function Header () {

    const [headerImageAppear, setHeaderImageAppear] = useState(false)

    useEffect(() => {
        setHeaderImageAppear(true)
      }, []);

      const listenScrollEvent = (event) => {
        if (window.scrollY < 600) {
          return setHeaderImageAppear(true)
        } else if (window.scrollY > 600) {
          return setHeaderImageAppear(false)
        } 
      }
      
      useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
      
        return () =>
          window.removeEventListener('scroll', listenScrollEvent);
      }, []);

    return <header className="flex justify-center items-center my-12">
        <div className="w-2/3 flex flex-col justify-center items-center pb-5">
            <h2 className="sm:w-3/4 text-center mx-5 mt-5 lg:mb-5">Donnons vie à vos</h2>
            <div className="content">
                <div className="content__container">
                    <ul className="content__container__list">
                        <li className="content__container__list__item">projets </li>
                        <li className="content__container__list__item">envies </li>
                        <li className="content__container__list__item">idées </li>
                        <li className="content__container__list__item">objectifs</li>
                    </ul>
                </div>
            </div>
            <Link to="#contact" aria-label="nous contacter"><button className="mt-8 lg:mt-0 button_contact "><span>Contactez-nous</span></button></Link>
        </div>
        <img className={`w-2/5 header1 ${headerImageAppear ? "header1_appear" : null}`} src={header1} alt="header with tablet and website" />
    </header>
}