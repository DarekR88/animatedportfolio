import React from "react";
// import { Link } from "react-router-dom"
import './Toolbar.css';
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"><p onClick={() => {props.handleScroll((props.landingRef).current);}}>DAREK RADKE</p></div>
            <div className="spacer" />
            <div className="toolbar_nav-items">
                <ul>
                    <li><button onClick={() => {props.handleScroll((props.landingRef).current);}}>Home</button></li>
                    <li><button onClick={() => {props.handleScroll((props.secondRef).current);}}>About</button></li>
                    <li><button onClick={() => {props.handleScroll((props.thirdRef).current);}}>Misc</button></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;