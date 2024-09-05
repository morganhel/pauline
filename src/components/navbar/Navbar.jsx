import { NavLink } from "react-router-dom";

function Banner(){
    return(
        <nav>
            
            <ul className="nav">
                <li><NavLink to="/" className="nav__link">ACCUEIL</NavLink></li>
                <li><NavLink to="/#portfolio" className="nav__link">PORTFOLIO</NavLink></li>
                <li><NavLink to="/apropos#apropos" className="nav__link">A PROPOS</NavLink></li>
                <li><NavLink to="/apropos#seances" className="nav__link">SEANCES</NavLink></li>
                <li><NavLink to="/apropos#contact" className="nav__link">CONTACT</NavLink></li>
            </ul>
        </nav>
    )
}

export default Banner;