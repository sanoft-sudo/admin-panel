import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../logo/Logo";

const DIV = styled.div`
  color: white;
  input[type="checkbox"] {
    display: none;
  }

  .menu-container {
    display: flex;
    align-items: center;
    background: -moz-linear-gradient(#292929, #252525);
    background: -ms-linear-gradient(#292929, #252525);
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, #292929),
      color-stop(100%, #252525)
    );
    background: -webkit-linear-gradient(#292929, #252525);
    background: -o-linear-gradient(#292929, #252525);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#292929', endColorstr='#252525');
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#292929', endColorstr='#252525')";
    background: linear-gradient(#292929, #252525);
    border-bottom: 2px solid #181818;
    border-top: 2px solid #303030;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    /* min-width: 160px; */
  }

  h1 {
    font-size: 26px;
    text-align: center;
    font-weight: 700;
    color: gray;
    margin-bottom: 20px;
  }

  /* menu */

  .menu,
  .menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .menu {
    height: 60px;
    width: 100%;
    display: flex;
  }
  .menu li {
    background: -moz-linear-gradient(#292929, #252525);
    background: -ms-linear-gradient(#292929, #252525);
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, #292929),
      color-stop(100%, #252525)
    );
    background: -webkit-linear-gradient(#292929, #252525);
    background: -o-linear-gradient(#292929, #252525);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#292929', endColorstr='#252525');
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#292929', endColorstr='#252525')";
    background: linear-gradient(#292929, #252525);
    border-bottom: 2px solid #181818;
    border-top: 2px solid #303030;
    min-width: 140px;
  }
  .menu > li {
    display: block;
    float: left;
    position: relative;
  }
  .menu > li:first-child {
    border-radius: 5px 0 0;
  }
  .menu a {
    border-left: 3px solid rgba(0, 0, 0, 0);
    color: #808080;
    display: block;
    font-family: "Lucida Console";
    font-size: 15px;
    line-height: 58px;
    padding: 0 7px;
    text-decoration: none;
    text-transform: uppercase;
  }
  .menu li:hover {
    background-color: #1c1c1c;
    background: -moz-linear-gradient(#1c1c1c, #1b1b1b);
    background: -ms-linear-gradient(#1c1c1c, #1b1b1b);
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, #1c1c1c),
      color-stop(100%, #1b1b1b)
    );
    background: -webkit-linear-gradient(#1c1c1c, #1b1b1b);
    background: -o-linear-gradient(#1c1c1c, #1b1b1b);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1c1c1c', endColorstr='#1b1b1b');
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#1c1c1c', endColorstr='#1b1b1b')";
    background: linear-gradient(#1c1c1c, #1b1b1b);
    border-bottom: 2px solid #222222;
    border-top: 2px solid #1b1b1b;
  }
  .menu li:hover > a {
    border-radius: 5px 0 0 0;
    border-left: 3px solid #00a78e;
    color: #00a78e;
  }
  /* submenu styles */
  .submenu {
    left: 0;
    max-height: 0;
    position: absolute;
    top: 100%;
    z-index: 0;
    -webkit-perspective: 400px;
    -moz-perspective: 400px;
    -ms-perspective: 400px;
    -o-perspective: 400px;
    perspective: 400px;
  }
  .submenu li {
    opacity: 0;
    -webkit-transform: rotateY(90deg);
    -moz-transform: rotateY(90deg);
    -ms-transform: rotateY(90deg);
    -o-transform: rotateY(90deg);
    transform: rotateY(90deg);
    -webkit-transition: opacity 0.4s, -webkit-transform 0.5s;
    -moz-transition: opacity 0.4s, -moz-transform 0.5s;
    -ms-transition: opacity 0.4s, -ms-transform 0.5s;
    -o-transition: opacity 0.4s, -o-transform 0.5s;
    transition: opacity 0.4s, transform 0.5s;
  }
  .menu .submenu li:hover a {
    border-left: 3px solid #454545;
    border-radius: 0;
    color: #ffffff;
  }
  .menu > li:hover .submenu,
  .menu > li:focus .submenu {
    max-height: 2000px;
    z-index: 10;
  }
  .menu > li:hover .submenu li,
  .menu > li:focus .submenu li {
    opacity: 1;
    -webkit-transform: none;
    -moz-transform: none;
    -ms-transform: none;
    -o-transform: none;
    transform: none;
  }
  /* CSS3 delays for transition effects */
  .menu li:hover .submenu li:nth-child(1) {
    -webkit-transition-delay: 0s;
    -moz-transition-delay: 0s;
    -ms-transition-delay: 0s;
    -o-transition-delay: 0s;
    transition-delay: 0s;
  }
  .menu li:hover .submenu li:nth-child(2) {
    -webkit-transition-delay: 50ms;
    -moz-transition-delay: 50ms;
    -ms-transition-delay: 50ms;
    -o-transition-delay: 50ms;
    transition-delay: 50ms;
  }
  .menu li:hover .submenu li:nth-child(3) {
    -webkit-transition-delay: 100ms;
    -moz-transition-delay: 100ms;
    -ms-transition-delay: 100ms;
    -o-transition-delay: 100ms;
    transition-delay: 100ms;
  }
  .menu li:hover .submenu li:nth-child(4) {
    -webkit-transition-delay: 150ms;
    -moz-transition-delay: 150ms;
    -ms-transition-delay: 150ms;
    -o-transition-delay: 150ms;
    transition-delay: 150ms;
  }
  .menu li:hover .submenu li:nth-child(5) {
    -webkit-transition-delay: 200ms;
    -moz-transition-delay: 200ms;
    -ms-transition-delay: 200ms;
    -o-transition-delay: 200ms;
    transition-delay: 200ms;
  }
  .menu li:hover .submenu li:nth-child(6) {
    -webkit-transition-delay: 250ms;
    -moz-transition-delay: 250ms;
    -ms-transition-delay: 250ms;
    -o-transition-delay: 250ms;
    transition-delay: 250ms;
  }
  .menu li:hover .submenu li:nth-child(7) {
    -webkit-transition-delay: 300ms;
    -moz-transition-delay: 300ms;
    -ms-transition-delay: 300ms;
    -o-transition-delay: 300ms;
    transition-delay: 300ms;
  }
  .menu li:hover .submenu li:nth-child(8) {
    -webkit-transition-delay: 350ms;
    -moz-transition-delay: 350ms;
    -ms-transition-delay: 350ms;
    -o-transition-delay: 350ms;
    transition-delay: 350ms;
  }
  .submenu li:nth-child(1) {
    -webkit-transition-delay: 350ms;
    -moz-transition-delay: 350ms;
    -ms-transition-delay: 350ms;
    -o-transition-delay: 350ms;
    transition-delay: 350ms;
  }
  .submenu li:nth-child(2) {
    -webkit-transition-delay: 300ms;
    -moz-transition-delay: 300ms;
    -ms-transition-delay: 300ms;
    -o-transition-delay: 300ms;
    transition-delay: 300ms;
  }
  .submenu li:nth-child(3) {
    -webkit-transition-delay: 250ms;
    -moz-transition-delay: 250ms;
    -ms-transition-delay: 250ms;
    -o-transition-delay: 250ms;
    transition-delay: 250ms;
  }
  .submenu li:nth-child(4) {
    -webkit-transition-delay: 200ms;
    -moz-transition-delay: 200ms;
    -ms-transition-delay: 200ms;
    -o-transition-delay: 200ms;
    transition-delay: 200ms;
  }
  .submenu li:nth-child(5) {
    -webkit-transition-delay: 150ms;
    -moz-transition-delay: 150ms;
    -ms-transition-delay: 150ms;
    -o-transition-delay: 150ms;
    transition-delay: 150ms;
  }
  .submenu li:nth-child(6) {
    -webkit-transition-delay: 100ms;
    -moz-transition-delay: 100ms;
    -ms-transition-delay: 100ms;
    -o-transition-delay: 100ms;
    transition-delay: 100ms;
  }
  .submenu li:nth-child(7) {
    -webkit-transition-delay: 50ms;
    -moz-transition-delay: 50ms;
    -ms-transition-delay: 50ms;
    -o-transition-delay: 50ms;
    transition-delay: 50ms;
  }
  .submenu li:nth-child(8) {
    -webkit-transition-delay: 0s;
    -moz-transition-delay: 0s;
    -ms-transition-delay: 0s;
    -o-transition-delay: 0s;
    transition-delay: 0s;
  }

  //responsive

  @media (max-width: 768px) {
    .menu-container {
      position: relative;
    }
    .mobile-navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
    .menu-container .menu {
      background-color: #0d2538;
      /* position: fixed; */
      display: flex;
      flex-direction: column;
      position: absolute;
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(200%)")};
      top: 52px;
      right: 0;
      width: 270px;
      transition: transform 0.3s ease-in-out;
      z-index: 5;
    }

    .menu a {
      border-left: 3px solid rgba(0, 0, 0, 0);
      color: #808080;
      display: block;
      font-family: "Lucida Console";
      font-size: 15px;
      line-height: 58px;
      /* width: 50px; */
      padding: 0 15px;
      text-decoration: none;
      text-transform: uppercase;
    }
    .submenu {
      left: 0;
      max-height: 0;
      position: sticky;
      z-index: 0;
      -webkit-perspective: 400px;
      -moz-perspective: 400px;
      -ms-perspective: 400px;
      -o-perspective: 400px;
      perspective: 400px;
      width: 100%;
    }
    .submenu li {
      opacity: 0;
      -webkit-transform: rotateY(90deg);
      -moz-transform: rotateY(90deg);
      -ms-transform: rotateY(90deg);
      -o-transform: rotateY(90deg);
      transform: rotateY(90deg);
      -webkit-transition: opacity 0.4s, -webkit-transform 0.5s;
      -moz-transition: opacity 0.4s, -moz-transform 0.5s;
      -ms-transition: opacity 0.4s, -ms-transform 0.5s;
      -o-transition: opacity 0.4s, -o-transform 0.5s;
      transition: opacity 0.4s, transform 0.5s;
    }

    .submenu .submenu1 {
      position: sticky;
      max-height: ${({ subMenu1 }) => (subMenu1 ? "90%" : "0%")};
    }
    .submenu .submenu2 {
      max-height: ${({ subMenu2 }) => (subMenu2 ? "90%" : "0%")};
    }

    .burger {
      display: block;
      position: relative;
      width: 3rem;
      height: 3rem;
      border-radius: 3px;
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
      background-color: rgba(255, 255, 255, 0.9);
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
    .burger1 input:checked + span:before,
    .burger1 input:checked + span:after {
      top: 0px;
      margin-top: -0.5875rem;
    }
    .burger1 input:checked + span {
      background-color: transparent;
    }
    .burger1 input:checked + span:before {
      transform: translateY(0.525rem) rotate(45deg);
    }
    .burger1 input:checked + span:after {
      transform: translateY(0.525rem) rotate(-45deg);
    }
    @-webkit-keyframes menuCloseMiddle--base {
      0% {
        background-color: rgba(255, 255, 255, 0.9);
      }
      80% {
        background-color: rgba(255, 255, 255, 0.9);
      }
      100% {
        background-color: rgba(255, 255, 255, 0.9);
      }
    }
    @keyframes menuCloseMiddle--base {
      0% {
        background-color: rgba(255, 255, 255, 0.9);
      }
      80% {
        background-color: rgba(255, 255, 255, 0.9);
      }
      100% {
        background-color: rgba(255, 255, 255, 0.9);
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
  }

  .burger-menu .burger input[type="checkbox"] {
    display: none;
  }

  @media (min-width: 768px) {
    .burger-menu {
      display: none;
    }
  }
`;

const Navbar4 = () => {
  const [open, setOpen] = useState(false);
  const [subMenu1, setSubMenu1] = useState(false);
  const [subMenu2, setSubMenu2] = useState(false);

  const handleChangeBurger = (e) => {
    setOpen(e.target.checked);
  };

  const handleClickMenu = (str) => {
    console.log(str);

    if (str === "submenu1") {
      setSubMenu1(true);
      setSubMenu2(false);
    } else if (str === "submenu2") {
      setSubMenu1(false);
      setSubMenu2(true);
    } else {
      setSubMenu1(false);
      setSubMenu2(false);
    }
  };

  console.log("sub", subMenu1, subMenu2);

  return (
    <DIV open={open}>
      <div className="menu-container">
        <div className="mobile-navbar">
          <div className="logo">
            <Logo />
          </div>
          <div className="burger-menu">
            <label className="burger burger1" htmlFor="burger1">
              <input
                className="hidden"
                id="burger1"
                onChange={handleChangeBurger}
                type="checkbox"
              />
              <span></span>
            </label>
          </div>
        </div>

        <ul className="menu">
          {/* <li>
                    <StyledBurger open={open} onClick={() => setOpen(!open)}>
                        <div />
                        <div />
                        <div />
                    </StyledBurger>
                </li> */}

          <li className="active" onClick={() => handleClickMenu("home")}>
            <a href="#">Home</a>
          </li>
          <li onClick={() => handleClickMenu("contact")}>
            <a href="#">Contact us</a>
          </li>
          <li onClick={() => handleClickMenu("submenu1")}>
            <a href="#">Products</a>
            <ul className="submenu submenu1">
              <li>
                <a href="#">Product 1</a>
              </li>
              <li>
                <a href="#">Product 2</a>
              </li>
              <li>
                <a href="#">Product 3</a>
              </li>
              <li>
                <a href="#">Product 4</a>
              </li>
              <li>
                <a href="#">Product 5</a>
              </li>
              <li>
                <a href="#">Product 6</a>
              </li>
            </ul>
          </li>
          <li onClick={() => handleClickMenu("submenu2")}>
            <a href="#s2">Service</a>
            <ul className="submenu submenu2">
              <li>
                <a href="#">Service 1</a>
              </li>
              <li>
                <a href="#">Service 2</a>
              </li>
              <li>
                <a href="#">Service 3</a>
              </li>
              <li>
                <a href="#">Service 4</a>
              </li>
              <li>
                <a href="#">Service 5</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </DIV>
  );
};

export default Navbar4;
