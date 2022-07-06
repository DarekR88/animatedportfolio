import React from "react";
// import { Link } from "react-router-dom"
import './Toolbar.css';
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolbar = props => {

    let toolbarClasses = "toolbar"



    if (props.show) {
        toolbarClasses = "toolbar hide"
    } else {
        toolbarClasses = "toolbar show"
    } 
    

    

    


    return(
    <header className={toolbarClasses}>
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"><p onClick={() => {props.handleScroll((props.landingRef).current);}}>DAREK RADKE</p></div>
            <div className="spacer" />
            <div className="toolbar_nav-items">
                <ul>
                    <li><button className="pageButton" onClick={() => {props.handleScroll((props.landingRef).current);}}>Home</button></li>
                    <li><button className="pageButton" onClick={() => {props.handleScroll((props.secondRef).current);}}>About</button></li>
                    <li><button className="pageButton" onClick={() => {props.handleScroll((props.thirdRef).current);}}>Contact</button></li>
                </ul>
            </div>
        </nav>
    </header>
    )
    };

export default toolbar;