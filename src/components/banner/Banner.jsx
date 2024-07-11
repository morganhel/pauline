import React from 'react';
import Logo from "../../assets/images/logo/logo.png";
import Bg from "../../assets/images/banner/paysage.PNG";
import Navbar from "../navbar/Navbar"

function Banner(){
    return(
        <section className='banner'>
            <img className='banner__bg' src={Bg} alt="paysage"/>
            <div className='banner__content'>
                <img className='banner__content--logo' src={Logo} alt='Logo Pauline Parey Photographe'/>
                <h1 className='banner__content--title'>PAULINE PAREY PHOTOGRAPHE</h1>
                <Navbar />
            </div>
        </section>
    )
}

export default Banner;