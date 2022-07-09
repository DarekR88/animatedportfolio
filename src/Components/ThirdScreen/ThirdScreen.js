import React from "react";
import './ThirdScreen.css'
import Modal from "../Modal/Modal"


const ThirdScreen = props => {


    return (
        <div className="thirdScreen" ref={props.thirdRef}>
            <Modal toggleModal={props.toggleModal} />
        </div>
    );
};

export default ThirdScreen;