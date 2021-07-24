import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../logo/Logo";

const DIV = styled.div`
  width: 100%;
  margin: 25px 0;

  nav {
    background: rgba(255, 255, 255, 0.45);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
  }

  nav .navBar {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
  nav ul {
    margin-bottom: 0;
  }
  nav .naVBar .naVBar-item,
  nav .naVBar .subNavbar {
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;
  }
  nav .naVBar .naVBar-item {
    position: relative;
  }

  nav .naVBar .naVBar-link {
    display: block;
    padding: 0 10px;
    text-transform: uppercase;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.75);
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
    /* backdrop-filter: blur(8.5px); */
    letter-spacing: 1px;
    transition: text-shadow 0.5s ease-in-out;
    line-height: 60px;
    text-decoration: none;
  }
  nav .naVBar .subNavbar-link {
    display: block;
    padding: 0 10px;
    text-transform: uppercase;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.75);
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
    /* backdrop-filter: blur(8.5px); */
    letter-spacing: 1px;
    transition: text-shadow 0.5s ease-in-out;
    line-height: 40px;
    text-decoration: none;
  }

  nav .naVBar .naVBar-link:hover,
  nav .naVBar .naVBar-link:focus {
    text-shadow: 6px 6px 6px rgba(0, 0, 0, 0.6);
    transition: text-shadow 0.5s ease-in-out;
  }
  nav .naVBar .subNavbar-link:hover,
  nav .naVBar .subNavbar-link:focus {
    text-shadow: 6px 6px 6px rgba(0, 0, 0, 0.6);
    transition: text-shadow 0.5s ease-in-out;
  }

  /* Display Dropdowns on Hover */
  nav .naVBar .naVBar-item:hover > .subNavbar,
  nav .naVBar .naVBar-item:focus > .subNavbar {
    display: inherit;
  }

  /* Hide Dropdowns by Default */
  nav .naVBar .subNavbar {
    display: none;
    position: absolute;
    top: 62px;
    left: 50%; /* the height of the main nav */
    transform: translateX(-50%);
  }

  nav .naVBar-item {
    display: inline-block;
    /* background-color: #e64a19; */
  }
  nav .naVBar-link {
  }

  nav .naVBar,
  nav .naVBar .subNavbar {
    animation: fade 0.2s ease-out;
  }
  nav .naVBar .subNavbar .subNavbar-item {
    transform-origin: bottom;
    animation: enter 0.2s ease forwards;
  }

  nav .naVBar .subNavbar .subNavbar-item:nth-of-type(1) {
    animation-duration: 0.2s;
    animation-delay: 0s;
  }
  nav .naVBar .subNavbar .subNavbar-item:nth-of-type(2) {
    animation-duration: 0.3s;
    animation-delay: 0.1s;
  }
  nav .naVBar .subNavbar .subNavbar-item:nth-of-type(3) {
    animation-duration: 0.4s;
    animation-delay: 0.2s;
  }
  nav .naVBar .subNavbar .subNavbar-item:nth-of-type(4) {
    animation-duration: 0.5s;
    animation-delay: 0.3s;
  }

  /* First Tier Drop Down */
  nav .naVBar .subNavbar {
  }
  nav .naVBar .subNavbar .subNavbar-item {
    float: none;
    display: block;
    position: relative;
    background: rgba(255, 255, 255, 0.45);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    margin-bottom: 5px;
  }
  nav .naVBar .subNavbar .subNavbar-item .subNavbar-link {
  }

  /* animation */
  @keyframes enter {
    from {
      opacity: 0;
      transform: scaleY(0.98) translateY(10px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  nav .logo-humburger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 15px;
  }
  @media (max-width: 768px) {
    nav .naVBar {
      display: none;
    }
    nav .logo-humburger {
      width: 100%;
    }
  }

  /* Responsive nav style */

  @media (min-width: 768px) {
    .vertical-nav3 {
      display: none !important;
    }
  }
  .vertical-nav3 {
    width: 100%;
    height: 300px;
    display: ${({ showMenu }) => (showMenu ? "inherit" : "none")};
  }
  .vertical-nav3 > ul {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  .vertical-nav3 .VnavBar {
    display: flex;
    flex-direction: column !important;
    height: 100%;
  }
  .vertical-nav3 .VnaVBar .VnaVBar-item,
  .vertical-nav3 .VnaVBar .VsubNavbar {
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;
  }
  .vertical-nav3 .VnaVBar .VnaVBar-item {
    position: relative;
    background: rgba(255, 255, 255, 0.45);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    margin-bottom: 5px;
  }

  .vertical-nav3 .VnaVBar .VnaVBar-link {
    display: block;
    padding: 0 10px;
    text-transform: uppercase;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.75);
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
    /* backdrop-filter: blur(8.5px); */
    letter-spacing: 1px;
    transition: text-shadow 0.5s ease-in-out;
    line-height: 60px;
    text-decoration: none;
  }
  .vertical-nav3 .VnaVBar .VsubNavbar-link {
    display: block;
    padding: 0 10px;
    text-transform: uppercase;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.75);
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
    /* backdrop-filter: blur(8.5px); */
    letter-spacing: 1px;
    transition: text-shadow 0.5s ease-in-out;
    line-height: 40px;
    text-decoration: none;
  }

  .vertical-nav3 .VnaVBar .VnaVBar-link:hover,
  .vertical-nav3 .VnaVBar .VnaVBar-link:focus {
    text-shadow: 6px 6px 6px rgba(0, 0, 0, 0.6);
    transition: text-shadow 0.5s ease-in-out;
  }
  .vertical-nav3 .VnaVBar .VsubNavbar-link:hover,
  .vertical-nav3 .VnaVBar .VsubNavbar-link:focus {
    text-shadow: 6px 6px 6px rgba(0, 0, 0, 0.6);
    transition: text-shadow 0.5s ease-in-out;
  }

  /* Display Dropdowns on Hover */
  .vertical-nav3 .VnaVBar .VnaVBar-item:hover > .VsubNavbar,
  .vertical-nav3 .VnaVBar .VnaVBar-item:focus > .VsubNavbar {
    display: inherit;
  }

  /* Hide Dropdowns by Default */
  .vertical-nav3 .VnaVBar .VsubNavbar {
    display: none;
    /* position: absolute;
    top: 62px;
    left: 50%; 
    transform: translateX(-50%); */
  }

  .vertical-nav3 .VnaVBar-item {
    display: inline-block;
    /* background-color: #e64a19; */
  }
  .vertical-nav3 .VnaVBar-link {
  }

  .vertical-nav3 .VnaVBar,
  .vertical-nav3 .VnaVBar .VsubNavbar {
    animation: fade 0.2s ease-out;
  }
  .vertical-nav3 .VnaVBar .VsubNavbar .VsubNavbar-item {
    transform-origin: bottom;
    animation: enter 0.2s ease forwards;
  }

  .vertical-nav3 .VnaVBar .VsubNavbar .VsubNavbar-item:nth-of-type(1) {
    animation-duration: 0.2s;
    animation-delay: 0s;
  }
  .vertical-nav3 .VnaVBar .VsubNavbar .VsubNavbar-item:nth-of-type(2) {
    animation-duration: 0.3s;
    animation-delay: 0.1s;
  }
  .vertical-nav3 .VnaVBar .VsubNavbar .VsubNavbar-item:nth-of-type(3) {
    animation-duration: 0.4s;
    animation-delay: 0.2s;
  }
  .vertical-nav3 .VnaVBar .VsubNavbar .VsubNavbar-item:nth-of-type(4) {
    animation-duration: 0.5s;
    animation-delay: 0.3s;
  }

  .vertical-nav3 .VnaVBar .VnaVBar-item {
    transform-origin: bottom;
    animation: enter 0.2s ease forwards;
  }

  .vertical-nav3 .VnaVBar .VnaVBar-item:nth-of-type(1) {
    animation-duration: 0.2s;
    animation-delay: 0s;
  }
  .vertical-nav3 .VnaVBar .VnaVBar-item:nth-of-type(2) {
    animation-duration: 0.3s;
    animation-delay: 0.1s;
  }
  .vertical-nav3 .VnaVBar .VnaVBar-item:nth-of-type(3) {
    animation-duration: 0.4s;
    animation-delay: 0.2s;
  }
  .vertical-nav3 .VnaVBar .VnaVBar-item:nth-of-type(4) {
    animation-duration: 0.5s;
    animation-delay: 0.3s;
  }

  /* First Tier Drop Down */
  .vertical-nav3 .VnaVBar .VsubNavbar {
  }
  .vertical-nav3 .VnaVBar .VsubNavbar .VsubNavbar-item {
    /* float: none; */
    display: block;
    position: relative;
    /* background: rgba(255, 255, 255, 0.45); */
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    /* backdrop-filter: blur(4px); */
    /* -webkit-backdrop-filter: blur(4px); */
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    margin-bottom: 5px;
  }
  .vertical-nav3 .VnaVBar .VsubNavbar .VsubNavbar-item .VsubNavbar-link {
  }

  /* animation */
  @keyframes enter {
    from {
      opacity: 0;
      transform: scaleY(0.98) translateY(10px);
    }
    to {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes exit {
    from {
      opacity: 1;
      transform: none;
    }
    to {
      opacity: 0;
      transform: scaleY(0.98) translateY(10px);
    }
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* humberguer */

  label input[type="checkbox"] {
    display: none;
  }
  .hidden {
    visibility: hidden;
    position: absolute;
    width: 0;
    height: 0;
  }
  .burger {
    display: block;
    position: relative;
    width: 2rem;
    height: 2rem;
    margin: 0.5rem;
    cursor: pointer;
  }
  .burger span {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: absolute;
    margin: 0.0625rem auto 0.525rem -0.75rem;
    text-indent: -999em;
    top: 50%;
    left: 50%;
    margin-top: -0.0625rem;
    cursor: pointer;
  }
  .burger span,
  .burger span:before,
  .burger span:after {
    display: block;
    width: 1.5rem;
    height: 0.125rem;
    background-color: black;
    transition: 0.3s;
    opacity: 1;
  }
  .burger span:before,
  .burger span:after {
    position: absolute;
    content: "";
  }
  .burger span:before {
    top: -0.525rem;
  }
  .burger span:after {
    top: 0.525rem;
  }

  .burgers {
    display: flex;
  }

  .burger4 input:checked + span:before,
  .burger4 input:checked + span:after {
    top: 0px;
    margin-top: -0.5875rem;
  }
  .burger4 input:checked + span {
    -webkit-animation: menuCloseMiddle--base 0.5s forwards;
    animation: menuCloseMiddle--base 0.5s forwards;
  }
  .burger4 input:checked + span:before {
    -webkit-animation: menuCloseMiddle--before 0.5s forwards;
    animation: menuCloseMiddle--before 0.5s forwards;
  }
  .burger4 input:checked + span:after {
    -webkit-animation: menuCloseMiddle--after 0.5s forwards;
    animation: menuCloseMiddle--after 0.5s forwards;
  }
  @-webkit-keyframes menuCloseMiddle--base {
    0% {
      background-color: black;
    }
    80% {
      background-color: black;
    }
    100% {
      background-color: rgba(0, 0, 0, 0);
    }
  }
  @keyframes menuCloseMiddle--base {
    0% {
      background-color: black;
    }
    80% {
      background-color: black;
    }
    100% {
      background-color: rgba(0, 0, 0, 0);
    }
  }
  @-webkit-keyframes menuCloseMiddle--after {
    0% {
      transform: translateY(0) rotate(0);
    }
    80% {
      transform: translateY(0.525rem) rotate(0);
    }
    100% {
      transform: translateY(0.525rem) rotate(45deg);
    }
  }
  @keyframes menuCloseMiddle--after {
    0% {
      transform: translateY(0) rotate(0);
    }
    80% {
      transform: translateY(0.525rem) rotate(0);
    }
    100% {
      transform: translateY(0.525rem) rotate(45deg);
    }
  }
  @-webkit-keyframes menuCloseMiddle--before {
    0% {
      transform: translateY(0) rotate(0);
    }
    80% {
      transform: translateY(0.525rem) rotate(0);
    }
    100% {
      transform: translateY(0.525rem) rotate(-45deg);
    }
  }
  @keyframes menuCloseMiddle--before {
    0% {
      transform: translateY(0) rotate(0);
    }
    80% {
      transform: translateY(0.525rem) rotate(0);
    }
    100% {
      transform: translateY(0.525rem) rotate(-45deg);
    }
  }

  .description {
    width: 100%;
    text-align: center;
    color: rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 500px) {
    .burger {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
  @media (min-width: 768px) {
    .burger {
      display: none;
    }
  }
`;

const ResponsiveNav3 = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (e) => {
    setShowMenu(e.target.checked);
  };

  return (
    <DIV showMenu={showMenu}>
      <nav>
        <div className="logo-humburger">
          <a href="#home">
            <Logo />
          </a>
          <label className="burger burger4" htmlFor="burger4">
            <input
              className="hidden"
              id="burger4"
              onChange={handleClick}
              type="checkbox"
            />
            <span></span>
          </label>
        </div>
        <ul className="naVBar">
          <li className="naVBar-item">
            <a className="naVBar-link" href="#home">
              Home
            </a>
          </li>
          <li className="naVBar-item dropdown">
            <a className="naVBar-link" href="#blog">
              Blog
            </a>
            <ul className="subNavbar">
              <li className="subNavbar-item">
                <a className="subNavbar-link" href="#design">
                  Design
                </a>
              </li>
              <li className="subNavbar-item">
                <a className="subNavbar-link" href="#html">
                  HTML
                </a>
              </li>
              <li className="subNavbar-item">
                <a className="subNavbar-link" href="#css">
                  CSS
                </a>
              </li>
              <li className="subNavbar-item">
                <a className="subNavbar-link" href="#javascript">
                  JavaScript
                </a>
              </li>
            </ul>
          </li>
          <li className="naVBar-item dropdown">
            <a className="naVBar-link" href="#work">
              Work
            </a>
            <ul className="subNavbar">
              <li className="subNavbar-item">
                <a className="subNavbar-link" href="#web-design">
                  Web Design
                </a>
              </li>
              <li className="subNavbar-item">
                <a className="subNavbar-link" href="#typogaphy">
                  Typography
                </a>
              </li>
              <li className="subNavbar-item">
                <a className="subNavbar-link" href="#frontend">
                  Front-End
                </a>
              </li>
            </ul>
          </li>
          <li className="naVBar-item">
            <a className="naVBar-link" href="#about">
              About
            </a>
          </li>
        </ul>
      </nav>
      <div className="vertical-nav3">
        <ul className="VnaVBar">
          <li className="VnaVBar-item">
            <a className="VnaVBar-link" href="#home">
              Home
            </a>
          </li>
          <li className="VnaVBar-item dropdown">
            <a className="VnaVBar-link" href="#blog">
              Blog
            </a>
            <ul className="VsubNavbar">
              <li className="VsubNavbar-item">
                <a className="VsubNavbar-link" href="#design">
                  Design
                </a>
              </li>
              <li className="VsubNavbar-item">
                <a className="VsubNavbar-link" href="#html">
                  HTML
                </a>
              </li>
              <li className="VsubNavbar-item">
                <a className="VsubNavbar-link" href="#css">
                  CSS
                </a>
              </li>
              <li className="VsubNavbar-item">
                <a className="VsubNavbar-link" href="#javascript">
                  JavaScript
                </a>
              </li>
            </ul>
          </li>
          <li className="VnaVBar-item dropdown">
            <a className="VnaVBar-link" href="#work">
              Work
            </a>
            <ul className="VsubNavbar">
              <li className="VsubNavbar-item">
                <a className="VsubNavbar-link" href="#web-design">
                  Web Design
                </a>
              </li>
              <li className="VsubNavbar-item">
                <a className="VsubNavbar-link" href="#typogaphy">
                  Typography
                </a>
              </li>
              <li className="VsubNavbar-item">
                <a className="VsubNavbar-link" href="#frontend">
                  Front-End
                </a>
              </li>
            </ul>
          </li>
          <li className="VnaVBar-item">
            <a className="VnaVBar-link" href="#about">
              About
            </a>
          </li>
        </ul>
      </div>
    </DIV>
  );
};
export default ResponsiveNav3;
