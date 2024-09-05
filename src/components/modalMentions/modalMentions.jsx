import React, {useRef} from "react";

function ModalMentions({onClose}) {
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
                <h2 className="modal__content--title">MENTIONS LEGALES</h2>
                <div className="modal__content--txt">
                    <div className="modal__content--paragraph">
                        <h3>Éditeur du site</h3>
                        <p>Nom : Pauline Parey Photographie</p>
                        <p>Forme juridique :	Entrepreneur individuel</p>
                        <p>Adresse :	77 RUE EUGENE LEDENTU, 50100 CHERBOURG-EN-COTENTIN </p>
                        <p>Numéro SIRET :	979 012 689 00019 </p>
                        <p>Responsable de la publication : Pauline Parey</p>
                        <p>Email :paulineparey.photographie@gmail.com</p>
                    </div>
                    <div className="modal__content--paragraph">
                        <h3>Hébergement du site</h3>
                        <p>Nom: HOSTINGER INTERNATIONAL LTD</p>
                        <p>Siège social : 61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
                        <p>Contact : https://wwwhostingerfr/contact</p>
                    </div>
                    <div className="modal__content--paragraph">
                        <h3>Propriété intellectuelle </h3>
                        <p>L'ensemble des contenus présents sur le site (textes, images, vidéos, photographies) sont la propriété exclusive de Pauline et sont protégés par le droit d'auteur selon les dispositions des articles L.111-1 et suivants du Code de la propriété intellectuelle. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Pauline Parey. </p>
                    </div>
                    <div className="modal__content--paragraph">
                        <h3>Responsabilité</h3>
                        <p>Pauline Parey ne saurait être tenu responsable des dommages directs ou indirects résultant de l’accès à son site ou de l’utilisation de celui-ci, y compris l’inaccessibilité, les pertes de données, ou les virus.</p>
                    </div>
                    <div className="modal__content--paragraph">
                        <h3>Liens externes</h3>
                        <p>Ce site peut contenir des liens vers des sites tiers. Pauline Parey décline toute responsabilité concernant le contenu de ces sites tiers et les éventuels dommages qu’ils pourraient causer</p>
                    </div>
                    <div className="modal__content--paragraph">
                        <h3>Contact</h3>
                        <p>Pour toute question ou préoccupation concernant ce site ou son contenu, veuillez nous contacter à l’adresse e-mail suivante : paulineparey.photographie@gmail.com</p>
                    </div>
                    <div className="modal__content--paragraph">
                        <h3>Conception et développement du site</h3>
                        <p>Le site a été conçu et développé par :</p>
                        <p>Nom : MorganH-dev</p>
                        <p>Site internet : morganh-dev.fr</p>
                        <p>Email : morgan.heleine@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalMentions;