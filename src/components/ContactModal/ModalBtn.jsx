import React, { useState } from "react";
import ContactModal from "./ContactModal";
import contactImg from "../../assets/contact.png";
import style from "./styles.module.css";

const ModalBtn = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div onClick={handleModal} className={style.btnContact}>
                <img src={contactImg}/>
            </div>
                {
                    isOpen && <ContactModal handle={handleModal}/>
                }
        </div>

    );
}
 
export default ModalBtn;