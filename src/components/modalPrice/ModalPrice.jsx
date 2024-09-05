import React, {useRef} from "react";

function Modal({onClose,price}) {
    const modalRef = useRef();
    const handleCloseModal = (e) => {
        if (modalRef.current === e.target){
            onClose();
        }
    };

    return(
        <div className="modalPrice" onClick={handleCloseModal} ref={modalRef}>
            <div className="modalPrice__content">
            <span className="modalPrice__content--close" onClick={onClose}>x</span>
                <img className='modalPrice__content--img' src={price} alt='plaquette de prix'/>
            </div>
        </div>
    );
}

export default Modal;