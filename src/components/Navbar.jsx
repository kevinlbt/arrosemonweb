import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

export default function Navbar ({background}) {

    return <nav id="nav" className={`flex justify-between items-center ${background}`}>
        <h1 className="mx-3 sm:mx-12 xl:mx-16 text-right">arrose <span>mon web</span></h1>
        <ul className="mx-7 xl:mx-12 my-12 flex flex-wrap justify-end">
            <a href="/"><li className="hover_nav">accueil</li></a>
            <Link to="..#presta"><li className="hover_nav">prestations</li></Link>
            <a href="/apropos"><li className="hover_nav">a propos</li></a>
            <Link to="..#contact"><li className="hover_nav">contact</li></Link>
        </ul>
    </nav>
}
