import React from "react";


export default function Navbar ({background}) {

    return <nav className={`flex justify-between items-center ${background}`}>
        <h1 className="mx-12 xl:mx-24">arrose mon web</h1>
        <ul className="mx-7 xl:mx-12 my-12 flex flex-wrap justify-end">
            <a href="/"><li className="hover_nav">accueil</li></a>
            <a href="/#presta"><li className="hover_nav">prestations</li></a>
            <a href="/apropos"><li className="hover_nav">a propos</li></a>
            <a href="/#contact"><li className="hover_nav">contact</li></a>
        </ul>
    </nav>
}
