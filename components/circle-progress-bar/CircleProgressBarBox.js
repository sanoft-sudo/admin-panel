import React, { useState } from "react";
import styled from "styled-components";
import CircleProgress1 from "./CircleProgress1";
import CircleProgress2 from "./CircleProgress2";
import CircleProgress3 from "./CircleProgress3";
import CircleProgress4 from "./CircleProgress4";
import DashedCircleProgress from './dashed/DashedCircleProgress'
const DIV = styled.div`
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
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const CircleProgressBarBox = () => {
  const [percentage, setPercentage] = useState(60);
  const handleChange = (e) => {
    console.log(e.target.value);
    let prec = e.target.value;
    setPercentage(prec);
  };
  return (
    <DIV>
      <div className="main-box">
        <div className="container-head">
          <h1 className="download">Circle progress bars</h1>
        </div>
        <div className="progress-input">
          <input onChange={handleChange} type="number" placeholder="" />
        </div>
        <div className="bars-content">
          <CircleProgress1 percentage={percentage} />
          <CircleProgress2 percentage={percentage} />
          <CircleProgress3 percentage={percentage} />
          <CircleProgress4 percentage={percentage} />
       <DashedCircleProgress percentage={percentage} />
        </div>
      </div>
    </DIV>
  );
};

export default CircleProgressBarBox;
