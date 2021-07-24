import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  width: 100%;
  margin-top: 15px;

  label svg {
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: -16px;
    left: -23px;
  }
  label {
    display: block;
    cursor: pointer;
    display: block;
    position: relative;
    width: 3rem;
    height: 3rem;
    margin: 0.5rem;
  }

  path {
    fill: none;
    stroke: #fff;
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
    background-color: #fff;
  }

  .cross input:checked + svg .line--2 {
    --length: 0;
  }

  .back input:checked + svg .line--1,
  .back input:checked + svg .line--3 {
    --length: 8.602325267;
  }

  .menu--2 .line--1,
  .menu--2 .line--3 {
    --total-length: 111.22813415527344;
    --offset: -50.22813415527344;
  }

  .menu--2 .line--2 {
    --total-length: 99;
    color: #fff;
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
  input {
    display: none;
  }
  circle {
    opacity: 0;
  }

  .navbar-toggler {
    width: 35px;
    height: 35px;
    outline-width: 0;
    outline: none;
    border: none;
  }

  .effect-20 ~ .focus-border:before,
  .effect-20 ~ .focus-border:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #3041a3;
    transition: 0.3s;
  }
  .effect-20 ~ .focus-border:after {
    top: auto;
    bottom: 0;
    left: auto;
    right: 0;
  }
  .effect-20 ~ .focus-border i:before,
  .effect-20 ~ .focus-border i:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 0;
    background-color: #3041a3;
    transition: 0.4s;
  }
  .effect-20 ~ .focus-border i:after {
    left: auto;
    right: 0;
    top: auto;
    bottom: 0;
  }
  .effect-20:focus ~ .focus-border:before,
  .effect-20:focus ~ .focus-border:after,
  .has-content.effect-20 ~ .focus-border:before,
  .has-content.effect-20 ~ .focus-border:after {
    width: 100%;
    transition: 0.3s;
  }
  .effect-20:focus ~ .focus-border i:before,
  .effect-20:focus ~ .focus-border i:after,
  .has-content.effect-20 ~ .focus-border i:before,
  .has-content.effect-20 ~ .focus-border i:after {
    height: 100%;
    transition: 0.4s;
  }
  .effect-20 ~ label {
    position: absolute;
    left: 14px;
    width: 100%;
    top: 10px;
    color: #aaa;
    transition: 0.3s;
    z-index: -1;
    letter-spacing: 0.5px;
  }
  .effect-20:focus ~ label,
  .has-content.effect-20 ~ label {
    top: -18px;
    left: 0;
    font-size: 12px;
    color: #3041a3;
    transition: 0.3s;
  }

  .col-md-3 {
    float: left;
    width: 27.33%;
    margin: 40px 3%;
    position: relative;
    padding-left: 0;
    padding-right: 0;
  }
  @media (max-width: 600px) {
    .col-md-3 {
      float: left;
      width: 95%;
      margin: 20px 3%;
      position: relative;
      padding-left: 0;
      padding-right: 0;
    }
  }
  @media (min-width: 600px) and (max-width: 768px) {
    .col-md-3 {
      float: left;
      width: 43.99%;
      margin: 20px 3%;
      position: relative;
      padding-left: 0;
      padding-right: 0;
    }
  }

  /* necessary to give position: relative to parent. */
  input[type="text"] {
    font: 15px/24px "Lato", Arial, sans-serif;
    color: #333;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
  }

  /* .navbar-search {
    margin-left: auto;
  } */
`;

const Navbar6 = () => {
  return (
    <DIV>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <div
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="menu cross menu--2">
              <label>
                <input type="checkbox" />
                <svg viewBox="15 15 70 70" xmlns="http://www.w3.org/2000/svg">
                  {/* <circle cx="50" cy="50" r="40" /> */}
                  <path className="line--1" d="M0 70l28-28c2-2 2-2 7-2h64" />
                  <path className="line--2" d="M0 50h99" />
                  <path className="line--3" d="M0 30l28 28c2 2 2 2 7 2h64" />
                </svg>
              </label>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
            <div className="navbar-search">
              <form className="d-flex">
                <div className="col-md-3 input-effect">
                  <input className="effect-20" type="text" placeholder="" />
                  <label>First Name</label>
                  <span className="focus-border">
                    <i></i>
                  </span>
                </div>
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </DIV>
  );
};

export default Navbar6;
