import React, { useState } from "react";
import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import styled from "styled-components";
import {
  ErrorOutline,
  HighlightOff,
  CheckCircleOutline,
} from "@styled-icons/material";
import { Info } from "@styled-icons/material-outlined";

const StyledErrorOutline = styled(ErrorOutline)`
  width: 30px;
  height: 30px;
  color: #fc7a00;
`;
const StyledHighlightOff = styled(HighlightOff)`
  width: 30px;
  height: 30px;
  color: #fc0000;
`;
const StyledCheckCircleOutline = styled(CheckCircleOutline)`
  width: 30px;
  height: 30px;
  color: #00fc37;
`;
const StyledInfo = styled(Info)`
  width: 30px;
  height: 30px;
  color: #0093fc;
`;

const fade = cssTransition({
  enter: "animate__animated animate__fadeIn",
  exit: "animate__animated animate__fadeOut",
});

const DIV = styled.div`
  display: inline-block;
  /* width: 100%; */
  position: relative;
  margin: 15px 5px;

  .main-box {
    display: flex;
    flex-direction: column;
    position: relative;
    min-width: 270px;
    max-width: 350px;
    padding: 10px;
    background: rgba(221, 232, 246, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  .form-check {
    display: flex;
    align-items: center;
  }
  .form-check .form-check-input {
    margin: 0 5px;
    width: 1.2rem;
    height: 1.2rem;
  }
  .form-check-label {
    color: #fff;
    font-size: 18px;
    letter-spacing: 1px;
  }

  .Toastify__toast--info {
    background: rgba(0, 187, 252, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(9.5px);
    -webkit-backdrop-filter: blur(9.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
  .Toastify__toast--success {
    background: rgba(0, 252, 9, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(9.5px);
    -webkit-backdrop-filter: blur(9.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
  .Toastify__toast--warning {
    background: rgba(252, 174, 0, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(9.5px);
    -webkit-backdrop-filter: blur(9.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
  .Toastify__toast--error {
    background: rgba(252, 0, 0, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(9.5px);
    -webkit-backdrop-filter: blur(9.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  .Toastify__progress-bar--info {
    background: #42f2f5;
  }
  .Toastify__progress-bar--success {
    background: #00fc3f;
  }
  .Toastify__progress-bar--error {
    background: #fc2200;
  }
  .Toastify__progress-bar--warning {
    background: #fcbd00;
  }

  .container-head {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    width: 100%;
    margin-bottom: 5px;
  }
  .container-head h1 {
    color: #fff;
  }
  .button-box {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }
  .button-box .success {
    cursor: pointer;
    color: #fff;
    width: 100px;
    height: 40px;
    padding: 5px;
    background: rgba(0, 252, 9, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(9.5px);
    -webkit-backdrop-filter: blur(9.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    margin: 5px;
  }
  .button-box .success:hover {
    color: #42f545;
    background: rgba(0, 252, 9, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(9.5px);
    -webkit-backdrop-filter: blur(9.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
  .button-box .info {
    cursor: pointer;
    color: #fff;
    width: 100px;
    height: 40px;
    padding: 5px;
    background: rgba(80, 227, 194, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(9.5px);
    -webkit-backdrop-filter: blur(9.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    margin: 5px;
  }
  .button-box .info:hover {
    color: #4296f5;
    background: rgba(80, 227, 194, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(9.5px);
    -webkit-backdrop-filter: blur(9.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
  .button-box .warning {
    cursor: pointer;
    color: #fff;
    width: 100px;
    height: 40px;
    padding: 5px;
    background: rgba(245, 166, 35, 0.4);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    margin: 5px;
  }
  .button-box .warning:hover {
    color: #f59c42;
    background: rgba(245, 166, 35, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
  .button-box .danger {
    cursor: pointer;
    color: #fff;
    width: 100px;
    height: 40px;
    padding: 5px;
    background: rgba(208, 2, 27, 0.4);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    margin: 5px;
  }
  .container-box {
    margin: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .button-box .danger:hover {
    color: #f54242;
    background: rgba(208, 2, 27, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  .checked-box {
    display: flex;
    /* justify-content: flex-left; */
    /* position: relative; */
    margin: 5px;
    align-items: center;
  }
  .checked-box label {
    /* position:absolute; */
    margin-right: 5px;
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 0;
    color: #fff;
    letter-spacing: 0.8px;
  }
  .checked-box .button {
    margin: 0;
  }
  .button-cover,
  .knobs,
  .layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .button {
    /* position: relative; */
    top: 0;
    width: 74px;
    height: 36px;
    margin: 0;
    overflow: hidden;
  }

  .button.r,
  .button.r .layer {
    border-radius: 100px;
  }

  .button.b2 {
    border-radius: 2px;
  }
  .sub-container {
    display: flex;
    flex-wrap: wrap;
  }
  h1 {
    color: #fff;
    text-align: center;
  }

  .checkbox {
    /* position: relative; */
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    background: rgba(222, 249, 243, 0.35);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    cursor: pointer;
    z-index: 3;
  }

  .knobs {
    z-index: 2;
  }

  .layer {
    width: 100%;
    background: rgba(222, 249, 243, 0.35);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    transition: 0.3s ease all;
    z-index: 1;
  }
  #button-10 .knobs:before,
  #button-10 .knobs:after,
  #button-10 .knobs span {
    position: absolute;
    top: 4px;
    width: 20px;
    height: 10px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    border-radius: 2px;
    transition: 0.3s ease all;
  }

  #button-10 .knobs:before {
    content: "";
    left: 4px;
    background: rgba(208, 2, 27, 0.45);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 2px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  #button-10 .knobs:after {
    content: "YES";
    right: 4px;
    color: #000;
  }

  #button-10 .knobs span {
    display: inline-block;
    left: 4px;
    color: #fff;
    z-index: 1;
  }

  #button-10 .checkbox:checked + .knobs span {
    color: #000;
  }

  #button-10 .checkbox:checked + .knobs:before {
    left: 42px;
    background: rgba(0, 116, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 2px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  #button-10 .checkbox:checked + .knobs:after {
    color: #fff;
  }

  #button-10 .checkbox:checked ~ .layer {
    background: rgba(242, 242, 242, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(0.1px);
    -webkit-backdrop-filter: blur(0.1px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
`;

const STYLEDDIV = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-bottom: 0;
    margin-left: 5px;
  }
`;

const Notification = () => {
  const [toastPosition, setToastPosition] = useState();

  const errorNotify = () => {
    toast.error(
      <STYLEDDIV>
        <StyledHighlightOff />
        <p>Something went wrong!</p>
      </STYLEDDIV>,
      {
        transition: fade,
        progressClassName: "Toastify__progress-bar--error",
        position: toastPosition,
      }
    );
  };

  const infoNotify = () => {
    toast.info(
      <STYLEDDIV>
        <StyledInfo />
        <p>This is for Information only!</p>
      </STYLEDDIV>,
      {
        transition: fade,
        progressClassName: "Toastify__progress-bar--info",
        position: toastPosition,
      }
    );
  };

  const warnNotify = () => {
    toast.warning(
      <STYLEDDIV>
        <StyledErrorOutline />
        <p>Warning, please do not this again!</p>
      </STYLEDDIV>,
      {
        transition: fade,
        progressClassName: "Toastify__progress-bar--warning",
        position: toastPosition,
      }
    );
  };

  const successNotify = () => {
    toast.success(
      <STYLEDDIV>
        <StyledCheckCircleOutline />
        <p>Action completed successfully!</p>
      </STYLEDDIV>,
      {
        transition: fade,
        progressClassName: "Toastify__progress-bar--success",
        position: toastPosition,
      }
    );
  };

  const handleChange = (e, id) => {
    let control = e.target.checked;
    let topLeft = toast.POSITION.TOP_LEFT;
    let topCenter = toast.POSITION.TOP_CENTER;
    let topRight = toast.POSITION.TOP_RIGHT;
    let bottomLeft = toast.POSITION.BOTTOM_LEFT;
    let bottomCenter = toast.POSITION.BOTTOM_CENTER;
    let bottomRight = toast.POSITION.BOTTOM_RIGHT;
    if (control === true) {
      console.log(">>>>+++", e.target.checked, id);
      if (id === 1) {
        setToastPosition(topLeft);
      }
      if (id === 2) {
        setToastPosition(topCenter);
      }
      if (id === 3) {
        setToastPosition(topRight);
      }
      if (id === 4) {
        setToastPosition(bottomLeft);
      }
      if (id === 5) {
        setToastPosition(bottomCenter);
      }
      if (id === 6) {
        setToastPosition(bottomRight);
      }
    }
  };
  return (
    <DIV>
      <div className="main-box">
        <div className="container-box">
          <div className="container-head">
            <h1>notifications</h1>
          </div>
          <div className="button-box">
            <button
              className="danger"
              onClick={(e) => errorNotify(e, toastPosition)}
              id="animate.css"
            >
              Error
            </button>
            <button
              className="info"
              onClick={(e) => infoNotify(e, toastPosition)}
              id="animista"
            >
              Info
            </button>
            <button
              className="warning"
              onClick={(e) => warnNotify(e, toastPosition)}
              id="animista"
            >
              Warning
            </button>
            <button
              className="success"
              onClick={(e) => successNotify(e, toastPosition)}
              id="animista"
            >
              Success
            </button>
          </div>
        </div>
        <div className="container-box2">
          <h1>Top</h1>
          <div className="sub-container">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                // checked
                onChange={(e) => handleChange(e, 1)}
              />
              <label
                className="form-check-label"
                htmlhtmlFor="flexRadioDefault1"
              >
                Left
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onChange={(e) => handleChange(e, 2)}
              />
              <label
                className="form-check-label"
                htmlhtmlFor="flexRadioDefault2"
              >
                Center
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
                onChange={(e) => handleChange(e, 3)}
              />
              <label
                className="form-check-label"
                htmlhtmlFor="flexRadioDefault3"
              >
                Right
              </label>
            </div>

            {/* <div className="checked-box ">
              <label htmlhtmlFor="#topLeft">Left</label>
              <div className="button b2" id="button-10">
                <input
                  id="topLeft"
                  type="checkbox"
                  className="checkbox"
                  name="topLeft"
                  onChange={handleCheck}
                />
                <div className="knobs">
                  <span>NO</span>
                </div>
                <div className="layer"></div>
              </div>
            </div>
            <div className="checked-box ">
              <label htmlhtmlFor="#topCenter">Center</label>
              <div className="button b2" id="button-10">
                <input
                  id="topCenter"
                  type="checkbox"
                  className="checkbox"
                  name="topCenter"
                  onChange={handleCheck}
                />
                <div className="knobs">
                  <span>NO</span>
                </div>
                <div className="layer"></div>
              </div>
            </div>
            <div className="checked-box ">
              <label htmlhtmlFor="#topRight">right</label>
              <div className="button b2" id="button-10">
                <input
                  id="topRight"
                  type="checkbox"
                  className="checkbox"
                  name="topRight"
                  onChange={handleCheck}
                />
                <div className="knobs">
                  <span>NO</span>
                </div>
                <div className="layer"></div>
              </div>
            </div>
           */}
          </div>
          <h1>Bottom</h1>
          <div className="sub-container">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault4"
                onChange={(e) => handleChange(e, 4)}
              />
              <label
                className="form-check-label"
                htmlhtmlFor="flexRadioDefault4"
              >
                Left
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault5"
                onChange={(e) => handleChange(e, 5)}
              />
              <label
                className="form-check-label"
                htmlhtmlFor="flexRadioDefault5"
              >
                Center
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault6"
                onChange={(e) => handleChange(e, 6)}
              />
              <label
                className="form-check-label"
                htmlhtmlFor="flexRadioDefault6"
              >
                Right
              </label>
            </div>
            {/* <div className="checked-box ">
              <label htmlhtmlFor="#bottomLeft">Left</label>
              <div className="button b2" id="button-10">
                <input
                  id="bottomLeft"
                  type="checkbox"
                  className="checkbox"
                  name="bottomLeft"
                  onChange={handleCheck}
                />
                <div className="knobs">
                  <span>NO</span>
                </div>
                <div className="layer"></div>
              </div>
            </div>
            <div className="checked-box ">
              <label htmlhtmlFor="#bottomCenter">center</label>
              <div className="button b2" id="button-10">
                <input
                  id="bottomCenter"
                  type="checkbox"
                  className="checkbox"
                  name="bottomCenter"
                  onChange={handleCheck}
                />
                <div className="knobs">
                  <span>NO</span>
                </div>
                <div className="layer"></div>
              </div>
            </div>
            <div className="checked-box ">
              <label htmlhtmlFor="#bottomRight">right</label>

              <div className="button b2" id="button-10">
                <input
                  id="bottomRight"
                  type="checkbox"
                  className="checkbox"
                  name="bottomRight"
                  onChange={handleCheck}
                />
                <div className="knobs">
                  <span>NO</span>
                </div>
                <div className="layer"></div>
              </div>
            </div>
           */}
          </div>
        </div>
      </div>
      <ToastContainer transition={fade} />
    </DIV>
  );
};
export default Notification;
