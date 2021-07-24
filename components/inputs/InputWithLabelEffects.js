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

  .effect-16,
  .effect-17,
  .effect-18 {
    border: 0;
    padding: 4px 0;
    border-bottom: 1px solid #ccc;
    background-color: transparent;
  }

  .effect-16 ~ .focus-border {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #209e91;
    transition: 0.4s;
  }
  .effect-16:focus ~ .focus-border,
  .has-content.effect-16 ~ .focus-border {
    width: 100%;
    transition: 0.4s;
  }
  .effect-16 ~ label {
    position: absolute;
    left: 0;
    width: 100%;
    top: 9px;
    color: #aaa;
    transition: 0.3s;
    z-index: -1;
    letter-spacing: 0.5px;
  }
  .effect-16:focus ~ label,
  .has-content.effect-16 ~ label {
    top: -16px;
    font-size: 12px;
    color: #209e91;
    transition: 0.3s;
  }

  .effect-17 ~ .focus-border {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #209e91;
    transition: 0.4s;
  }
  .effect-17:focus ~ .focus-border,
  .has-content.effect-17 ~ .focus-border {
    width: 100%;
    transition: 0.4s;
    left: 0;
  }
  .effect-17 ~ label {
    position: absolute;
    left: 0;
    width: 100%;
    top: 9px;
    color: #aaa;
    transition: 0.3s;
    z-index: -1;
    letter-spacing: 0.5px;
  }
  .effect-17:focus ~ label,
  .has-content.effect-17 ~ label {
    top: -16px;
    font-size: 12px;
    color: #209e91;
    transition: 0.3s;
  }

  .effect-18 ~ .focus-border {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    z-index: 99;
  }
  .effect-18 ~ .focus-border:before,
  .effect-18 ~ .focus-border:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #209e91;
    transition: 0.4s;
  }
  .effect-18 ~ .focus-border:after {
    left: auto;
    right: 0;
  }
  .effect-18:focus ~ .focus-border:before,
  .effect-18:focus ~ .focus-border:after,
  .has-content.effect-18 ~ .focus-border:before,
  .has-content.effect-18 ~ .focus-border:after {
    width: 50%;
    transition: 0.4s;
  }
  .effect-18 ~ label {
    position: absolute;
    left: 0;
    width: 100%;
    top: 9px;
    color: #aaa;
    transition: 0.3s;
    z-index: -1;
    letter-spacing: 0.5px;
  }
  .effect-18:focus ~ label,
  .has-content.effect-18 ~ label {
    top: -16px;
    font-size: 12px;
    color: #209e91;
    transition: 0.3s;
  }

  .effect-19,
  .effect-20,
  .effect-21 {
    border: 1px solid #ccc;
    padding: 7px 14px;
    transition: 0.4s;
    background: transparent;
  }

  .effect-19 ~ .focus-border:before,
  .effect-19 ~ .focus-border:after {
    content: "";
    position: absolute;
    top: -1px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #209e91;
    transition: 0.4s;
  }
  .effect-19 ~ .focus-border:after {
    top: auto;
    bottom: 0;
  }
  .effect-19 ~ .focus-border i:before,
  .effect-19 ~ .focus-border i:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 2px;
    height: 0;
    background-color: #209e91;
    transition: 0.6s;
  }
  .effect-19 ~ .focus-border i:after {
    left: auto;
    right: 0;
  }
  .effect-19:focus ~ .focus-border:before,
  .effect-19:focus ~ .focus-border:after,
  .has-content.effect-19 ~ .focus-border:before,
  .has-content.effect-19 ~ .focus-border:after {
    left: 0;
    width: 100%;
    transition: 0.4s;
  }
  .effect-19:focus ~ .focus-border i:before,
  .effect-19:focus ~ .focus-border i:after,
  .has-content.effect-19 ~ .focus-border i:before,
  .has-content.effect-19 ~ .focus-border i:after {
    top: -1px;
    height: 100%;
    transition: 0.6s;
  }
  .effect-19 ~ label {
    position: absolute;
    left: 14px;
    width: 100%;
    top: 10px;
    color: #aaa;
    transition: 0.3s;
    z-index: -1;
    letter-spacing: 0.5px;
  }
  .effect-19:focus ~ label,
  .has-content.effect-19 ~ label {
    top: -18px;
    left: 0;
    font-size: 12px;
    color: #209e91;
    transition: 0.3s;
  }

  .effect-20 ~ .focus-border:before,
  .effect-20 ~ .focus-border:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #209e91;
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
    background-color: #209e91;
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
    color: #209e91;
    transition: 0.3s;
  }

  .effect-21 ~ .focus-border:before,
  .effect-21 ~ .focus-border:after {
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
  .effect-21 {
    /* border-radius: 5000px; */
  }
  .effect-21 ~ .focus-border:after {
    top: auto;
    bottom: 0;
    right: auto;
    left: 0;
    transition-delay: 0.6s;
    /* border-radius: 5000px; */
  }
  .effect-21 ~ .focus-border i:before,
  .effect-21 ~ .focus-border i:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 0;
    background-color: #209e91;
    /* border-radius: 5000px; */
    transition: 0.2s;
  }
  .effect-21 ~ .focus-border i:after {
    left: auto;
    right: 0;
    top: auto;
    bottom: 0;
    /* border-radius: 5000px; */
    transition-delay: 0.4s;
  }
  .effect-21:focus ~ .focus-border:before,
  .effect-21:focus ~ .focus-border:after,
  .has-content.effect-21 ~ .focus-border:before,
  .has-content.effect-21 ~ .focus-border:after {
    width: 100%;
    transition: 0.2s;
    transition-delay: 0.6s;
    /* border-radius: 5000px; */
  }
  .effect-21:focus ~ .focus-border:after,
  .has-content.effect-21 ~ .focus-border:after {
    transition-delay: 0.2s;
    /* border-radius: 5000px; */
  }
  .effect-21:focus ~ .focus-border i:before,
  .effect-21:focus ~ .focus-border i:after,
  .has-content.effect-21 ~ .focus-border i:before,
  .has-content.effect-21 ~ .focus-border i:after {
    height: 100%;
    transition: 0.2s;
    /* border-radius: 5000px; */
  }
  .effect-21:focus ~ .focus-border i:after,
  .has-conten.effect-21 ~ .focus-border i:after {
    transition-delay: 0.3s;
    /* border-radius: 5000px; */
  }
  .effect-21 ~ label {
    position: absolute;
    left: 14px;
    width: 100%;
    top: 10px;
    color: #aaa;
    transition: 0.3s;
    z-index: -1;
    letter-spacing: 0.5px;
  }
  .effect-21:focus ~ label,
  .has-content.effect-21 ~ label {
    top: -8px;
    left: 6px;
    padding: 0.5px 4px;
    font-size: 11px;
    width: 66px;
    color: #209e91;
    transition: 0.3s;
    background-color: #fff;
    z-index: 999;
  }

  .effect-22,
  .effect-23,
  .effect-24 {
    border: 0;
    padding: 7px 15px;
    border: 1px solid #ccc;
    position: relative;
    background: transparent;
  }

  .effect-22 ~ .focus-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background-color: transparent;
    transition: 0.4s;
    z-index: -1;
  }
  .effect-22:focus ~ .focus-bg,
  .has-content.effect-22 ~ .focus-bg {
    transition: 0.4s;
    width: 100%;
    background-color: #ededed;
  }
  .effect-22 ~ label {
    position: absolute;
    left: 14px;
    width: 100%;
    top: 10px;
    color: #aaa;
    transition: 0.3s;
    z-index: -1;
    letter-spacing: 0.5px;
  }
  .effect-22:focus ~ label,
  .has-content.effect-22 ~ label {
    top: -18px;
    left: 0;
    font-size: 12px;
    color: #209e91;
    transition: 0.3s;
  }

  .effect-23 ~ .focus-bg:before,
  .effect-23 ~ .focus-bg:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    background-color: #ededed;
    transition: 0.3s;
    z-index: -1;
  }
  .effect-23:focus ~ .focus-bg:before,
  .has-content.effect-23 ~ .focus-bg:before {
    transition: 0.3s;
    width: 50%;
    height: 100%;
  }
  .effect-23 ~ .focus-bg:after {
    left: auto;
    right: 0;
    top: auto;
    bottom: 0;
  }
  .effect-23:focus ~ .focus-bg:after,
  .has-content.effect-23 ~ .focus-bg:after {
    transition: 0.3s;
    width: 50%;
    height: 100%;
  }
  .effect-23 ~ label {
    position: absolute;
    left: 14px;
    width: 100%;
    top: 10px;
    color: #aaa;
    transition: 0.3s;
    z-index: -1;
    letter-spacing: 0.5px;
  }
  .effect-23:focus ~ label,
  .has-content.effect-23 ~ label {
    top: -18px;
    left: 0;
    font-size: 12px;
    color: #209e91;
    transition: 0.3s;
  }

  .effect-24 ~ .focus-bg:before,
  .effect-24 ~ .focus-bg:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0;
    height: 0;
    background-color: #ededed;
    transition: 0.3s;
    z-index: -1;
  }
  .effect-24:focus ~ .focus-bg:before,
  .has-content.effect-24 ~ .focus-bg:before {
    transition: 0.3s;
    width: 50%;
    left: 0;
    top: 0;
    height: 100%;
  }
  .effect-24 ~ .focus-bg:after {
    left: auto;
    right: 50%;
    top: auto;
    bottom: 50%;
  }
  .effect-24:focus ~ .focus-bg:after,
  .has-content.effect-24 ~ .focus-bg:after {
    transition: 0.3s;
    width: 50%;
    height: 100%;
    bottom: 0;
    right: 0;
  }
  .effect-24 ~ label {
    position: absolute;
    left: 14px;
    width: 100%;
    top: 10px;
    color: #aaa;
    transition: 0.3s;
    z-index: -1;
    letter-spacing: 0.5px;
  }
  .effect-24:focus ~ label,
  .has-content.effect-24 ~ label {
    top: -18px;
    left: 0;
    font-size: 12px;
    color: #209e91;
    transition: 0.3s;
  }
`;

function InputWithLabelEffects() {
  return (
    <DIV>
      <div className="col-md-3 input-effect">
        <input className="effect-16" type="text" placeholder="" />
        <label>First Name</label>
        <span className="focus-border"></span>
      </div>
      <div className="col-md-3 input-effect">
        <input className="effect-17" type="text" placeholder="" />
        <label>First Name</label>
        <span className="focus-border"></span>
      </div>
      <div className="col-md-3 input-effect">
        <input className="effect-18" type="text" placeholder="" />
        <label>First Name</label>
        <span className="focus-border"></span>
      </div>
      <div className="col-md-3 input-effect">
        <input className="effect-19" type="text" placeholder="" />
        <label>First Name</label>
        <span className="focus-border">
          <i></i>
        </span>
      </div>
      <div className="col-md-3 input-effect">
        <input className="effect-20" type="text" placeholder="" />
        <label>First Name</label>
        <span className="focus-border">
          <i></i>
        </span>
      </div>
      <div className="col-md-3 input-effect">
        <input className="effect-21" type="text" placeholder="" />
        <label>First Name</label>
        <span className="focus-border">
          <i></i>
        </span>
      </div>
      <div className="col-md-3 input-effect">
        <input className="effect-22" type="text" placeholder="" />
        <label>First Name</label>
        <span className="focus-bg"></span>
      </div>
      <div className="col-md-3 input-effect">
        <input className="effect-23" type="text" placeholder="" />
        <label>First Name</label>
        <span className="focus-bg"></span>
      </div>
      <div className="col-md-3 input-effect">
        <input className="effect-24" type="text" placeholder="" />
        <label>First Name</label>
        <span className="focus-bg"></span>
      </div>
    </DIV>
  );
}

export default InputWithLabelEffects;
