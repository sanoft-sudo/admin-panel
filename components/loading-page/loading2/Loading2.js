import React from "react";
import styled, { css } from "styled-components";

function template(i, deg) {
  return `
&:nth-child(${i}) {
  transform: rotate(${deg}deg);
}
`;
}

function anim() {
  let degrees = "";
  let deg;
  for (let i = 1; i <= 71; i++) {
    deg = 5 * i;
    degrees += template(i, deg);
  }
  return degrees;
}

const DIV = styled.div`
  height: 392px;
  position: relative;
  /* background-color: #ffdee9;
  background-image: linear-gradient(0deg, #ffdee9 0%, #b5fffc 100%); */

  width: 100%;
  scroll-behavior: smooth;
  margin-top: 20px;

  .wrapper {
    position: absolute;
    top: 50%;
    left: 45%;
    transform: translate(-50%, -50%);
  }

  .wrapper div {
    ${anim()}
  }

  .wrapper div {
    position: absolute;
    height: 50px;
    width: 50px;
    transform-origin: 100% 50%;
  }
  .wrapper div .bar {
    position: absolute;
    height: 1px;
    width: 100px;
    background-color: #fff;
    left: 0;
    border-radius: 20px;
    transform-origin: right;
    animation: spin 6s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 413px) {
    .wrapper {
      position: absolute;
      top: 50%;
      left: 40%;
      transform: translate(-50%, -50%);
    }
  }

  @media (max-width: 475px) {
    .wrapper div {
      height: 35px;
      width: 35px;
      transform-origin: 80% 40%;
    }
    .wrapper div .bar {
      width: 50px;
    }
  }
`;

const Loading2 = () => {
  return (
    <DIV id="refresh2">
      <div className="wrapper">
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
        <div>
          <div className="bar"></div>
        </div>
      </div>
    </DIV>
  );
};

export default Loading2;
