import React from "react";
import "./DrawerToggleButton.css";
import TestHamburger from "../TestHamburger/TestHamburger";

const drawerToggleButton = (props) => {
  let toggleButton = "menu-btn";

  if (props.drawerOpen) {
    toggleButton = "menu-btn open";
  } else {
    toggleButton = "menu-btn";
  }

  return (
    <TestHamburger />
    // <button className={toggleButton} onClick={props.click}>
    //     <div className="menu-btn__burger"/>
    // </button>
  );
};

export default drawerToggleButton;
