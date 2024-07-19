import { NavLink } from "react-router-dom";

function Card({img,title,txt1,txt2,isNoBg}) {

    return (
        <article className={isNoBg ? 'card nobg' : 'card'}>
            <div className="card__content">
            <h3 className='card__title'>{title}</h3>
                <div className="card__txt">
                    <p className='card__txt--1'>{txt1}</p>
                    <p className='card__txt--2'>{txt2}</p>
                </div>
            <NavLink to="/apropos#contact">
                <button className='card__button'>CONTACTEZ-MOI !</button></NavLink>
            </div>
            <img className='card__img' src={img} alt='offre'/>
        </article>
    )
}


export default Card