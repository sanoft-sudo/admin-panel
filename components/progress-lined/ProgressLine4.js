import React, { useEffect } from "react";
import styled from "styled-components";

let processIn;

function animationAllChildren(i, fadeSp) {
  return `
&:nth-child(${i}) {
    margin: auto;
    background: #837dd9;
    border-radius: 4px;
    flex-basis: 11%;
    flex-grow: 1;
    flex-shrink: 1;
    height: 20px;
    animation: FadeIn 0.3s ease;
    transition: all 0.5s cubic-bezier(0.17, 0.67, 0.88, 0.17);
 animation-delay: ${fadeSp}s;
      animation-iteration-count: 1;
      animation-fill-mode: both;
}
`;
}
function anim() {
  let fullanim = "";
  let fadeSp;
  for (let i = 1; i <= 25; i++) {
    fadeSp = i * 0.05;
    fullanim += animationAllChildren(i, fadeSp);
  }
  return fullanim;
}

const DIV = styled.div`
  min-width: 200px;
  max-width: 100%;
  margin-top: 50px;

  .loading-bar {
    width: 301px;
    background: #cecece;
    padding: 2px;
    border: 1px solid #837dd9;
    border-radius: 6px;
    box-shadow: 0 0 20px 0 rgba(131, 125, 217, 0.5);
    margin: auto;
  }
  .loading-bar--progress {
    width: ${({ percentage }) => percentage + "%"};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
  }
  /* .loading-bar--progress span {
    margin: auto;
    background: #837dd9;
    border-radius: 4px;
    flex-basis: 11%;
    flex-grow: 1;
    flex-shrink: 1;
    height: 20px;
    animation: FadeIn 0.3s ease;
    transition: all 0.5s cubic-bezier(0.17, 0.67, 0.88, 0.17);
  } */

  .loading-bar--progress span {
    ${anim()}
  }

  .loading-bar--progress span:first-of-type {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .loading-bar--progress span:last-of-type {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  @keyframes FadeIn {
    0% {
      opacity: 0;
      transform: scale(0.1);
      background: #837dd9;
      border-radius: 4px;
    }
    85% {
      opacity: 1;
      background: #837dd9;
      background: linear-gradient(
        180deg,
        #837dd9 0%,
        #393783 56%,
        #090979 100%
      );
      border-radius: 0;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
    100% {
      transform: scale(1);
      background: #837dd9;
      background: linear-gradient(
        180deg,
        #837dd9 0%,
        #393783 56%,
        #090979 100%
      );
      border-radius: 0;
    }
  }
  .loading-bar--progress .first {
    border-top-left-radius: 4px !important;
    border-bottom-left-radius: 4px !important;
  }

  .loading-bar--progress .last {
    border-top-right-radius: 4px !important;
    border-bottom-right-radius: 4px !important;
  }
`;
console.log("process:", processIn);
const ProgressLine4 = ({ percentage }) => {
  useEffect(() => {
    console.log("percentage:", percentage);
    processIn = Number(percentage);
  }, [percentage]);
  return (
    <DIV percentage={percentage}>
      <div className="loading-bar">
        <div className="loading-bar--progress">
          <span className="first"></span>

          {Array.apply(null, { length: 25 }).map((e, i) => (
            <span key={i}></span>
          ))}
          <span className="last"></span>
        </div>
      </div>
    </DIV>
  );
};

export default ProgressLine4;
