import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  position: absolute;
  bottom: 0;
  right: -20px;
  min-width: 220px;
  max-width: 400px;
  height: 60px;
  align-items: center;
  background: rgba(235, 255, 233, 0.5);
  box-shadow: ${({ status }) =>
    status === "success"
      ? "-5px 3px 40px 10px rgba(135, 255, 0, 0.5)"
      : status === "info"
      ? "-5px 3px 40px 10px rgba( 15, 224, 217, 0.5)"
      : status === "warning"
      ? "-5px 3px 40px 10px rgba( 255, 174, 0, 0.5)"
      : status === "error"
      ? "-5px 3px 40px 10px rgba( 208, 2, 27, 0.5)"
      : ""};

  backdrop-filter: blur(-1px);
  -webkit-backdrop-filter: blur(-1px);
  border-radius: 10px;
  display: flex;
  opacity: ${({ show }) => (show ? 1 : 0)};

  transition: opacity 1s ease-in-out;

  .alert-progress-box {
    height: 60px;
    width: 35px;
    background: ${({ status }) =>
      status === "success"
        ? "rgba(45, 255, 0, 0.5)"
        : status === "info"
        ? "rgba(0, 247, 255, 0.5 )"
        : status === "warning"
        ? "rgba(255, 130, 0, 0.5)"
        : status === "error"
        ? "rgba( 255, 0, 0, 0.5)"
        : ""};
    margin-right: 15px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    overflow: hidden;
  }
  .alert-progress-bar-run {
    animation: ${({ show }) => (show ? "load 5s normal forwards" : "")};
    animation-delay: 1s;
    width: 35px;
    height: 0;
    background: ${({ status }) =>
      status === "success"
        ? "rgba(45, 255, 0, 0.9)"
        : status === "info"
        ? "rgba(0, 247, 255, 0.9 )"
        : status === "warning"
        ? "rgba(255, 130, 0, 0.7)"
        : status === "error"
        ? "rgba( 255, 0, 0, 0.7)"
        : ""};
    margin-right: 15px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  @keyframes load {
    0% {
      height: 0;
    }
    100% {
      height: 100%;
    }
  }

  .alert-content-box {
    align-items: center;
    display: flex;
    margin: 15px 10px 15px 0;
    width: 90%;
  }
  .alert-left {
    margin-right: 5px;
    display: flex;
  }

  .alert-main-icon {
    height: 100%;
  }
  .alert-main-icon i {
    line-height: 100%;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);
    margin: 52% 50%;
    transform: translate(-50%, 0%);
  }
  .alert-content-text {
    width: 94%;
    color: ${({ status }) =>
      status === "success"
        ? "rgba(45, 255, 0, 1)"
        : status === "info"
        ? "rgba(0, 247, 255, 1 )"
        : status === "warning"
        ? "rgba(255, 215, 0, 1)"
        : status === "error"
        ? "rgba( 255, 0, 0, 1)"
        : ""};
  }
  .alert-close-icon {
    color: ${({ status }) =>
      status === "success"
        ? "rgba(45, 255, 0, 1)"
        : status === "info"
        ? "rgba(0, 247, 255, 1 )"
        : status === "warning"
        ? "rgba(255, 215, 0, 1)"
        : status === "error"
        ? "rgba( 255, 0, 0, 1)"
        : ""};
    cursor: pointer;
  }
`;

const CustomAlert = ({ show, status, content }) => {
  return (
    <DIV show={show} status={status}>
      <div className="alert-progress-box">
        <div className="alert-progress-bar-run">
          <div className="alert-main-icon">
            <i className="far fa-check-circle"></i>
          </div>
        </div>
      </div>
      <div className="alert-content-box">
        <div className="alert-content-text">{content}</div>
        <div className="alert-close-icon">
          <i className="fas fa-times"></i>
        </div>
      </div>
    </DIV>
  );
};

export default CustomAlert;
