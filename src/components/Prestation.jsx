import React from "react";
import { useElementOnScreen } from '../utils/useElementOnScreen'


function Card ({title, content , imageSource, isVisible, pos}) {

    return <div className={`${pos} basis-1/4 flex flex-col justify-center my-5 ${isVisible ? "appear" : null}`}>
        <img src={imageSource}  />
        <h3 className="my-3">{title}</h3>
            <p>{content}</p>
    </div>
}

export default function Prestation ({background}) {

    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    })

    return <div id="presta" className="presta flex flex-col px-40 my-36">
            
                <h2 className={`my-2 py-5 border-y-2 transition-colors ${background === "white" ? "border-grey" : "border-white"}`}>nos prestations</h2>
                    
                <div ref={containerRef} className={`flex justify-between border-b-2 transition-colors ${background === "white" ? "border-grey" : "border-white"}`}>
                    <Card pos="left" isVisible={isVisible} imageSource={"src/assets/images/create.jpg"} title="Création de site web" content="Tell us about your project. Share your vision, goals, and requirements with us."/>
                    <Card pos="bot" isVisible={isVisible} imageSource={"src/assets/images/seo.jpg"} title="SEO" content="Let us create a stunning website that represents your brand. We'll bring your ideas to life."/>
                    <Card pos="right" isVisible={isVisible} imageSource={"src/assets/images/online.jpg"} title="Mise en ligne" content="Launch your website. We'll ensure it's optimized for performance and ready to impress."/>
                </div>
        
    </div>
}
