import React from "react";
import './SecondScreen.css'
import Carousel from '../Carousel/Carousel.js'


const secondScreen = props => {

    return (
        <div className="secondScreen" ref={props.secondRef}>
            <div className="carouselContainer">
                <Carousel />
            </div>
        </div>
    );
};

export default secondScreen;