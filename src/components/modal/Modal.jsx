import React, {useRef} from "react";

function Modal({onClose,img}) {
    const modalRef = useRef();
    const handleCloseModal = (e) => {
        if (modalRef.current === e.target){
            onClose();
        }
    };

    return(
        <div className="modal" onClick={handleCloseModal} ref={modalRef}>
            <div className="modal__content">
            <span className="modal__content--close" onClick={onClose}>x</span>
                <img className='card__img' src={img} alt='plaquette de prix'/>
            </div>
        </div>
    );
}

export default Modal;