import React from "react";
import jerem from "../assets/images/jerem.jpg"
import mkz from "../assets/images/mkz.png"

function CardPortfolio ({img, texte, link}) {

    return <div className="card_portfolio flex flex-col sm:flex-row items-center my-10">
                <a href={link} target="_blank" rel="noreferrer"><img src={img} alt={img} /></a>
                <p className="w-2/3 my-5 sm:my-0 sm:w-1/3 ml-10 lg:ml-24">{texte}</p>
            </div> 
}

export default function Portfolio () {

    return <section className="portfolio w-4/5 mx-auto my-12">
        <h2 className="my-5">Notre travail</h2>
        <p className="my-3 w-4/6 lg:w-2/6">View our portfolio and explore our pastel-inspired designs. We create websites that leave a lasting impression.</p>
        <div className="flex flex-col justify-center items-start">
            <CardPortfolio img={jerem} link={"https://jeremypettre.com/"} texte="View our portfolio and explore our pastel-inspired designs. We create websites that leave a lasting impression." />
            <CardPortfolio img={mkz} link={"https://mkz.kevinlebot.com/"} texte="View our portfolio and explore our pastel-inspired designs. We create websites that leave a lasting impression." />
        </div>
    </section>
}