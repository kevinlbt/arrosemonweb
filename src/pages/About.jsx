import React from "react";
import Navbar from '../components/Navbar'
import kev from "../assets/images/kev.webp"
import alex from "../assets/images/alex.jpg"


function AboutCard ({name, titre, imageSrc, texte, way}) {

    return <div className={`card_about w-5/6 mx-auto flex flex-col sm:flex-row justify-center items-center my-12 ${way ? "line_right" : "line_left"}`}>
            <div className={`sm:w-2/4 lg:w-1/3 flex flex-col ${way ? "sm:order-1 items-end" : "order-first items-start"}`}>
                <h2 className={`${way ? "text-right" : null}`}>{name}</h2>
                <h3 className={`mb-5 ${way ? "text-right" : null}`}>{titre}</h3>
                <img src={imageSrc} alt={name} />
            </div>
            <p className="self-center sm:self-end lg:self-center sm:w-2/5 lg:w-2/3 my-5 sm:my-0">{texte}</p>
        </div>
}

export default function About () {

    return <React.Fragment>
        <Navbar />
        <section className="about_section py-12">
            <div className="flex justify-start">
                <span className=""></span>
                <h3 className="ml-12 sm:ml-24 my-12">A propos de nous</h3>
            </div>
            <div className="about_description w-5/6 flex flex-col sm:flex-row mx-auto justify-between items-start my-24">
                <h2 className="w-2/4 my-5 sm:my-o text-left">Qui sommes nous ?</h2>
                <div className="sm:w-3/5">
                    <p className="mb-12">Nous sommes passionnés par la création de sites Web époustouflants pour nos clients.</p>
                    <p>Les idées sont comme les plantes, il faut prendre le temps de les comprendre, de leur donner de la lumière et de les arroser. Avec <strong>arrosemonweb</strong>, nous vous aidons à développer vos idées afin de les aider à germer pour qu’elles deviennent florissantes. Arrose ton idée avec arrosemonweb et mets en avant ton commerce florissant.</p>
                </div>
            </div>
            <AboutCard way={false} name={"Kevin le bot"} titre="co-fondateur" imageSrc={kev} texte={"Le geek photographe - Le premier membre de l’équipe, Kévin, un breton expatrié en terre québécoise. Il sera là pour adapter votre site web à vos besoins. Passionné de photos et de jeux vidéo, son œil d’artiste affûté et son souci du détail lui permettent de vous concocter des interfaces aux petits oignons. Tel un chef cuisinier, il saura trouver la recette parfaite en ajoutant une bonne dose de créativité, de fonctionnalité et de flair visuel."} />
            <AboutCard way={true} name={"Alexandre Lhotellier"} titre="co-fondateur" imageSrc={alex} texte={"Le sportif un peu (beaucoup) geek - Le second membre de l’équipe, Alex, un autre breton également expatrié en terre québécoise. Lui c’est le sportif, toujours prêt à se surpasser et se donner pour son équipe. Après plusieurs années dans le milieu bancaire, il a voulu mettre à profit ses compétences d’analyse et de gestion pour aider les entreprises à se démarquer sur le web. Sa communication et son rire communicatif vous aideront à mettre des mots sur vos idées. Il saura vous accompagner tout au long de votre projet pour avoir un site correspondant à votre image."} />    
        </section>
    </React.Fragment>
}