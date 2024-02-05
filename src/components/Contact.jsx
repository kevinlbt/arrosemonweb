import React, { useState } from "react";
import axios from 'axios';
import DOMPurify from 'dompurify';
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";
import paper from "../assets/images/paper.png"

const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            className="transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:hover:transform-none ... hover:underline"
            aria-label={`envoyer mail a cette address ${label}`}
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};


export default function Contact ({background}) {

    const cookieExists = Cookies.get('contacted');

    const [IfMailSend, setIfMailSend] = useState(false);
    const [mailResponse, setMailResponse] = useState(null);
    const [ifError, setIfError] = useState(false);
    const [name, setName] = useState('');
    const [firstname, setFirstname] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');
    const [replyTo, setReplyTo] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!replyTo || !name || !text || !subject) {
        setMailResponse("Veuillez remplir tous les champs.");
        setIfMailSend(true);
        setIfError(true);
        return;
      }
      if (!isValidEmail(replyTo)) {
        setMailResponse("Veuillez saisir une adresse email valide");
        setIfMailSend(true);
        setIfError(true);
        return;
      }
  
      if (cookieExists) {
        setMailResponse('Vous nous avez deja contacter, essayer plus tard.');
        setIfMailSend(true);
        setIfError(true);
        return;
      }
  
      const sanitizeName = DOMPurify.sanitize(name);
      const sanitizeFirstname = DOMPurify.sanitize(firstname);
      const sanitizeSubject = DOMPurify.sanitize(subject);
      const sanitizeText = DOMPurify.sanitize(text);
      const sanitizeReplyTo = DOMPurify.sanitize(replyTo);
  
      const data = {
        name: sanitizeName,
        firstname: sanitizeFirstname,
        subject: sanitizeSubject,
        text: sanitizeText,
        replyTo: sanitizeReplyTo
      };
  
      try {
        const response = await axios.post('https://email.api.kevinlebot.com/api/sendEmail', data, {
          headers: {
            'authorization': AUTH_TOKEN,
            'dest': "kev.arrosemonweb@gmail.com",
          }
        });
        setIfError(false);
        setIfMailSend(true)
        setMailResponse(response.data)
        console.log(response.data)
        Cookies.set('contacted', true, { expires: 1 });
      } catch (error) {
        console.error(error);
  
      }
    };
  
    function HandleNameChange(e) {
      setName(e.target.value);
    }
    function HandleFirstnameChange(e) {
        setFirstname(e.target.value);
    }
    function HandleEmailChange(e) {
      setReplyTo(e.target.value);
    }
    function HandleSubjectChange(e) {
      setSubject(e.target.value);
    }
    function HandleMessageChange(e) {
      setText(e.target.value);
    }

    return <section id="contact" className={`contact sm:w-4/5 mx-auto py-12 ${background === "white" ? "black_color" : "white_color"}`}>
        <h3 className="text-center">Contact</h3>
        <p className="contact_text w-2/3 sm:w-1/3 mx-auto text-center">Contactez-nous pour plus d'informations.</p>
        <div className="paper">
            <img src={paper} alt={paper} />
        </div>
        <form onSubmit={handleSubmit} className="my-5 flex flex-col justify-center items-center">
            <div className="user-box m-5">
                <input className="black_color_input" aria-label="nom" onChange={HandleNameChange} type="text" id="name" required/>
                <label htmlFor="name" className="black_color_label">Nom</label>
            </div>
            <div className="user-box m-5">
                <input className="black_color_input" aria-label="prénom" onChange={HandleFirstnameChange} type="text" id="firstname" required/>
                <label htmlFor="firstname" className="black_color_label">Prénom</label>
            </div>
            <div className="user-box m-5">
                <input className="black_color_input" aria-label="email" onChange={HandleEmailChange} type="email" id="email" required/>
                <label htmlFor="email" className="black_color_label">Email</label>
            </div>
            <div className="user-box m-5">
                <input className="black_color_input" aria-label="sujet" onChange={HandleSubjectChange} type="text" id="sujet" required/>
                <label htmlFor="sujet" className="black_color_label">Sujet</label>
            </div>
            <div className="user-box m-5">
                <textarea className="black_color_input" aria-label="message" onChange={HandleMessageChange}  type="text" id="message" rows="7" required/>
                <label htmlFor="message" className="black_color_label">Votre message</label>
            </div>
            {IfMailSend ? <p className={`text-4xl text-center h-9 mb-5 ${ifError ? "text-red-500" : "text-green-500"}`}>{mailResponse}</p> : <p className="h-9"></p>}
            <button type="submit" className="button_contact mb-12"><span>Envoyer</span></button>
        </form>
        <div className="paper2">
            <img src={paper} alt={paper} />
        </div>
        <div className={`infos_contact flex flex-col sm:flex-row justify-center items-center m-4 sm:m-12 ${background === "white" ? "white_back" : "black_back"}`}>
            <div className="text-center m-5 lg:m-12">
                <h4 className="my-4">Appelez-nous</h4>
                <p className="my-5">(438)-802-2763</p>
            </div>
            <div className="m-5 text-center lg:m-12">
                <h4 className="my-4">Envoyez-nous un email</h4>
                <div className="flex flex-col">
                    <ButtonMailto label="kev.arrosemonweb@gmail.com" mailto="mailto:kev.arrosemonweb@gmail.com" />
                    <ButtonMailto label="alex.arrosemonweb@gmail.com" mailto="mailto:alex.arrosemonweb@gmail.com" />
                </div>
            </div>
        </div>
    </section>
}