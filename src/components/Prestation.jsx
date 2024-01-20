import React from "react";


function Card ({title, content , imageSource}) {

    return <div className="basis-1/4 flex flex-col justify-center my-5">
        <img src={imageSource}  />
        <h3>{title}</h3>
            <p>{content}</p>
    </div>

}


export default function Prestation () {

    return <div className="flex flex-col w-5/6 mx-auto my-36">
            


                <h2 className="my-2 py-5 border-y-2 ">nos prestations</h2>
                    
                <div className="flex justify-between border-b-2 ">
                    <Card imageSource="src/assets/images/create.jpg" title="Création de site web" content="Tell us about your project. Share your vision, goals, and requirements with us."/>
                    <Card imageSource="src/assets/images/seo.jpg" title="SEO" content="Let us create a stunning website that represents your brand. We'll bring your ideas to life."/>
                    <Card imageSource="src/assets/images/online.jpg" title="Mise en ligne" content="Launch your website. We'll ensure it's optimized for performance and ready to impress."/>
                </div>
            



    </div>
}
