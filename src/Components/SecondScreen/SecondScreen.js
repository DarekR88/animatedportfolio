import React from "react";
import './SecondScreen.css'
import Carousel from '../Carousel/Carousel.js'


const secondScreen = props => {

    return (
        <div className="secondScreen" ref={props.secondRef}>
            <Carousel />
        </div>
    );
};

export default secondScreen;