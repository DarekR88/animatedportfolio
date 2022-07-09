import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import './Modal.css';

const Modal = props => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_qfgklbh', 'template_nkx1gkp', form.current, 'DfRYHaxL9gIFFEmtj')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    }

    let modalClasses = "modal"

    if (props.modalOpen) {
        modalClasses = "modal hide"
    } else {
        modalClasses = "modal show"
    } 

    return(
        <div className={modalClasses}>
            <button onClick={props.toggleModal}>close</button>
            <form className="emailForm" ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input className="sendButton" type="submit" value="Send" />
            </form>
        </div>
    )


    };

export default Modal;