import React from "react";
import './SideElement.css'
import githubIcon from "../../static/icons/github_icon.svg";
import linkedinIcon from "../../static/icons/linkedin_icon.svg";


const SideElement = props => {



    return (
        <div className="sideElemntWrapper">
            <ul>
                <li><a href="" rel="noreferrer" className="side-a">{githubIcon}</a></li>
                <li><a href="" rel="noreferrer" className="side-a">{linkedinIcon}</a></li>
                {/* <li><a href="" rel="noreferrer" className="side-a">Contact</a></li> */}
            </ul>
        </div>
    );
};

export default SideElement;