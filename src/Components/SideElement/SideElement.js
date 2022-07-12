import React from "react";
import "./SideElement.css";
import githubIcon from "../../static/icons/github_icon.svg";
import linkedinIcon from "../../static/icons/linkedin_icon.svg";

const SideElement = (props) => {
  return (
    <div className="side-element-wrapper">
      <ul>
        <li>
          <a href="mailto:darekradke2@gmail.com" className="email-link">
            Darekradke2@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://github.com/DarekR88"
            rel="noreferrer"
            className="side-a"
          >
            <img className="svg-icon" src={githubIcon} alt="github icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/darek-radke-aa26b7173/"
            rel="noreferrer"
            className="side-a"
          >
            <img className="svg-icon" src={linkedinIcon} alt="linkedin icon" />
          </a>
        </li>
        {/* <li><a href="" rel="noreferrer" className="side-a">Contact</a></li> */}
      </ul>
    </div>
  );
};

export default SideElement;
