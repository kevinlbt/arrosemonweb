import React from "react";
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

export default function Footer () {

    return <footer className="flex flex-col sm:flex-row justify-between items-center border-t-2 p-12">
        <h1 className="w-2/6 lg:w-1/6 sm:mx-12 lg:mx-24"><a className ="hover_title" href="/">arrose mon web</a></h1>
        <div className="w-2/3 flex flex-col sm:flex-row justify-end items-center text-center">
            <div className="m-3 sm:m-8">
                <p>Linkedin</p>
                <p>Instagram</p>
                <p>Facebook</p>
            </div>
            
            <div className="m-3 sm:m-8">
                <p><Link to="..#presta">Nos prestations</Link></p>
                <p><a href="/apropos">A propos</a></p>
                <p><Link to="..#portfolio">Notre travail</Link></p>
            </div>
        </div>
    </footer>
}