import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  margin-top: 30px;
  background: linear-gradient(45deg, #fc466b, #3f5efb);
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;

  .container {
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .accordion-item {
    background: rgba(255, 255, 255, 0.3);
    height: 100%;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
  }

  .accordion-item hr {
    border: 1px solid rgba(7, 7, 7, 0.5);
    margin: 0.5rem 0;
  }

  .accordion-link {
    font-size: 1.6rem;
    color: rgba(7, 7, 7, 0.8);
    text-decoration: none;
    /* background: rgba(255, 255, 255, 0.3); */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
  }

  .accordion-link h3 {
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 0;
  }

  .accordion-link i {
    color: #e7d5ff;
    padding: 0.5rem;
  }

  .accordion-link ul {
    display: flex;
    align-items: flex-end;
    list-style-type: none;
    /* margin-left: 25px; */
    margin-bottom: 0;
  }

  .accordion-link li {
    font-size: 11px;
    color: rgba(7, 7, 7, 0.7);
    padding: 0 0 1px 5px;
  }

  .accordion-link div {
    display: flex;
  }

  .answer {
    max-height: 0;
    overflow: hidden;
    position: relative;
    background: rgba(255, 255, 255, 0.3);
    transition: max-height 650ms;
  }

  .answer p {
    color: #fff;
    font-size: 15px;
    padding: 2rem;
  }

  .accordion-item:target .answer {
    max-height: 20rem;
  }
  .accordion-link .fa-chevron-right {
    transform: rotate(0deg);
    transition: ease-in-out 500ms;
    font-size: 15px;
  }

  .accordion-item:target .accordion-link .fa-chevron-right {
    transform: rotate(90deg);
    transition: ease-in-out 500ms;
  }

  /* .accordion-item:target .accordion-link .fa-chevron-down {
    display: block;
  } */

  @media (max-width: 413px) {
    .container {
      padding: 0.5rem;
    }
    .accordion-link div {
      flex-direction: column;
    }
    ul {
      padding-left: 0;
      flex-wrap: wrap;
      max-width: 130px;
    }
    .accordion-link h3 {
      font-size: 17px;
    }
  }
  @media (min-width: 414px) and (max-width: 663px) {
    .container {
      padding: 0.5rem;
    }
    .accordion-link div {
      flex-direction: column;
    }
    ul {
      padding-left: 0;
      flex-wrap: wrap;
      max-width: 232px;
    }
    .accordion-link h3 {
      font-size: 17px;
    }
  } ;
`;

const Accordion1 = () => {
  return (
    <DIV>
      <div className="container">
        <div className="accordion">
          <div className="accordion-item" id="question1">
            <a className="accordion-link" href="#question1">
              <div className="flex">
                <h3>BRANDING</h3>
                <ul>
                  <li>#Figma</li>
                  <li>#Sketch</li>
                  <li>#Adobe</li>
                  <li>#Invision</li>
                  <li>#Protopie</li>
                </ul>
              </div>
              <i className="fas fa-chevron-right"></i>
            </a>
            <div className="answer">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid ipsa quasi consequuntur, est esse, amet dolor odit rerum
                illum nisi, optio ab! Corporis nam laudantium magnam mollitia
                nemo quod alias!
              </p>
            </div>
            <hr />
          </div>
          <div className="accordion-item" id="question2">
            <a className="accordion-link" href="#question2">
              <div className="flex">
                <h3>UX/UI DESIGN</h3>
                <ul>
                  <li>#Figma</li>
                  <li>#Sketch</li>
                  <li>#Adobe</li>
                  <li>#Invision</li>
                  <li>#Protopie</li>
                </ul>
              </div>
              <i className="fas fa-chevron-right"></i>
            </a>
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </p>
            </div>
            <hr />
          </div>
          <div className="accordion-item" id="question3">
            <a className="accordion-link" href="#question3">
              <div className="flex">
                <h3>FRONTEND DEVELOPMENT</h3>
                <ul>
                  <li>#Html</li>
                  <li>#Css</li>
                  <li>#Javascript</li>
                  <li>#React</li>
                  <li>#Redux</li>
                  <li>#Next</li>
                </ul>
              </div>
              <i className="fas fa-chevron-right"></i>
            </a>
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </p>
            </div>
            <hr />
          </div>
          <div className="accordion-item" id="question4">
            <a className="accordion-link" href="#question4">
              <div>
                <h3>BACKEND DEVELOPMENT</h3>
                <ul>
                  <li>#Node.js</li>
                  <li>#Java</li>
                  <li>#Python</li>
                  <li>#Spring</li>
                </ul>
              </div>
              <i className="fas fa-chevron-right"></i>
            </a>
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </DIV>
  );
};

export default Accordion1;
