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
    /* margin: 0 auto; */
    user-select: none;
    font-size: 15px;
    color: #fff;
  }
`;
const CircleProgress1 = ({ percentage, radius, lineWidth }) => {
  return (
    <DIV>
      <ProgressBar
        radius={radius}
        progress={percentage}
        strokeWidth={lineWidth}
        strokeColor="rgba( 255, 255, 255, 0.25 )"
        strokeLinecap="round"
        trackStrokeWidth={lineWidth}
        initialAnimation={true}
        transition="1.5s ease 0.5s"
        trackTransition="0.5s ease"
        trackStrokeColor="transparent"
      >
        <div className="indicator">
          <div>{percentage}%</div>
        </div>
      </ProgressBar>
    </DIV>
  );
};

export default CircleProgress1;
