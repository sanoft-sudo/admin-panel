import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
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

  .btn {
    display: inline-block;
    line-height: 35px;
    margin: 7px 0;
    padding: 0 15px;
    font-size: 15px;
    position: relative;
    opacity: 0.999;
    border-radius: 3px;
    width: 120px;
    height: 35px;
  }

  .btn-border-o {
    background-color: transparent;
    border: 1px solid #d0d0d0;
    color: #fff;
  }
  .btn-border-o:before,
  .btn-border-o:after {
    content: "";
    border-style: solid;
    position: absolute;
    z-index: 5;
    border-radius: 3px;
    box-sizing: content-box;
  }
  .btn-border-o:before {
    width: 0;
    height: 100%;
    border-width: 1px 0 1px 0;
    top: -1px;
    left: 0;
    transition-delay: 0.05s;
  }
  .btn-border-o:after {
    width: 100%;
    height: 0;
    border-width: 0 1px 0 1px;
    top: 0;
    left: -1px;
  }
  .btn-border-o:hover:before {
    width: 100%;
  }
  .btn-border-o:hover:after {
    height: 100%;
  }
  .btn-border-o.button-default:before,
  .btn-border-o.button-default:after {
    border-color: rgba(148, 154, 153, 1);
  }
  .btn-border-o.button-default:hover {
    color: rgba(148, 154, 153, 1);
  }
  .btn-border-o.button-primary:before,
  .btn-border-o.button-primary:after {
    border-color: rgba(0, 116, 255, 1);
  }
  .btn-border-o.button-primary:hover {
    color: rgba(0, 116, 255, 1);
  }
  .btn-border-o.button-success:before,
  .btn-border-o.button-success:after {
    border-color: rgba(0, 175, 49, 1);
  }
  .btn-border-o.button-success:hover {
    color: rgba(0, 175, 49, 1);
  }
  .btn-border-o.button-info:before,
  .btn-border-o.button-info:after {
    border-color: rgba(0, 254, 195, 1);
  }
  .btn-border-o.button-info:hover {
    color: rgba(0, 254, 195, 1);
  }
  .btn-border-o.button-warning:before,
  .btn-border-o.button-warning:after {
    border-color: rgba(255, 176, 0, 1);
  }
  .btn-border-o.button-warning:hover {
    color: rgba(255, 176, 0, 1);
  }
  .btn-border-o.button-danger:before,
  .btn-border-o.button-danger:after {
    border-color: rgba(252, 1, 1, 1);
  }
  .btn-border-o.button-danger:hover {
    color: rgba(252, 1, 1, 1);
  }

  .button-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

const buttons = [
  { id: "001", className: "btn button-default btn-border-o", title: "Default" },
  { id: "002", className: "btn button-primary btn-border-o", title: "Primary" },
  { id: "003", className: "btn button-success btn-border-o", title: "Success" },
  { id: "004", className: "btn button-info btn-border-o", title: "Info" },
  { id: "005", className: "btn button-warning btn-border-o", title: "Warning" },
  { id: "006", className: "btn button-danger btn-border-o", title: "Danger" },
];

const OutlinedButtons = () => {
  return (
    <Styles>
      <div className="chartBox">
        <div className="container-head">
          <h1>Outlined buttons</h1>
        </div>
        <div className="button-box">
          {buttons.map((button, index) => (
            <div>
              <button key={index} className={button.className}>
                {button.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Styles>
  );
};
export default OutlinedButtons;
