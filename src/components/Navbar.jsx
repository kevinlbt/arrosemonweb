import React from "react";


export default function Navbar ({background}) {

    return <nav className={`flex justify-between items-center ${background}`}>
        <h1 className="mx-24">arrose mon web</h1>
        <ul className="m-12 flex flex-wrap">
            <a href="/"><li className="hover_nav">accueil</li></a>
            <a href="/#presta"><li className="hover_nav">prestations</li></a>
            <a href="/apropos"><li className="hover_nav">a propos</li></a>
            <a href="/#contact"><li className="hover_nav">contact</li></a>
        </ul>
    </nav>
}
