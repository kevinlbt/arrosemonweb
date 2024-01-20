import React from "react";


function Card ({title, content , imageSource}) {

    return <div className="basis-1/4">
        <img src={imageSource}  />
        <h3>{title}</h3>
            <p>{content}</p>
    </div>

}


export default function Prestation () {

    return <div className="flex flex-col">

            <h2 className="m-12">Prestations</h2>

            <div className="flex justify-center">
                <Card imageSource="src/assets/images/create.jpg" title="Création de site web" content="Lorem ipsum"/>
                <Card imageSource="src/assets/images/seo.jpg" title="SEO" content="Lorem ipsum"/>
                <Card imageSource="src/assets/images/online.jpg" title="Mise en ligne" content="Lorem ipsum"/>
            </div>
            
        


    </div>
}
