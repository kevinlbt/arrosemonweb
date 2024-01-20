import React from "react";
import header1 from "../assets/images/header_image1.jpg"
import header2 from "../assets/images/header_image2.jpg"


export default function Header () {

    return <header className="flex flex-col justify-center items-center my-12">
        <img className="header1" src={header1} alt="header1" />
        <h1 className="w-2/4 text-center m-5">Donnons vie à vos projets</h1>
        <button className="button_contact "><span>Contacter-nous</span></button>
        <img className="header2"  src={header2} alt="header2" />
    </header>
}