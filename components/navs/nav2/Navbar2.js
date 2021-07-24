import React, { useState } from "react";
import styled from "styled-components";
import {
  Home,
  ExpandMore,
  ExpandLess,
  Extension,
  BusinessCenter,
  MonetizationOn,
  Build,
  MailOutline,
} from "@styled-icons/material";

const DIV = styled.div`
  list-style: none;
  min-width: 220px;
  max-width: 250px;
  li {
    list-style: none;
    outline: none;
  }
  li button {
    outline: none !important;
    border: none;
  }
`;
const UL = styled.ul`
  list-style: none;
  padding-left: 1rem;
  border: none;
  .accordion-button::after {
    background-image: url("./images/chevron-down.png");
  }
  .accordion-button :focus,
  .accordion-button:active {
    outline: none;
    box-shadow: none;
    background: transparent;
    border-bottom: none;
    color: #da4008;
  }
  .accordion-button:not(.collapsed) {
    background-color: #1c1c1c;
    color: #da4008;
  }
  .accordion-button:not(.collapsed):after {
    background-image: url("./images/chevron-down180.png");
  }

  button {
    background-color: #1c1c1c;
    color: #fff;
  }
  .accordion-subheader:active {
    color: #da4008;
  }
  .accordion-item {
    border: none;
    background-color: #1c1c1c;
  }
  .accordion-header {
    background-color: #1c1c1c;
  }
  .accordion-subheader {
    color: #fff;
  }
  .accordion-collapse {
    border: none;
  }
  .accordion-collapse li {
    cursor: pointer;
  }

  .accordion-button.collapsed {
    border-bottom: 0;
  }
  .accordion-item > .accordion-subheader {
    font-size: 15px;
    font-weight: normal;
    line-height: 2rem;
    margin-bottom: 0;
  }
  .accordion-collapse .accordion-item h2 {
    transition: transform 0.3s ease;
    transform: translateX(0px);
  }
  .accordion-collapse .accordion-item :hover h2 {
    transition: transform 0.3s ease;
    transform: translateX(15px);
  }

  .accordion-button:after {
    width: 1rem;
    height: 1rem;
    background-size: 1rem;
  }

  .menuB:after {
    display: none;
  }
`;

const Navbar2 = () => {
  const [open, setOpen] = useState(false);
  return (
    <DIV>
      <UL className="accordion" id="accordionExample">
        <li className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Menu A
            </button>
          </h2>
          <ul
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <li className="accordion-item">
              <h2 className="accordion-subheader">Sub menu A1</h2>
            </li>
            <li className="accordion-item">
              <h2 className="accordion-subheader">Sub menu A2</h2>
            </li>
            <li className="accordion-item">
              <h2 className="accordion-subheader">Sub menu A3</h2>
            </li>
          </ul>
        </li>
        <li className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed menuB"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Menu B
            </button>
          </h2>
        </li>
        <li className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Menu C
            </button>
          </h2>
          <ul
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <li className="accordion-item">
              <h2 className="accordion-subheader">Sub menu C1</h2>
            </li>
            <li className="accordion-item">
              <h2 className="accordion-subheader">Sub menu C2</h2>
            </li>
            <li className="accordion-item">
              <h2 className="accordion-subheader">Sub menu C3</h2>
            </li>
          </ul>
        </li>
      </UL>
    </DIV>
  );
};

export default Navbar2;
