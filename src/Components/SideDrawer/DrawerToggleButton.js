import React from "react";
import './DrawerToggleButton.css';

const drawerToggleButton = props => {

    let toggleButton = "toggle-button"



    if (props.drawerOpen) {
        toggleButton = "toggle-button x"
    } else {
        toggleButton = "toggle-button burger"
    } 
    

    return(
        <button className="toggle-button" onClick={props.click}>
            <div className="toggle-button-burger" />
        </button>
    )


    };

export default drawerToggleButton;