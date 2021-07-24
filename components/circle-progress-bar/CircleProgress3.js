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
const CircleProgress3 = ({ percentage }) => {
  return (
    <DIV>
      <ProgressBar
        radius={70}
        progress={percentage}
        cut={120}
        steps={100}
        rotate={-210}
        strokeWidth={28}
        strokeColor="rgba( 80, 227, 194, 0.50 )"
        strokeLinecap="butt"
        initialAnimation={true}
        transition="1.5s ease 0.5s"
        trackTransition="0.5s ease"
        trackStrokeWidth={14}
        trackStrokeColor="rgba( 80, 227, 194, 0.2 )"
        trackStrokeLinecap="butt"
      >
        <div className="indicator">
          <div>{percentage}%</div>
        </div>
      </ProgressBar>
    </DIV>
  );
};

export default CircleProgress3;
