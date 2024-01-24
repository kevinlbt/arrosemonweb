import React from "react";

export default function Footer () {

    return <footer className="flex flex-col sm:flex-row justify-between items-center border-t-2 p-12">
        <h1 className="mx-3 sm:mx-12 xl:mx-16 text-right">arrose <span>mon web</span></h1>
        <div className="w-2/3 flex flex-col sm:flex-row justify-end items-center text-center">
            <div className="m-3 sm:m-8">
                <h4>Social</h4>
                <p>linkedin</p>
                <p>github</p>
            </div>
            <div className="m-3 sm:m-8">
               <p>Get in touch</p>
            </div>
            <div className="m-3 sm:m-8">
                <p>Nos prestations</p>
                <p>A propos</p>
                <p>Notre travail</p>
                <a href="/mentions"><p>Mentions légales</p></a>
            </div>
        </div>
    </footer>
}