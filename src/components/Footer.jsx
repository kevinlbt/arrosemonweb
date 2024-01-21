import React from "react";

export default function Footer () {

    return <footer className="flex justify-between items-center border-t-2 p-12">
        <h1 className="w-2/6 lg:w-1/6 mx-24">arrose mon web</h1>
        <div className="w-2/3 flex justify-end items-center">
            <div className="m-8">
                <h4>Social</h4>
                <p>linkedin</p>
                <p>github</p>
            </div>
            <div className="m-8">
               <p>Get in touch</p>
            </div>
            <div className="m-8">
                <p>Nos prestations</p>
                <p>A propos</p>
                <p>Notre travail</p>
            </div>
        </div>
    </footer>
}