import React from "react";
import './LandingScreen.css'


const landingScreen = props => {
    return (
        <div className="landingScreen" ref={props.landingRef}>
            <div className="landing-screen-content">
                <p className="firstL">D</p>
                <p className="secondL">A</p>
                <p className="thirdL">R</p>
                <p className="fourthL">E</p>
                <p className="fithL">K</p>
                <p className="sixthL">R</p>
                <p className="seventhL">A</p>
                <p className="eighthL">D</p>
                <p className="ninthL">K</p>
                <p className="tenthL">E</p>

            </div>
                <p className="firstParagraph">
                    Independent website developer.
                </p>
        </div>
    );
};

export default landingScreen;