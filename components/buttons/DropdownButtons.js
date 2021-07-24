import React from "react";
import styled from "styled-components";
import Dropdown2 from "./dropdowns/dropdown2/Dropdown2";

const Styles = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  .chartBox {
    display: flex;
    width: 100%;
    margin-bottom: 30px;
    flex-direction: column;
    position: relative;
    padding: 20px;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 15px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    margin: 2px;
    text-align: center;
  }
  .container-head {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    width: 100%;
    margin-bottom: 5px;
  }
  .container-head h1 {
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-size: 18px;
    font-family: Roboto, sans-serif;
    font-weight: 500;
  }
  .button-box {
    display: flex;
    flex-direction: column;
  }
  .dropdown {
    position: relative;
    display: inline-block;
    width: 120px;
    height: 35px;
    background: rgba(0, 0, 0, 0.2);
    color: #fff;
    border: 0;
    font-size: 14px;
    border-radius: 4px;
    font-family: "Raleway", sans-serif;
    transition: 0.6s;
    margin: 7px 0;
  }
  .dropdown:hover {
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  .dropdown:hover .dropdown_menu li {
    display: block;
  }
  .dropdown_menu {
    position: absolute;
    padding-left: 0;
    top: 100%;
    left: 0;

    width: 100%;
    z-index: 999;
  }
  .dropdown_menu li {
    display: none;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 5px 20px;
    font-size: 14px;
    opacity: 0;
  }
  .dropdown_menu li:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .dropdown_menu-2 .dropdown_item-1 {
    transform-origin: top center;
    animation: rotateX 300ms 60ms ease-in-out forwards;
  }
  .dropdown_menu-2 .dropdown_item-2 {
    transform-origin: top center;
    animation: rotateX 300ms 120ms ease-in-out forwards;
  }
  .dropdown_menu-2 .dropdown_item-3 {
    transform-origin: top center;
    animation: rotateX 300ms 180ms ease-in-out forwards;
  }
  .dropdown_menu-2 .dropdown_item-4 {
    transform-origin: top center;
    animation: rotateX 300ms 240ms ease-in-out forwards;
  }
  .dropdown_menu-2 .dropdown_item-5 {
    transform-origin: top center;
    animation: rotateX 300ms 300ms ease-in-out forwards;
  }

  .dropdown_menu-5 .dropdown_item-1 {
    transform-origin: top center;
    animation: translateX 300ms 60ms ease-in-out forwards;
  }
  .dropdown_menu-5 .dropdown_item-2 {
    transform-origin: top center;
    animation: translateX 300ms 120ms ease-in-out forwards;
  }
  .dropdown_menu-5 .dropdown_item-3 {
    transform-origin: top center;
    animation: translateX 300ms 180ms ease-in-out forwards;
  }
  .dropdown_menu-5 .dropdown_item-4 {
    transform-origin: top center;
    animation: translateX 300ms 240ms ease-in-out forwards;
  }
  .dropdown_menu-5 .dropdown_item-5 {
    transform-origin: top center;
    animation: translateX 300ms 300ms ease-in-out forwards;
  }

  @-moz-keyframes rotateX {
    0% {
      opacity: 0;
      transform: rotateX(-90deg);
    }
    50% {
      transform: rotateX(-20deg);
    }
    100% {
      opacity: 1;
      transform: rotateX(0deg);
    }
  }
  @-webkit-keyframes rotateX {
    0% {
      opacity: 0;
      transform: rotateX(-90deg);
    }
    50% {
      transform: rotateX(-20deg);
    }
    100% {
      opacity: 1;
      transform: rotateX(0deg);
    }
  }
  @-o-keyframes rotateX {
    0% {
      opacity: 0;
      transform: rotateX(-90deg);
    }
    50% {
      transform: rotateX(-20deg);
    }
    100% {
      opacity: 1;
      transform: rotateX(0deg);
    }
  }
  @keyframes rotateX {
    0% {
      opacity: 0;
      transform: rotateX(-90deg);
    }
    50% {
      transform: rotateX(-20deg);
    }
    100% {
      opacity: 1;
      transform: rotateX(0deg);
    }
  }

  @-moz-keyframes translateX {
    0% {
      opacity: 0;
      transform: translateX(60px);
    }
    80% {
      transform: translateX(-5px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  @-webkit-keyframes translateX {
    0% {
      opacity: 0;
      transform: translateX(60px);
    }
    80% {
      transform: translateX(-5px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  @-o-keyframes translateX {
    0% {
      opacity: 0;
      transform: translateX(60px);
    }
    80% {
      transform: translateX(-5px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
  @keyframes translateX {
    0% {
      opacity: 0;
      transform: translateX(60px);
    }
    80% {
      transform: translateX(-5px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

const DropdownButtons = () => {
  return (
    <Styles>
      <div className="chartBox">
        <div className="container-head">
          <h1>Dropdowns</h1>
        </div>
        <div className="button-box">
          <div>
            <button className="dropdown dropdown-2">
              Dropdown-1
              <ul className="dropdown_menu dropdown_menu-2">
                <li className="dropdown_item-1">Item 1</li>
                <li className="dropdown_item-2">Item 2</li>
                <li className="dropdown_item-3">Item 3</li>
                <li className="dropdown_item-4">Item 4</li>
                <li className="dropdown_item-5">Item 5</li>
              </ul>
            </button>
          </div>
          <div>
            <button className="dropdown dropdown-5">
              Dropdown-2
              <ul className="dropdown_menu dropdown_menu-5">
                <li className="dropdown_item-1">Item 1</li>
                <li className="dropdown_item-2">Item 2</li>
                <li className="dropdown_item-3">Item 3</li>
                <li className="dropdown_item-4">Item 4</li>
                <li className="dropdown_item-5">Item 5</li>
              </ul>
            </button>
          </div>
          <div>
            <Dropdown2 />
          </div>
        </div>
      </div>
    </Styles>
  );
};
export default DropdownButtons;
