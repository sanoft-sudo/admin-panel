import React, { useState } from "react";
import styled from "styled-components";
import CustomAlert from "./CustomAlert";

const DIV = styled.div`
  display: inline-block;
  /* width: 100%; */
  margin: 15px 5px;
  .main-box {
    display: flex;
    flex-direction: column;
    min-width: 270px;
    max-width: 350px;
    padding: 10px;
    background: rgba(221, 232, 246, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    /* position: absolute; */
  }
  .container-head {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    width: 100%;
    margin-bottom: 5px;
  }
  .container-head .download {
    color: #fff;
    text-align: center;
    margin-top: 10px;
  }
  .alert-container {
    position: absolute;
    bottom: -50%;
    right: 50%;
  }
`;

const CustomAlertBox = () => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("");
  const [content, setContent] = useState("");
  const handleShow = (e, str, text) => {
    setShow(true);
    setStatus(str);
    setContent(text);
    setTimeout(() => {
      setShow(false);
      setStatus("");
      setContent("");
    }, 8000);
  };

  return (
    <DIV>
      <div className="main-box">
        <div className="container-head">
          <h1 className="download">alerts</h1>
        </div>
        <div className="alert-container">
          <CustomAlert show={show} status={status} content={content} />
        </div>

        <button
          className="btn btn-success my-1"
          onClick={(e) => handleShow(e, "success", "Success alert clicked!")}
        >
          Success
        </button>
        <button
          className="btn btn-info my-1"
          onClick={(e) => handleShow(e, "info", "Info alert clicked!")}
        >
          Info
        </button>
        <button
          className="btn btn-warning my-1"
          onClick={(e) => handleShow(e, "warning", "Warning alert clicked!")}
        >
          Warning
        </button>
        <button
          className="btn btn-danger my-1"
          onClick={(e) => handleShow(e, "error", "Error alert clicked!")}
        >
          Error
        </button>
      </div>
    </DIV>
  );
};

export default CustomAlertBox;
