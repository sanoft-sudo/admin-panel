import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  /* background-color: lightgray; */
  text-align: center;
  align-items: center;
  padding: 10px;

  .icon-button {
    background-color: white;
    border-radius: 3.6rem;
    cursor: pointer;
    display: inline-block;
    font-size: 2rem;
    height: 3.6rem;
    line-height: 3.6rem;
    margin: 0 5px;
    position: relative;
    text-align: center;
    box-shadow: 0 3px 8px #aaa, inset 0 2px 3px #fff;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 3.6rem;
  }

  /* Circle */
  .icon-button span {
    border-radius: 0;
    display: block;
    height: 0;
    left: 50%;
    margin: 0;
    position: absolute;
    top: 50%;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    width: 0;
  }
  .icon-button:hover span {
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 3.6rem;
    margin: -1.8rem;
  }
  .twitter span {
    background-color: #4099ff;
  }
  .facebook span {
    background-color: #3b5998;
  }
  .google-plus span {
    background-color: #dd2a7b;
  }

  /* Icons */
  .icon-button i {
    background: none;
    color: white;
    height: 3.6rem;
    left: 0;
    line-height: 3.6rem;
    position: absolute;
    top: 0;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    width: 3.6rem;
    z-index: 10;
  }
  .icon-button .fa-telegram-plane {
    color: #128cc9;
  }
  .icon-button .fa-facebook-f {
    color: #3b5998;
  }
  .icon-button .fa-instagram {
    color: #dd2a7b;
  }
  .icon-button:hover .fa-telegram-plane,
  .icon-button:hover .fa-facebook-f,
  .icon-button:hover .fa-instagram {
    color: white;
  }
`;

const Button4 = () => {
  return (
    <DIV>
      <a href="#" className="icon-button twitter">
        <i className="fab fa-telegram-plane"></i>
        <span></span>
      </a>
      <a href="#" className="icon-button facebook">
        <i className="fab fa-facebook-f"></i>
        <span></span>
      </a>
      <a href="#" className="icon-button google-plus">
        <i className="fab fa-instagram"></i>
        <span></span>
      </a>
    </DIV>
  );
};

export default Button4;
