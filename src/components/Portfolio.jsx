import React, { useState, useEffect } from "react";
import jerem from "../assets/images/jerem.jpg"
import mkz from "../assets/images/mkz.png"
import { useElementOnScreen } from '../utils/useElementOnScreen'

function CardPortfolio ({img, texte, link, isVisible, appear}) {

    return <div className={`card_portfolio flex flex-col items-center my-10 mx-3 ${isVisible && appear ? "appear" : null}`}>
                <a href={link} target="_blank" rel="noreferrer"><img src={img} alt={img} /></a>
                <p className="my-5">{texte}</p>
            </div> 
}

export default function Portfolio ({background}) {

    const[firstCard, setFirstCard] = useState(false)
    const[secondCard, setSecondCard] = useState(false)

    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    })

    

        function handleScroll () {

            setFirstCard(true);

            if (containerRef.current !== null) {
        
                const cardRef = containerRef.current.children[0]
                if (cardRef.getBoundingClientRect().x < 300) {
                    setSecondCard(true)
                }
                if (cardRef.getBoundingClientRect().x > 300) {
                    setSecondCard(false)
                }
            }
        }
      
        useEffect(() => {
            const interval = setInterval(() => {
                handleScroll()
              }, 100);
              return () => clearInterval(interval);
            
          }, [containerRef, handleScroll]);
    
    

    return <section className={`portfolio w-4/5 mx-auto my-12 ${background === "white" ? "black_color" : "white_color"}`}>
        <h2 className="my-5 text-center sm:text-left">Notre travail</h2>
        <p className="my-3 sm:w-4/6 lg:w-2/6 text-center sm:text-left">View our portfolio and explore our pastel-inspired designs. We create websites that leave a lasting impression.</p>
        <div ref={containerRef} className="flex flex-col sm:flex-row justify-start items-start">
            <CardPortfolio appear={firstCard} isVisible={isVisible} img={jerem} link={"https://jeremypettre.com/"} texte="View our portfolio and explore our pastel-inspired designs. We create websites that leave a lasting impression." />
            <CardPortfolio appear={secondCard} isVisible={isVisible} img={mkz} link={"https://mkz.kevinlebot.com/"} texte="View our portfolio and explore our pastel-inspired designs. We create websites that leave a lasting impression." />
        </div>
    </section>
}