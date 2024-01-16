import React from "react";

export default function Navbar () {

    return <nav className="flex justify-between items-center">
        <h1 className="m-12">arrose mon web</h1>
        <ul className="m-12 flex text-red-300">
            <li>accueill</li>
            <li>prestations</li>
            <li>a propos</li>
            <li>contact</li>
            <li>test</li>
        </ul>
    </nav>
}
