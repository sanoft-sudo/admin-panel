import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  label input[type='checkbox']{
    display: none;
  }

  .grid {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
  }

  label {
    display: block;
    cursor: pointer;
    display: block;
    position: relative;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    box-shadow: 0 0 4.1666666667vw rgba(0, 0, 0, 0.25),
      0 0 0.8333333333vw rgba(0, 0, 0, 0.1);
    background-color: var(--color-white);
    margin: 0.5rem;
  }

  path {
    fill: none;
    stroke: #000000;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    --length: 24;
    --offset: -38;
    stroke-dasharray: var(--length) var(--total-length);
    stroke-dashoffset: var(--offset);
    transition: all 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  circle {
    opacity: 0;
  }

  .cross input:checked + svg .line--1,
  .cross input:checked + svg .line--3 {
    --length: 22.627416998;
  }

  .cross input:checked + svg .line--2 {
    --length: 0;
  }

  .back input:checked + svg .line--1,
  .back input:checked + svg .line--3 {
    --length: 8.602325267;
  }

  .menu--1 {
    /* background-color: #FFFFFF; */
  }

  .menu--1 .line--1,
  .menu--1 .line--3 {
    --total-length: 126.64183044433594;
  }

  .menu--1 .line--2 {
    --total-length: 70;
  }

  .menu--1 input:checked + svg .line--1,
  .menu--1 input:checked + svg .line--3 {
    --offset: -94.1149185097;
  }

  .menu--1 input:checked + svg .line--2 {
    --offset: -50;
  }

  .menu--2 {
    /* background-color: #ffffff; */
  }

  .menu--2 .line--1,
  .menu--2 .line--3 {
    --total-length: 111.22813415527344;
    --offset: -50.22813415527344;
  }

  .menu--2 .line--2 {
    --total-length: 99;
  }

  .menu--2 input:checked + svg path {
    transform: translateX(30px);
  }

  .menu--2 input:checked + svg .line--1,
  .menu--2 input:checked + svg .line--3 {
    --offset: -16.9705627485;
  }

  .menu--2 input:checked + svg .line--2 {
    --offset: -20;
  }

  .menu--3 {
    /* background-color: #ffffff; */
  }

  .menu--3 .line--1,
  .menu--3 .line--3 {
    --total-length: 126.38166809082031;
  }

  .menu--3 .line--2 {
    --total-length: 80;
  }

  .menu--3 input:checked + svg .line--1,
  .menu--3 input:checked + svg .line--3 {
    --offset: -109.1770175568;
  }

  .menu--4 {
    /* background-color: #FFFFFF; */
  }

  .menu--4 .line--1,
  .menu--4 .line--3 {
    --total-length: 103.35061645507812;
    --offset: -42.35061645507812;
  }

  .menu--4 .line--2 {
    --total-length: 99;
  }

  .menu--4 input:checked + svg path {
    transform: translateX(31px);
  }

  .menu--4 input:checked + svg .line--1,
  .menu--4 input:checked + svg .line--3 {
    --offset: -8.602325267;
  }

  .menu--4 input:checked + svg .line--2 {
    --offset: -7;
  }

  .debug {
    display: none;
  }

  .line--debug {
    opacity: 0;
    stroke-dasharray: none;
  }
  label svg {
    width: 4rem;
    height: 4rem;
  }

  @media (min-width: 500px) {
  }
  label {
    width: 3rem;
    height: 3rem;
    margin: 0.3rem;
  }
  label svg {
    width: 3rem;
    height: 3rem;
  }
  circle {
    width: 40px;
    height: 40px;
  }
`;

const BurgerButton2 = () => {
  return (
    <DIV>
      <div className="grid">
        <div className="menu cross menu--1">
          <label>
            <input type="checkbox" />
            <svg viewBox="15 15 70 70" xmlns="http://www.w3.org/2000/svg">
              {/* <circle cx="50" cy="50" r="40" /> */}
              <path className="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
              <path className="line--2" d="M0 50h70" />
              <path className="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
            </svg>
          </label>
        </div>
        <div className="menu cross menu--2">
          <label>
            <input type="checkbox" />
            <svg viewBox="15 15 70 70" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" />
              <path className="line--1" d="M0 70l28-28c2-2 2-2 7-2h64" />
              <path className="line--2" d="M0 50h99" />
              <path className="line--3" d="M0 30l28 28c2 2 2 2 7 2h64" />
            </svg>
          </label>
        </div>
        <div className="menu back menu--3">
          <label>
            <input type="checkbox" />
            <svg viewBox="15 15 70 70" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" />
              <path className="line--1" d="M0 40h62c18 0 18-20-17 5L31 55" />
              <path className="line--2" d="M0 50h80" />
              <path className="line--3" d="M0 60h62c18 0 18 20-17-5L31 45" />
            </svg>
          </label>
        </div>
        <div className="menu back menu--4">
          <label>
            <input type="checkbox" />
            <svg viewBox="15 15 70 70" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" />
              <path className="line--1" d="M0 55l14-10c4.7-3.3 9-5 13-5h72" />
              <path className="line--2" d="M0 50h99" />
              <path className="line--3" d="M0 45l14 10c4.7 3.3 9 5 13 5h72" />
            </svg>
          </label>
        </div>
      </div>
    </DIV>
  );
};

export default BurgerButton2;
