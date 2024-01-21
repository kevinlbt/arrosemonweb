import React from "react";
import Navbar from '../components/Navbar'
import kev from "../assets/images/kev.webp"
import alex from "../assets/images/alex.jpg"


function AboutCard ({name, titre, imageSrc, texte, way}) {

    return <div className={`card_about w-5/6 mx-auto flex justify-center items-center my-12 ${way ? "line_right" : "line_left"}`}>
            <div className={`w-1/3 flex flex-col ${way ? "order-1 items-end" : "order-first items-start"}`}>
                <h2 className={`${way ? "text-right" : null}`}>{name}</h2>
                <h3 className={`mb-5 ${way ? "text-right" : null}`}>{titre}</h3>
                <img src={imageSrc} alt={name} />
            </div>
            <p className="w-2/3">{texte}</p>
        </div>
}

export default function About () {

    return <React.Fragment>
        <Navbar />
        <section className="about_section py-12">
            <div className="flex">
                <span className=""></span>
                <h1 className="ml-24 my-12">A propos de nous</h1>
            </div>
            <div className="about_description w-5/6 flex mx-auto justify-between items-start my-24">
                <h2 className="w-2/4 text-left">qui sommes nous ?</h2>
                <div className="w-3/5">
                    <p className="mb-12">Nous sommes passionnés par la création de sites Web époustouflants pour nos clients.</p>
                    <p>Whether you need a simple portfolio website or a complex e-commerce platform, our team is here to bring your vision to life. With a focus on elegant design and seamless functionality, we strive to deliver exceptional websites that leave a lasting impression. Partner with us and experience the difference of working with a dedicated and talented web agency.</p>
                </div>
            </div>
            <AboutCard way={false} name={"Kevin le bot"} titre="co-fondateur & CEO" imageSrc={kev} texte={"Whether you need a simple portfolio website or a complex e-commerce platform, our team is here to bring your vision to life. With a focus on elegant design and seamless functionality, we strive to deliver exceptional websites that leave a lasting impression. Partner with us and experience the difference of working with a dedicated and talented web agency."} />
            <AboutCard way={true} name={"Alexandre Lhotellier"} titre="co-fondateur et responsable marketing" imageSrc={alex} texte={"Whether you need a simple portfolio website or a complex e-commerce platform, our team is here to bring your vision to life. With a focus on elegant design and seamless functionality, we strive to deliver exceptional websites that leave a lasting impression. Partner with us and experience the difference of working with a dedicated and talented web agency."} />    
        </section>
    </React.Fragment>
}