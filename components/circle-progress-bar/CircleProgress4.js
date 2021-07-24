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
const CircleProgress4 = ({ percentage }) => {
  return (
    <DIV>
      <ProgressBar
        radius={70}
        progress={percentage}
        strokeWidth={4}
        trackStrokeWidth={4}
        strokeColor="rgba( 47, 255, 0, 0.50 )"
        trackStrokeColor="rgba( 47, 255, 0, 0.2 )"
        pointerRadius={8}
        pointerStrokeWidth={5}
        initialAnimation={true}
        transition="1.5s ease 0.5s"
        trackTransition="0.5s ease"
        pointerStrokeColor="rgba( 47, 255, 0, 0.4 )"
      >
        <div className="indicator">
          <div>{percentage}%</div>
        </div>
      </ProgressBar>
    </DIV>
  );
};

export default CircleProgress4;
