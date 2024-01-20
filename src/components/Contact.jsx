import React from "react";

export default function Contact () {

    return <section className="contact w-4/5 mx-auto my-12">
        <h3 className="text-center">Contact</h3>
        <p className="w-1/3 mx-auto text-center">Get in touch with us. We're ready to help you 
            find the best solutions.</p>
        <form action="submit" className="my-5 flex flex-col justify-center items-center">
            <input className="m-7 block border-0 py-4" type="text" name="name" placeholder="  nom" />
            <input className="m-7 block border-0 py-4" type="email" name="email" placeholder=" Email" />
            <input className="m-7 block border-0 py-4" type="subject" name="subject" placeholder=" Sujet" />
            <textarea className="m-5 block border-0 py-4" name="message" rows="7" placeholder=" Votre message ..."/>
            <button className="button_contact my-12"><span>envoyer</span></button>
        </form>
        <div className="infos_contact flex justify-center items-center">
            <div className="m-12">
                <h4 className="my-4">Appelez-nous</h4>
                <p>450 233 3986</p>
                <p>450 567 4589</p>
            </div>
            <div className="m-12">
                <h4 className="my-4">Envoyez-nous un email</h4>
                <p>kev.arrosemonweb@gmail.com</p>
                <p>alex.arrosemonweb@gmail.com</p>
            </div>
        </div>
    </section>
}