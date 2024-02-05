import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

export default function Navbar ({background}) {

    return <nav id="nav" className={`flex justify-between items-center ${background}`}>
        <h1 className="mx-3 sm:mx-12 xl:mx-16 text-right">arrose <span>mon web</span></h1>
        <ul className="mx-7 xl:mx-12 my-12 flex flex-wrap justify-end">
            <li className="hover_nav"><Link to="/" aria-current="page">accueil</Link></li>
            <li className="hover_nav"><Link to="..#presta" aria-current="page">prestations</Link></li>
            <li className="hover_nav"><Link to="/apropos" aria-current="page">a propos</Link></li>
            <li className="hover_nav"><Link to="..#contact" aria-current="page">contact</Link></li>
        </ul>
    </nav>
}
