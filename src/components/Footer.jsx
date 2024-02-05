import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import linkedin from "../assets/images/linkedin.png";
import insta from "../assets/images/insta.png";

export default function Footer () {

    return <footer className="flex flex-col sm:flex-row justify-between items-center border-t-2 p-12">


        <h1 className="mx-3 sm:mx-12 xl:mx-16 text-right"><a className ="hover_title" href="/">arrose <span>mon web</span></a></h1>

        <div className="w-2/3 flex flex-col sm:flex-row justify-end items-center text-center">
            <div id="footerLogos" className="space-y-2 m-3 sm:m-8">
                <p className="transition transform hover:scale-125 motion-reduce:transition-none motion-reduce:hover:transform-none ..."><Link to="https://www.linkedin.com/company/arrosemonweb" aria-current="page"><img src={linkedin} /></Link></p>
                <p className="transition transform hover:scale-125 motion-reduce:transition-none motion-reduce:hover:transform-none ..."><Link to="https://www.instagram.com/arrosemonweb/" aria-current="page"><img src={insta} /></Link></p>
            </div>
            
            <div className="m-3 sm:m-8">
               <p className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ... hover:underline"><Link to="..#contact">Nous contacter</Link></p>
            </div>
            <div className="m-3 sm:m-8">
                <p className="transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none ... hover:underline"><Link to="..#presta" aria-current="page">Nos prestations</Link></p>
                <p className="transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none ... hover:underline"><Link to="/apropos" aria-current="page">A propos</Link></p>
                <p className="transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none ... hover:underline"><Link to="..#portfolio" aria-current="page">Notre travail</Link></p>
                <p className="transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none ... hover:underline"><Link to="/mentions" aria-current="page">Mentions légales</Link></p>
            </div>
        </div>
    </footer>
}