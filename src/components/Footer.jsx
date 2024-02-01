import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

export default function Footer () {

    return <footer className="flex flex-col sm:flex-row justify-between items-center border-t-2 p-12">


        <h1 className="mx-3 sm:mx-12 xl:mx-16 text-right"><a className ="hover_title" href="/">arrose <span>mon web</span></a></h1>

        <div className="w-2/3 flex flex-col sm:flex-row justify-end items-center text-center">
            <div id="footerLogos" className="space-y-2 m-3 sm:m-8">
                <p className="transition transform hover:scale-125 motion-reduce:transition-none motion-reduce:hover:transform-none ..."><Link to="https://www.linkedin.com/company/arrosemonweb"><img src="/src/assets/images/linkedin.png"/></Link></p>
                <p className="transition transform hover:scale-125 motion-reduce:transition-none motion-reduce:hover:transform-none ..."><Link to="https://www.instagram.com/arrosemonweb/"><img src="/src/assets/images/insta.png"/></Link></p>
            </div>
            
            <div className="m-3 sm:m-8">
               <p className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ... hover:underline"><Link to="..#contact">Nous contacter</Link></p>
            </div>
            <div className="m-3 sm:m-8">
                <p className="transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none ... hover:underline"><Link to="..#presta">Nos prestations</Link></p>
                <p className="transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none ... hover:underline"><a href="/apropos">A propos</a></p>
                <p className="transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none ... hover:underline"><Link to="..#portfolio">Notre travail</Link></p>
                <p className="transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none ... hover:underline"><a href="/mentions">Mentions légales</a></p>
            </div>
        </div>
    </footer>
}