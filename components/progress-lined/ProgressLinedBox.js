import React, { useState } from "react";
import styled from "styled-components";
import ProgressLine1 from "./ProgressLine1";
import ProgressLine2 from "./ProgressLine2";
import ProgressLine3 from "./ProgressLine3";
import ProgressLine4 from "./ProgressLine4";

const DIV = styled.div`
  margin-top: 15px;
  .main-box {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 10px;
    background: rgba(221, 232, 246, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
  .progress-input {
    text-align: center;
  }
  .progress-input input:focus {
    outline: none;
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
  .bars-content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const ProgressLinedBox = () => {
  const [percentage, setPercentage] = useState(60);
  const handleChange = (e) => {
    console.log(e.target.value);
    let prec = e.target.value;
    setPercentage(prec);
  };
  const percentages = [100, 75, 50, 25];
  return (
    <DIV>
      <div className="main-box">
        <div className="container-head">
          <h1 className="download">Lined progress bars</h1>
        </div>
        <div className="bars-content">
          <ProgressLine1 percentage={percentages[0]} />
          <ProgressLine2 percentage={percentages[1]} />
          <ProgressLine3 percentage={percentages[2]} />
          <ProgressLine4 percentage={percentages[3]} />
        </div>
      </div>
    </DIV>
  );
};

export default ProgressLinedBox;
