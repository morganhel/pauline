import React, {useState} from 'react';
import Modal from '../modalPrice/ModalPrice';

function Card({img,title,txt1,txt2,price,isNoBg}) {
    const [showModal, setShowModal]=useState(false);
    const handleClick = () => {setShowModal(true)};
    const closeModal = () => {setShowModal(false)};

    return (
        <>
        <article className={isNoBg ? 'card nobg' : 'card'}>
            <div className="card__content">
            <h3 className='card__title'>{title}</h3>
                <div className="card__txt">
                    <p className='card__txt--1'>{txt1}</p>
                    <p className='card__txt--2'>{txt2}</p>
                </div>
                <button className='card__button' onClick={handleClick}>+ D'INFORMATIONS !</button>
            </div>
            <img className='card__img' src={img} alt='offre'/>
        </article>
        {showModal && <Modal onClose={closeModal} price={price}/>}
        </>
    )
}


export default Card