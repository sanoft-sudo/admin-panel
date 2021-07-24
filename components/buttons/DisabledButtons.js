import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
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
    justify-content: center;
    text-align: center;
  }
  .default-button,
  .primary-button,
  .success-button,
  .info-button,
  .warning-button,
  .danger-button {
    position: relative;
    display: inline-block;
    width: 120px;
    height: 35px;
    border: 0;
    font-size: 15px;
    border-radius: 4px;
    font-family: "Raleway", sans-serif;
    transition: 1s;
    overflow: hidden;
    margin: 7px 0;
  }
  .default-button {
    background: rgba(148, 154, 153, 0.6);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    color: #fff;
  }

  .success-button {
    background: rgba(0, 175, 49, 0.6);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    color: #fff;
  }
  .primary-button {
    background: rgba(0, 116, 255, 0.6);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    color: #fff;
  }
  .info-button {
    background: rgba(44, 180, 255, 0.6);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    color: #fff;
  }
  .warning-button {
    background: rgba(255, 176, 0, 0.6);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    color: #fff;
  }
  .danger-button {
    background: rgba(252, 1, 1, 0.6);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    color: #fff;
  }
  .default-button :focus,
  .primary-button :focus,
  .success-button :focus,
  .info-button :focus,
  .warning-button :focus,
  .danger-button :focus {
    outline: 0;
  }
  .default-button :before,
  .primary-button :before,
  .success-button :before,
  .info-button :before,
  .warning-button :before,
  .danger-button :before {
    content: "";
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    width: 40px;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0.5;
    filter: blur(25px);
    transform: translateX(-100px) skewX(-15deg);
  }
  .default-button :after,
  .primary-button :after,
  .success-button :after,
  .info-button :after,
  .warning-button :after,
  .danger-button :after {
    content: "";
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 0.4);
    width: 30px;
    height: 100%;
    left: 30px;
    top: 0;
    opacity: 0;
    filter: blur(5px);
    transform: translateX(-100px) skewX(-15deg);
  }
  /* .default-button :hover {
    background: rgba(148, 154, 153, 1);
    cursor: pointer;
  }

  .success-button :hover {
    background: rgba(0, 175, 49, 1);
    cursor: pointer;
  }
  .primary-button :hover {
    background: rgba(0, 116, 255, 1);
    cursor: pointer;
  }
  .info-button :hover {
    background: rgba(44, 180, 255, 1);
    cursor: pointer;
  }
  .warning-button :hover {
    background: rgba(255, 176, 0, 1);
    cursor: pointer;
  }
  .danger-button :hover {
    background: rgba(252, 1, 1, 1);
    cursor: pointer;
  } */
  /* .default-button :hover:before,
  .primary-button :hover:before,
  .success-button :hover:before,
  .info-button :hover:before,
  .warning-button :hover:before,
  .danger-button :hover:before {
    transform: translateX(300px) skewX(-15deg);
    opacity: 0.6;
    transition: 1s;
  } */
  /* .default-button :hover:after,
  .primary-button :hover:after,
  .success-button :hover:after,
  .info-button :hover:after,
  .warning-button :hover:after,
  .danger-button :hover:after {
    transform: translateX(300px) skewX(-15deg);
    opacity: 1;
    transition: 1s;
  } */
`;

const buttons = [
  { id: "001", className: "default-button", title: "Default" },
  { id: "002", className: "primary-button", title: "Primary" },
  { id: "003", className: "success-button", title: "Success" },
  { id: "004", className: "info-button", title: "Info" },
  { id: "005", className: "warning-button", title: "Warning" },
  { id: "006", className: "danger-button", title: "Danger" },
];

const DisabledButtons = () => {
  return (
    <Styles>
      <div className="chartBox">
        <div className="container-head">
          <h1>Disabled buttons</h1>
        </div>
        <div className="button-box">
          {buttons.map((button, index) => (
            <div>
              <button disabled key={index} className={button.className}>
                {button.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Styles>
  );
};
export default DisabledButtons;
