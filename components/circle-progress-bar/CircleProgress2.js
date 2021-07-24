import React, { useEffect } from "react";
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
// const StyledProgressBar = styled(ProgressBar)`
//   .RCP {
//     width: 200px;
//   }
//   .RCP__track {
//     width: 200px;
//   }
//   .RCP__progress {
//     width: 200px;
//   }
// `;
const CircleProgress2 = ({ percentage }) => {

  

  return (
    <DIV>
      <ProgressBar
        radius={70}
        progress={percentage}
        strokeWidth={18}
        strokeColor="rgba( 208, 2, 27, 0.50 )"
        strokeLinecap="square"
        trackStrokeWidth={18}
        initialAnimation={true}
        transition="1.5s ease 0.5s"
        trackTransition="0.5s ease"
        trackStrokeColor="rgba( 208, 2, 27, 0.2 )"
      >
        <div className="indicator">
          <div>{percentage}%</div>
        </div>
      </ProgressBar>
    </DIV>
  );
};

export default CircleProgress2;
