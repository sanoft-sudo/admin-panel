import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  /* necessary to give position: relative to parent. */
  input[type="text"] {
    font: 15px/24px "Muli", sans-serif;
    color: #333;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
  }

  input[type="text"]:focus {
    outline: none;
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

  .effect-1,
  .effect-2,
  .effect-3 {
    border: 0;
    padding: 7px 0;
    border-bottom: 1px solid #ccc;
    background: transparent;
  }

  .effect-1 ~ .focus-border {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #209e91;
    transition: 0.4s;
  }
  .effect-1:focus ~ .focus-border {
    width: 100%;
    transition: 0.4s;
  }

  .effect-2 ~ .focus-border {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #209e91;
    transition: 0.4s;
  }
  .effect-2:focus ~ .focus-border {
    width: 100%;
    transition: 0.4s;
    left: 0;
  }

  .effect-3 ~ .focus-border {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    z-index: 99;
  }
  .effect-3 ~ .focus-border:before,
  .effect-3 ~ .focus-border:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #209e91;
    transition: 0.4s;
  }
  .effect-3 ~ .focus-border:after {
    left: auto;
    right: 0;
  }
  .effect-3:focus ~ .focus-border:before,
  .effect-3:focus ~ .focus-border:after {
    width: 50%;
    transition: 0.4s;
  }

  .effect-4,
  .effect-5,
  .effect-6 {
    border: 0;
    padding: 5px 0 7px;
    border: 1px solid transparent;
    border-bottom-color: #ccc;
    transition: 0.4s;
    background: transparent;
  }

  .effect-4:focus,
  .effect-5:focus,
  .effect-6:focus {
    padding: 5px 14px 7px;
    transition: 0.4s;
  }

  .effect-4 ~ .focus-border {
    position: absolute;
    height: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    transition: 0.4s;
    z-index: -1;
  }
  .effect-4:focus ~ .focus-border {
    transition: 0.4s;
    height: 40px;
    border: 2px solid #209e91;
    z-index: 1;
  }

  .effect-5 ~ .focus-border {
    position: absolute;
    height: 40px;
    bottom: 0;
    left: 0;
    width: 0;
    transition: 0.4s;
  }
  .effect-5:focus ~ .focus-border {
    width: 100%;
    transition: 0.4s;
    border: 2px solid #209e91;
  }

  .effect-6 ~ .focus-border {
    position: absolute;
    height: 40px;
    bottom: 0;
    right: 0;
    width: 0;
    transition: 0.4s;
  }
  .effect-6:focus ~ .focus-border {
    width: 100%;
    transition: 0.4s;
    border: 2px solid #209e91;
  }

  .effect-7,
  .effect-8,
  .effect-9 {
    border: 1px solid #ccc;
    padding: 7px 14px 9px;
    transition: 0.4s;
    background: transparent;
  }

  .effect-7 ~ .focus-border:before,
  .effect-7 ~ .focus-border:after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #209e91;
    transition: 0.4s;
  }
  .effect-7 ~ .focus-border:after {
    top: auto;
    bottom: 0;
  }
  .effect-7 ~ .focus-border i:before,
  .effect-7 ~ .focus-border i:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 2px;
    height: 0;
    background-color: #209e91;
    transition: 0.6s;
  }
  .effect-7 ~ .focus-border i:after {
    left: auto;
    right: 0;
  }
  .effect-7:focus ~ .focus-border:before,
  .effect-7:focus ~ .focus-border:after {
    left: 0;
    width: 100%;
    transition: 0.4s;
  }
  .effect-7:focus ~ .focus-border i:before,
  .effect-7:focus ~ .focus-border i:after {
    top: 0;
    height: 100%;
    transition: 0.6s;
  }

  .effect-8 ~ .focus-border:before,
  .effect-8 ~ .focus-border:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #209e91;
    transition: 0.3s;
  }
  .effect-8 ~ .focus-border:after {
    top: auto;
    bottom: 0;
    left: auto;
    right: 0;
  }
  .effect-8 ~ .focus-border i:before,
  .effect-8 ~ .focus-border i:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 0;
    background-color: #209e91;
    transition: 0.4s;
  }
  .effect-8 ~ .focus-border i:after {
    left: auto;
    right: 0;
    top: auto;
    bottom: 0;
  }
  .effect-8:focus ~ .focus-border:before,
  .effect-8:focus ~ .focus-border:after {
    width: 100%;
    transition: 0.3s;
  }
  .effect-8:focus ~ .focus-border i:before,
  .effect-8:focus ~ .focus-border i:after {
    height: 100%;
    transition: 0.4s;
  }

  .effect-9 ~ .focus-border:before,
  .effect-9 ~ .focus-border:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 2px;
    background-color: #209e91;
    transition: 0.2s;
    transition-delay: 0.2s;
  }
  .effect-9 ~ .focus-border:after {
    top: auto;
    bottom: 0;
    right: auto;
    left: 0;
    transition-delay: 0.6s;
  }
  .effect-9 ~ .focus-border i:before,
  .effect-9 ~ .focus-border i:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 0;
    background-color: #209e91;
    transition: 0.2s;
  }
  .effect-9 ~ .focus-border i:after {
    left: auto;
    right: 0;
    top: auto;
    bottom: 0;
    transition-delay: 0.4s;
  }
  .effect-9:focus ~ .focus-border:before,
  .effect-9:focus ~ .focus-border:after {
    width: 100%;
    transition: 0.2s;
    transition-delay: 0.6s;
  }
  .effect-9:focus ~ .focus-border:after {
    transition-delay: 0.2s;
  }
  .effect-9:focus ~ .focus-border i:before,
  .effect-9:focus ~ .focus-border i:after {
    height: 100%;
    transition: 0.2s;
  }
  .effect-9:focus ~ .focus-border i:after {
    transition-delay: 0.4s;
  }
`;

function InputBorderEffcets() {
  return (
    <DIV>
      <div className="col-md-3">
        <input
          className="effect-1"
          type="text"
          placeholder="Placeholder Text"
        />
        <span className="focus-border"></span>
      </div>
      <div className="col-md-3">
        <input
          className="effect-2"
          type="text"
          placeholder="Placeholder Text"
        />
        <span className="focus-border"></span>
      </div>
      <div className="col-md-3">
        <input
          className="effect-3"
          type="text"
          placeholder="Placeholder Text"
        />
        <span className="focus-border"></span>
      </div>
      <div className="col-md-3">
        <input
          className="effect-4"
          type="text"
          placeholder="Placeholder Text"
        />
        <span className="focus-border"></span>
      </div>
      <div className="col-md-3">
        <input
          className="effect-5"
          type="text"
          placeholder="Placeholder Text"
        />
        <span className="focus-border"></span>
      </div>
      <div className="col-md-3">
        <input
          className="effect-6"
          type="text"
          placeholder="Placeholder Text"
        />
        <span className="focus-border"></span>
      </div>
      <div className="col-md-3">
        <input
          className="effect-7"
          type="text"
          placeholder="Placeholder Text"
        />
        <span className="focus-border">
          <i></i>
        </span>
      </div>
      <div className="col-md-3">
        <input
          className="effect-8"
          type="text"
          placeholder="Placeholder Text"
        />
        <span className="focus-border">
          <i></i>
        </span>
      </div>
      <div className="col-md-3">
        <input
          className="effect-9"
          type="text"
          placeholder="Placeholder Text"
        />
        <span className="focus-border">
          <i></i>
        </span>
      </div>
    </DIV>
  );
}

export default InputBorderEffcets;
