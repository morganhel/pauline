import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Logo from '../../assets/images/logo/logo-header.png'

function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src={Logo} alt='logo'/>
            <div className='header__nav'>
                <Navbar />
            </div>
        </div>
    )
}

export default Header;