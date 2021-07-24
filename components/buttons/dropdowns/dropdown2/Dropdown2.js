import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  display: flex;
  align-items: center;
  /* align-content: center; */
  justify-content: center;
  /* background: #fbeae7; */
  color: #fff;
  font-family: "brandon-grotesque", "Brandon Grotesque", "Source Sans Pro",
    "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue",
    Arial, sans-serif;

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    transform-style: preserve-3d;
  }

  *:focus {
    outline: none !important;
  }

  a {
    cursor: pointer;
  }

  nav {
    position: relative;
    opacity: 0;
    -webkit-animation: bounceInUp 1000ms linear 500ms forwards;
    animation: bounceInUp 1000ms linear 500ms forwards;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  .down h2 {
    font-size: 15px;
    margin-bottom: 0;
  }
  nav label,
  nav a {
    transition: all 150ms ease-out;
    cursor: pointer;
    display: flex;
    align-items: center;
    align-content: center;
    height: 35px;
    width: 120px;
    padding: 0 12px;
    border: none;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 600;
    background: rgba(0, 0, 0, 0.3);
    letter-spacing: -1px;
  }
  nav a:hover,
  nav a:focus {
    border-color: #d0ddd1;
  }
  nav a:active {
    border-color: #f5c8bf;
  }
  nav label {
    position: relative;
  }
  nav label:before,
  nav label:after {
    transition: all 150ms ease-out;
    content: "";
    display: block;
    position: absolute;
    width: 2px;
    height: 8px;
    background: #a6ada7;
    border-radius: 2px;
  }
  nav label:before {
    transform: rotate(-45deg);
  }
  nav label:after {
    transform: rotate(45deg);
  }
  nav label.down:before,
  nav label.down:after {
    transform-origin: center 7px;
    top: 50%;
    margin-top: -6px;
    right: 17px;
  }
  nav label.right:before,
  nav label.right:after {
    transform-origin: right center;
    top: 50%;
    right: 17px;
  }
  nav label.right:before {
    margin-top: -8px;
  }
  nav label.right:after {
    margin-top: -1px;
  }
  nav > label {
    transform: translateZ(1px);
    z-index: 1;
  }
  nav ul {
    will-change: visibility;
    transition: visibility 0ms ease-out 600ms;
    visibility: hidden;
    z-index: 1;
  }
  nav ul li {
    will-change: transform, opacity;
    padding: 2px 0;
    opacity: 0;
  }
  nav ul li:nth-child(1) {
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 500ms,
      opacity 100ms ease-out 500ms;
  }
  nav ul li:nth-child(2) {
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 400ms,
      opacity 100ms ease-out 400ms;
  }
  nav ul li:nth-child(3) {
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 300ms,
      opacity 100ms ease-out 300ms;
  }
  nav ul li:nth-child(4) {
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 200ms,
      opacity 100ms ease-out 200ms;
  }
  nav ul li:nth-child(5) {
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 100ms,
      opacity 100ms ease-out 100ms;
  }
  nav > ul {
    position: relative;
    padding-top: 4px;
  }
  nav > ul > li {
    transform: translateY(-100%);
  }
  nav > ul > li > label {
    transform: translateZ(0.5px);
  }
  nav > ul ul {
    position: absolute;
    top: 0;
    right: -105%;
  }
  nav > ul ul > li {
    transform: translateX(-100%);
  }
  nav input {
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    opacity: 0;
    position: absolute;
    width: 160px;
    height: 40px;
    margin: 0;
  }
  nav input:hover ~ label,
  nav input:focus ~ label {
    border-color: #d0ddd1;
  }
  nav input:active ~ label {
    border-color: #f5c8bf;
  }
  nav input:checked ~ label {
    border-color: #aebfaf;
  }
  nav input:checked ~ label.down:before,
  nav input:checked ~ label.down:after {
    margin-top: -11px;
  }
  nav input:checked ~ label.down:before {
    transform: rotate(-135deg);
  }
  nav input:checked ~ label.down:after {
    transform: rotate(135deg);
  }
  nav input:checked ~ label.right:before {
    transform: rotate(45deg);
    margin-top: -7px;
  }
  nav input:checked ~ label.right:after {
    transform: rotate(-45deg);
    margin-top: -3px;
  }
  nav input:checked ~ ul {
    visibility: visible;
    transition: visibility 0ms ease-out 0ms;
  }
  nav input:checked ~ ul > li {
    opacity: 1;
    transform: none;
  }
  nav input:checked ~ ul > li:nth-child(1) {
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 100ms,
      opacity 100ms ease-out 100ms;
  }
  nav input:checked ~ ul > li:nth-child(2) {
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 200ms,
      opacity 100ms ease-out 200ms;
  }
  nav input:checked ~ ul > li:nth-child(3) {
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 300ms,
      opacity 100ms ease-out 300ms;
  }
  nav input:checked ~ ul > li:nth-child(4) {
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 400ms,
      opacity 100ms ease-out 400ms;
  }
  nav input:checked ~ ul > li:nth-child(5) {
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 500ms,
      opacity 100ms ease-out 500ms;
  }
  nav > input {
    z-index: 2;
    top: 0;
    left: 0;
  }
  nav > input:not(:checked) ~ ul > li input:checked ~ ul li {
    opacity: 0;
    transform: translateX(-100%);
  }
  nav > input:not(:checked) ~ ul > li input:checked ~ ul li:nth-child(1) {
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 500ms,
      opacity 100ms ease-out 500ms;
  }
  nav > input:not(:checked) ~ ul > li input:checked ~ ul li:nth-child(2) {
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 400ms,
      opacity 100ms ease-out 400ms;
  }
  nav > input:not(:checked) ~ ul > li input:checked ~ ul li:nth-child(3) {
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 300ms,
      opacity 100ms ease-out 300ms;
  }
  nav > input:not(:checked) ~ ul > li input:checked ~ ul li:nth-child(4) {
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 200ms,
      opacity 100ms ease-out 200ms;
  }
  nav > input:not(:checked) ~ ul > li input:checked ~ ul li:nth-child(5) {
    transition: transform 150ms cubic-bezier(0, 0.5, 0.5, 1.1) 100ms,
      opacity 100ms ease-out 100ms;
  }

  /* https://goo.gl/1h4kf5 */
  @-webkit-keyframes bounceInUp {
    0% {
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 200, 0, 1);
      opacity: 0;
    }
    5.51% {
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 95.356, 0, 1);
    }
    11.01% {
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 23.691, 0, 1);
    }
    16.52% {
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -9.467, 0, 1);
    }
    21.92% {
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -16.994, 0, 1);
    }
    36.24% {
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -3.682, 0, 1);
      opacity: 1;
    }
    50.55% {
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1.004, 0, 1);
    }
    79.08% {
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.059, 0, 1);
    }
    100% {
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      opacity: 1;
    }
  }
  @keyframes bounceInUp {
    0% {
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 200, 0, 1);
      opacity: 0;
    }
    5.51% {
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 95.356, 0, 1);
    }
    11.01% {
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 23.691, 0, 1);
    }
    16.52% {
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -9.467, 0, 1);
    }
    21.92% {
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -16.994, 0, 1);
    }
    36.24% {
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -3.682, 0, 1);
      opacity: 1;
    }
    50.55% {
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1.004, 0, 1);
    }
    79.08% {
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, -0.059, 0, 1);
    }
    100% {
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      opacity: 1;
    }
  }
  @media (max-width: 600) {
    nav a {
      transition: all 150ms ease-out;
      cursor: pointer;
      display: flex;
      align-items: center;
      align-content: center;
      height: 40px;
      width: 120px;
      padding: 0 12px;
      background: white;
      border: 2px solid #a6ada7;
      border-radius: 2px;
      font-size: 15px;
      font-weight: 600;
      letter-spacing: -1px;
    }

    nav > ul ul {
      position: absolute;
      top: 0;
      right: -105%;
    }
    nav input {
      cursor: pointer;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      opacity: 0;
      position: absolute;
      width: 120px;
      height: 40px;
      margin: 0;
    }
  }
`;
const Dropdown2 = () => {
  return (
    <DIV>
      <main ontouchstart>
        <nav>
          <input id="link-top" type="checkbox" />
          <label className="down" for="link-top">
            <h2>Dropdown-3</h2>
          </label>
          <ul>
            <li>
              {/* <input id="link-shop" type="checkbox" />
              <label className="right" for="link-shop"> */}
              <a>Item1</a>
              {/* </label> */}
              {/* <ul>
                <li>
                  <a>Sub-Item1</a>
                </li>
                <li>
                  <a>Sub-Item2</a>
                </li>
                <li>
                  <a>Sub-Item3</a>
                </li>
                <li>
                  <a>Sub-Item4</a>
                </li>
                <li>
                  <a>Sub-Item5</a>
                </li>
              </ul> */}
            </li>
            <li>
              <a>Item2</a>
            </li>
            <li>
              <a>Item3</a>
            </li>
            <li>
              <a>Item4</a>
            </li>
          </ul>
        </nav>
      </main>
    </DIV>
  );
};

export default Dropdown2;
