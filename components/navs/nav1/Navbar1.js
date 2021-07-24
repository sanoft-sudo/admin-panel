import React from "react";
import styled from "styled-components";
import { Home, Build, FolderShared, Mail, Info } from "@styled-icons/material";

const DIV = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  position: relative;

  h1 {
    font-size: 26px;
    text-align: center;
    font-weight: 700;
    color: gray;
    margin-bottom: 20px;
  }
`;

const UL = styled.ul`
  /* position: relative; */
  padding-top: 5px;
  padding-left: 1.1rem;

  li {
    list-style: none;
    height: 55px;
    /* padding:2px; */
    width: 100%;
    position: relative;
    margin-bottom: 3px;
    padding-top: 5px;
  }

  .menu-title {
    /* Container properties */
    width: 0;
    left: 15px;
    padding: 0;
    margin-top: -5px;
    position: absolute;
    overflow: hidden;
    font-family: "Myriad Pro", Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 0.6px;
    white-space: nowrap;
    line-height: 45px;

    /* CSS3 Transition: */
    transition: width 0.25s;
  }

  .menu-icon {
    color: lightgray;
    width: 35px;
    height: 35px;
  }
  li a {
    padding: 10px 7px;
    /* padding-bottom: 5px; */
    cursor: pointer;
  }

  li a:hover .menu-title {
    width: 150px;
    margin-left: 40px;
    padding-left: 10px;
    overflow: visible;
    transition: width 0.25s ease;
  }

  li a:hover {
    text-decoration: none;

    -moz-box-shadow: 0 0 5px #9ddff5;
    -webkit-box-shadow: 0 0 5px #9ddff5;
    box-shadow: 0 0 5px #9ddff5;
  }

  a.home {
    background-color: #7da315;
    width: 45px;
    height: 45px;
    padding-bottom: 15px;
  }
  a.home:hover .menu-icon {
    color: #a2a0a0;
    transform: rotateY(180deg);
  }
  a.home .menu-title {
    background-color: #7da315;
    color: #3d4f0c;
    text-shadow: 1px 1px 0 #99bf31;
  }

  .about {
    background-color: #00bef5;
    width: 45px;
    height: 45px;
    padding-bottom: 15px;
  }
  /* a:hover .menu-title{ width:150px; padding:2px;overflow:visible; } */
  .about .menu-title {
    background-color: #1e8bb4;
    color: #223a44;
    text-shadow: 1px 1px 0 #44a8d0;
  }
  .about :hover .menu-icon {
    color: #a2a0a0;
    transform: rotateY(180deg);
  }

  .services {
    background-color: #c86c1f;
    width: 45px;
    height: 45px;
    padding-bottom: 15px;
  }
  /* .services:hover .menu-title{ width:150px; padding:2px;overflow:visible; } */
  .services .menu-title {
    background-color: #c86c1f;
    color: #5a3517;
    text-shadow: 1px 1px 0 #d28344;
  }
  .services :hover .menu-icon {
    color: #a2a0a0;
    transform: rotateY(180deg);
  }

  .portfolio {
    background-color: #fbd311;
    width: 45px;
    height: 45px;
    padding-bottom: 15px;
  }
  /* .portfolio:hover .menu-title{ width:150px; padding:2px;overflow:visible; } */
  .portfolio .menu-title {
    background-color: #fbd311;
    color: #604e18;
    text-shadow: 1px 1px 0 #d8b54b;
  }
  .portfolio :hover .menu-icon {
    color: #a2a0a0;
    transform: rotateY(180deg);
  }

  /* Purple Button */

  .contact {
    background-color: #af1e83;
    width: 45px;
    height: 45px;
    padding-bottom: 15px;
  }
  /* .contact:hover .menu-title{ width:150px; padding:2px;overflow:visible; } */
  .contact .menu-title {
    background-color: #af1e83;
    color: #460f35;
    text-shadow: 1px 1px 0 #d244a6;
  }
  .contact :hover .menu-icon {
    color: #a2a0a0;
    transform: rotateY(180deg);
  }
`;

const Navbar1 = () => {
  return (
    <DIV>
      <UL>
        <li>
          <a className="home" href="#">
            <Home className="menu-icon" />
            <span className="menu-title">Home</span>
          </a>
        </li>

        <li>
          <a className="about" href="#">
            <Info className="menu-icon" />
            <span className="menu-title">About</span>
          </a>
        </li>

        <li>
          <a className="services" href="#">
            <Build className="menu-icon" />
            <span className="menu-title">Services</span>
          </a>
        </li>

        <li>
          <a className="portfolio" href="#">
            <FolderShared className="menu-icon" />
            <span className="menu-title">Portfolio</span>
          </a>
        </li>

        <li>
          <a className="contact" href="#">
            <Mail className="menu-icon" />
            <span className="menu-title">Contact us</span>
          </a>
        </li>
      </UL>
    </DIV>
  );
};

export default Navbar1;
