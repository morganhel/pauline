import React from 'react';
import Header from '../components/header/Header';
import Portrait from '../assets/images/apropos/portrait.jpg';
import Card from '../components/card/Card';
import Seances from '../assets/data/seances.json';
import ContactForm from '../components/contactForm/ContactForm';
import { NavLink } from "react-router-dom";
import FB from '../assets/images/apropos/logo/facebook.png';
import Insta from '../assets/images/apropos/logo/Instagram.webp';


function Apropos() {
    return (
        <>
        <main>
            <Header />
                <section className='apropos'>
                    <h2>A PROPOS</h2>
                    <div className='apropos__content'>
                        <img src={Portrait}  className='apropos__content__photo' alt='Portrait de Pauline'/>
                        <div className='apropos__content__txt'>
                            <h3 className='apropos__content__txt--title'>Bienvenue ici, moi c'est Pauline</h3>
                            <p className='apropos__content__txt--p'>Jeune photographe professionnelle et fière maman depuis un an. Ayant grandi à Omonville, mon cœur a toujours été proche de la mer et de la nature. Ces paysages maritimes époustouflants ont nourri mon amour pour la photographie depuis mon enfance.
                            <br /><br />Passionnée par la photographie depuis toujours, j'ai décidé de transformer cette passion en profession il y a un an. Mon style se caractérise par une touche bohème, inspirée par la beauté naturelle qui m'entoure. J'adore capturer des moments authentiques et spontanés, en mettant l'accent sur l'émotion et la connexion humaine.
                            <br /><br />Ce que j'aime le plus dans mon métier, c'est le contact avec les gens. Chaque séance photo est une nouvelle aventure et une opportunité de rencontrer des personnes merveilleuses. Je m'efforce de créer un environnement détendu et agréable, afin que chacun se sente à l'aise devant l'objectif.
                            <br /><br />Je suis très sensible et les retours positifs de mes clients sont une source immense de joie pour moi. Savoir que mes photos apportent du bonheur et capturent des souvenirs précieux est la plus belle des récompenses.
                            <br /><br />Ensemble, nous pouvons créer des images qui raconteront votre histoire avec authenticité et émotion.</p>
                        </div>
                    </div>
                    <div>
                    <p className='apropos__details apropos__details--color'>Si ce n’est pas déjà fait tu peux jeter un oeil à mon portfolio juste <NavLink to="/" className='apropos__details--link apropos__details--link--color'>ICI</NavLink>.</p>
                    <p className='apropos__details'>Et si mon univers te plaît, <NavLink to="/apropos#contact" className='apropos__details--link'>CONTACT MOI</NavLink> et nous discuterons de tes envies. </p>
                    </div>
                </section>
                <section className='seances'>
                    <h2>SEANCES</h2>
                    <div className='seances__content'>
                        {Seances.map((seance)=>{
                            return (
                            <Card 
                                key={seance.title} 
                                title={seance.title} 
                                txt1={seance.txt1}
                                txt2={seance.txt2}
                                img={seance.img} 
                                isNoBg={seance.id % 2 === 0}
                                />
                            )
                        })}
                    </div>
                </section>
                <section className='contact' id="contact">
                    <h2 className='contact__title'>CONTACT</h2>
                    <div className='contact__content'>
                        <ContactForm />
                        <div className='contact__content__social'>
                            <h3 className='contact__content__social--title'>RETROUVEZ-MOI ICI AUSSI</h3>
                            <div className='contact__content__social--links'>
                                <a href='https://www.facebook.com/Paulineepry?locale=fr_FR'>
                                    <img src={FB} alt='logo facebook'/>
                                </a>
                                <a  href='https://www.instagram.com/paulineparey.photographie?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' >
                                    <img src={Insta} alt='logo insta'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
        </main>
        </>
    )
}

export default Apropos;