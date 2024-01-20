import React from "react";


export default function Navbar () {

    return <nav className="flex justify-between items-center">
        <h1 className="w-2/6 lg:w-1/6 mx-24">arrose mon web</h1>
        <ul className="m-12 flex flex-wrap">
            <li className="hover_nav">accueil</li>
            <li className="hover_nav">prestations</li>
            <li className="hover_nav">a propos</li>
            <li className="hover_nav">contact</li>
        </ul>
    </nav>
}
