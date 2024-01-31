import React from "react";
import { useElementOnScreen } from '../utils/useElementOnScreen'


function Card ({title, content , imageSource, isVisible, pos}) {

    return <div className={`${pos} basis-1/4 justify-center items-center flex flex-col sm:flex-row lg:flex-col my-10 ${isVisible ? "appear" : null}`}>
        <img className="order-3 lg:order-1" src={imageSource}  />
        <div className="order-1 lg:order-2">
            <h3 className="my-3">{title}</h3>
            <p className="my-8 sm:my-3">{content}</p>
        </div>
    </div>
}

export default function Prestation ({background}) {

    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    })

    return <div id="presta" className={`presta flex flex-col px-4 sm:px-20 lg:px-40 my-12 lg:my-36 ${background === "white" ? "black_color" : "white_color"}`}>
            
                <h2 className={`my-2 py-5 border-y transition-colors ${background === "white" ? "border-grey" : "border-white"}`}>Nos prestations</h2>
                    
                <div ref={containerRef} className={`flex flex-col lg:flex-row justify-between items-start border-b transition-colors ${background === "white" ? "border-grey" : "border-white"}`}>
                    <Card pos="left" isVisible={isVisible}  title="1 - Création de site web" content="Tell us about your project. Share your vision, goals, and requirements with us."/>
                    <Card pos="bot" isVisible={isVisible}  title="2 - Optimisation du SEO" content="Let us create a stunning website that represents your brand. We'll bring your ideas to life."/>
                    <Card pos="right" isVisible={isVisible}  title="3 - Hébergement" content="Launch your website. We'll ensure it's optimized for performance and ready to impress."/>
                </div>
        
    </div>
}
