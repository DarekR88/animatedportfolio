import React, { useState } from "react";
import './TestHamburger.scss';

// const Button = styled.button`
//   position: fixed;
//   top: 20px;
//   /* left: 20px; */
//   right: 20px;
//   width: 50px;
//   height: 50px;
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
//   z-index: 5;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   pointer-events: auto;
//   transition: all 0.75s ease-out;
//   opacity: 1;

//   @media all and (min-width: 768px) {
//     display: none;
//   }

//   &:hover {
//     .hamburger {
//       .line,
//       .line::after,
//       .line::before {
//         background-color: #ced3d7;
//       }
//     }
//   }

//   &.fadeOut {
//     transform: translateX(-10px) scale(1.2);
//     opacity: 0;
//   }

//   .hamburger {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 30px;
//     transition: transform 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

//     &.clicked {
//       transform: rotate(135deg);

//       .line::before,
//       .line::after {
//         top: 0;
//         transform: rotate(90deg);
//       }
//     }

//     .line {
//       position: relative;
//       height: 2px;
//       background-color: #b3cce6;
//       width: 100%;

//       /* Top and bottom hamburger lines*/
//       &::before,
//       &::after {
//         content: "";
//         position: absolute;
//         z-index: 1;
//         top: -10px;
//         width: inherit;
//         left: 0;
//         height: 2px;
//         background: inherit;
//       }

//       /* Move top line down*/
//       &::after {
//         top: 10px;
//       }
//     }
//   }
// `;

const TestHamburger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <button
      className="menu-btn"
      // aria-expanded={this.props.menuOpen ? "true" : "false"}
      onClick={() => {
        toggleMenu();
      }}
    >
      <span className={isMenuOpen ? "hamburger clicked" : "hamburger"}>
        <span className="line" />
      </span>
    </button>
  );
};

export default TestHamburger;
