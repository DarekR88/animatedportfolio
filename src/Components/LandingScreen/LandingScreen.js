import React from "react";
import './LandingScreen.css'


const landingScreen = props => {
    return (
        <div className="landingScreen" ref={props.landingRef}>
            <div className="landing-screen-content">
                <p>D</p>
                <p>A</p>
                <p>R</p>
                <p>E</p>
                <p>K</p>
                <p>R</p>
                <p>A</p>
                <p>D</p>
                <p>K</p>
                <p>E</p>
            </div>
        </div>
    );
};

export default landingScreen;