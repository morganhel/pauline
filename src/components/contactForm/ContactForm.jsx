import React, { useRef } from 'react';
import {useState} from 'react';
// import emailjs from '@emailjs/browser';

function Form() {
  const form = useRef();

  const [nom, setNom]=useState('');
  const [email, setEmail]=useState('');
  const [message, setMessage]=useState('');
  const [offre, setDemande]=useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm('portfolio_mail', 'portfolio_contact', form.current, {
    //     publicKey: '',
    //   })
    //   .then(
    //     () => {
    //       console.log('SUCCESS!');
    //     },
    //     (error) => {
    //       console.log('FAILED...', error.text);
    //     },
    //   );

    alert('Message envoyé avec succés');

    setNom('');setEmail('');setMessage('');setDemande('');
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='contactForm'>
      <div className='contactForm__content'>
        <input className='contactForm__content--input' type="text" name="nom" placeholder='NOM PRENOM' value={nom} onChange={(e)=>setNom(e.target.value)} required/>
        <input className='contactForm__content--input' type="email" name="email" placeholder='EMAIL' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        <input className='contactForm__content--input' type="demande" name="demande" placeholder='DEMANDE' value={email} onChange={(e)=>setDemande(e.target.value)} required/>
        <textarea className='contactForm__content--input' name="message" placeholder='MESSAGE' value={message} onChange={(e)=>setMessage(e.target.value)} required/>
        <input className='contactForm__content--input button' type="submit" value="ENVOYER" />
      </div>
    </form>
  );
};

export default Form;