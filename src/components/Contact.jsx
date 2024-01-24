import React, { useState } from "react";
import axios from 'axios';
import DOMPurify from 'dompurify';
import Cookies from 'js-cookie';

const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

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

    return <section id="contact" className={`contact w-4/5 mx-auto py-12 ${background === "white" ? "black_color" : "white_color"}`}>
        <h3 className="text-center">Contact</h3>
        <p className="contact_text w-2/3 sm:w-1/3 mx-auto text-center">Get in touch with us. We're ready to help you 
            find the best solutions.</p>
        <form onSubmit={handleSubmit} className="my-5 flex flex-col justify-center items-center">
            <div class="user-box m-5">
                <input onChange={HandleNameChange} type="text" name="name" required/>
                <label>Nom</label>
            </div>
            <div class="user-box m-5">
                <input onChange={HandleFirstnameChange} type="text" name="name" required/>
                <label>Prénom</label>
            </div>
            <div class="user-box m-5">
                <input onChange={HandleEmailChange} type="email" name="name" required/>
                <label>Email</label>
            </div>
            <div class="user-box m-5">
                <input onChange={HandleSubjectChange} type="text" name="name" required/>
                <label>Sujet</label>
            </div>
            <div class="user-box m-5">
                <textarea onChange={HandleMessageChange}  type="text" name="message" rows="7" required/>
                <label>Votre message</label>
            </div>
            {IfMailSend ? <p className={`text-4xl text-center h-9 mb-5 ${ifError ? "text-red-500" : "text-green-500"}`}>{mailResponse}</p> : <p className="h-9"></p>}
            <button type="submit" className="button_contact mb-12"><span>envoyer</span></button>
        </form>
        <div className={`infos_contact flex flex-col sm:flex-row justify-center items-center m-12 ${background === "white" ? "white_back" : "black_back"}`}>
            <div className="text-center m-5 lg:m-12">
                <h4 className="my-4">Appelez-nous</h4>
                <p>450 233 3986</p>
                <p>450 567 4589</p>
            </div>
            <div className="m-5 text-center lg:m-12">
                <h4 className="my-4">Envoyez-nous un email</h4>
                <p>kev.arrosemonweb@gmail.com</p>
                <p>alex.arrosemonweb@gmail.com</p>
            </div>
        </div>
    </section>
}