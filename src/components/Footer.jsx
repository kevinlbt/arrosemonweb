import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

export default function Footer () {

    return <footer className="flex flex-col sm:flex-row justify-between items-center border-t-2 p-12">


        <h1 className="mx-3 sm:mx-12 xl:mx-16 text-right"><a className ="hover_title" href="/">arrose <span>mon web</span></a></h1>

        <div className="w-2/3 flex flex-col sm:flex-row justify-end items-center text-center">
            <div className="m-3 sm:m-8">
                <p>Linkedin</p>
                <p>Instagram</p>
                <p>Facebook</p>
            </div>
            
            <div className="m-3 sm:m-8">
               <p>Get in touch</p>
            </div>
            <div className="m-3 sm:m-8">
                <p><Link to="..#presta">Nos prestations</Link></p>
                <p><a href="/apropos">A propos</a></p>
                <p><Link to="..#portfolio">Notre travail</Link></p>
                <a href="/mentions"><p>Mentions légales</p></a>
            </div>
        </div>
    </footer>
}