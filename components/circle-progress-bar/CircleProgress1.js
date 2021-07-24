import React from "react";
import ProgressBar from "react-customizable-progressbar";
import styled from "styled-components";

const DIV = styled.div`
  .indicator {
    display: flex;
    justify-content: center;
    text-align: center;
    position: absolute;
    top: 45%;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    user-select: none;
    font-size: 25px;
    color: #fff;
  }
`;
const CircleProgress1 = ({ percentage }) => {
  return (
    <DIV>
      <ProgressBar
        radius={70}
        progress={percentage}
        strokeWidth={18}
        strokeColor="rgba( 144, 19, 254, 0.7 )"
        strokeLinecap="round"
        trackStrokeWidth={18}
        initialAnimation={true}
        transition="1.5s ease 0.5s"
        trackTransition="0.5s ease"
        trackStrokeColor="rgba( 144, 19, 254, 0.1 )"
      >
        <div className="indicator">
          <div>{percentage}%</div>
        </div>
      </ProgressBar>
    </DIV>
  );
};

export default CircleProgress1;
