import React, { useState } from "react";
import styled from "styled-components";

const DIV = styled.div`
  margin-top: 30px;
  background: linear-gradient(45deg, #fc466b, #3f5efb);
  /* display: flex; */
  padding: 10px;
  align-items: center;
  justify-content: center;
  perspective: 900;

  .accordion-menu {
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    max-width: 370px;
    width: 100%;
    padding: 10px 20px 20px;
    border-radius: 5px;
  }

  h2 {
    font-size: 16px;
    line-height: 34px;
    font-weight: 500;
    letter-spacing: 1px;
    display: block;
    margin: 0;
    cursor: pointer;
    color: #6c6c6a;
    text-transform: uppercase;
  }

  p {
    color: rgba(48, 69, 92, 0.8);
    font-size: 15px;
    line-height: 15px;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
    max-height: 800px;
    opacity: 1;
    transform: translate(0, 0);
    margin-top: 14px;
    z-index: 2;
  }

  ul {
    list-style: none;
  }
  ul li {
    cursor: pointer;
        border-bottom: 1px solid rgba(0,0,0,0.12);

  }

  ul.first {
    list-style: none;
    perspective: 900;
    padding: 0 20px 10px;
    margin: 0;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    height: 100%;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
  }

  ul li {
    position: relative;
    padding: 0;
    margin: 0;
    padding-bottom: 4px;
    padding-top: 18px;
    border-top: 1px dotted #dce7eb;
        border-bottom: 1px solid rgba(0,0,0,0.12);

  }

  ul li:nth-child(1) {
        border-bottom: 1px solid rgba(0,0,0,0.12);

  }

  ul li:nth-of-type(1) {
    animation-delay: 0.5s;
  }

  ul li:nth-of-type(2) {
    animation-delay: 0.75s;
  }

  ul li:nth-of-type(3) {
    animation-delay: 1s;
  }
  ul li:nth-of-type(4) {
    animation-delay: 1.25s;
  }

  ul li:last-of-type {
    padding-bottom: 0;
  }

  ul li:nth-child(1) {
    border: none;
  }

  p ul li:nth-of-type(1) {
    animation-delay: 0.5s;
  }

  p ul li:nth-of-type(2) {
    animation-delay: 0.75s;
  }

  p ul li:nth-of-type(3) {
    animation-delay: 1s;
  }
  p ul li:nth-of-type(4) {
    animation-delay: 1.25s;
  }
  p ul li:nth-of-type(5) {
    animation-delay: 1.5s;
  }
  p ul li:nth-of-type(6) {
    animation-delay: 1.75s;
  }
  p ul li:nth-of-type(7) {
    animation-delay: 2s;
  }

  ul li .arrow {
    position: absolute;
    transform: translate(-6px, 0);
    margin-top: 12px;
    right: 0;
  }

  ul li .fas {
    color: #f6483b;
    font-size: 15px;
    margin-right: 10px;
  }

  ul li .arrow:before,
  ul li .arrow:after {
    content: "";
    position: absolute;
    background-color: #d514db;
    width: 3px;
    height: 9px;
  }

  ul li .arrow:before {
    transform: translate(-2px, 0) rotate(45deg);
  }

  ul li .arrow:after {
    transform: translate(2px, 0) rotate(-45deg);
  }

  ul li input[type="checkbox"] {
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
  }

  ul li input[type="checkbox"]:checked ~ p {
    margin-top: 0;
    max-height: 0;
    opacity: 0;
    transform: translate(0, 50%);
  }
  ul li input[type="checkbox"]:checked ~ h2 {
    color: #d514db;
  }

  ul li input[type="checkbox"]:checked ~ .arrow:before {
    transform: translate(2px, 0) rotate(45deg);
  }

  ul li input[type="checkbox"]:checked ~ .arrow:after {
    transform: translate(-2px, 0) rotate(-45deg);
  }

  .transition,
  p,
  ul li .arrow:before,
  ul li .arrow:after {
    transition: all 0.25s ease-in-out;
  }

  .flipIn,
  h1,
  ul li {
    animation: flipdown 0.5s ease both;
  }
  .flipIn,
  p ul li {
    animation: flipup 0.5s ease both;
  }

  .no-select,
  h2 {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    user-select: none;
  }

  @keyframes flipdown {
    0% {
      opacity: 0;
      transform-origin: top center;
      transform: rotateX(-90deg);
    }

    5% {
      opacity: 1;
    }

    80% {
      transform: rotateX(8deg);
    }

    83% {
      transform: rotateX(6deg);
    }

    92% {
      transform: rotateX(-3deg);
    }

    100% {
      transform-origin: top center;
      transform: rotateX(0deg);
    }
  }
  @keyframes flipup {
    0% {
      opacity: 0;
      transform-origin: bottom center;
      transform: rotateX(-90deg);
    }

    5% {
      opacity: 1;
    }

    80% {
      transform: rotateX(8deg);
    }

    83% {
      transform: rotateX(6deg);
    }

    92% {
      transform: rotateX(-3deg);
    }

    100% {
      transform-origin: top center;
      transform: rotateX(0deg);
    }
  }

  @media (max-width: 413px) {
    .accordion-menu {
      padding: 0;
    }
    h2 {
      font-size: 12px;
    }
  }
  @media (min-width: 414px) and (max-width: 433px) {
    .accordion-menu {
      padding: 0;
    }
    h2 {
      font-size: 13px;
    }
  }
`;

const Accordion2 = () => {
  const [check, setCheck] = useState({
    check1: true,
    check2: true,
    check3: true,
    check4: true,
  });

  const handleCheck = (e) => {
    setCheck(e.target.checked);
  };

  return (
    <DIV>
      <div className="accordion-menu">
        <ul className="first">
          <li onClick={handleCheck}>
            <input type="checkbox" checked={check?.check1} />
            <i className="arrow"></i>
            <h2>UX/UI design</h2>
            <p>
              <ul>
                <li>Figma</li>
                <li>Adobe</li>
                <li>Sketch</li>
                <li>Invision</li>
              </ul>
            </p>
          </li>
          <li onClick={handleCheck}>
            <input type="checkbox" checked={check?.check2} />
            <i className="arrow"></i>
            <h2>Frontend development</h2>
            <p>
              <ul>
                <li>Html</li>
                <li>Css</li>
                <li>Bootstrap</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Next</li>
              </ul>
            </p>
          </li>
          <li onClick={handleCheck}>
            <input type="checkbox" checked={check?.check3} />
            <i className="arrow"></i>
            <h2>Backend development</h2>
            <p>
              <ul>
                <li>Node.js</li>
                <li>Java</li>
                <li>Spring</li>
                <li>Python</li>
              </ul>
            </p>
          </li>
          <li onClick={handleCheck}>
            <input type="checkbox" checked={check?.check4} />
            <i className="arrow"></i>
            <h2>database</h2>
            <p>
              <ul>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </p>
          </li>
        </ul>
      </div>
    </DIV>
  );
};

export default Accordion2;
