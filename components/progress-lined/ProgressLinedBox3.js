import React, { useState } from "react";
import styled from "styled-components";
import ProgressLine5 from "./ProgressLine5";
import ProgressLine6 from "./ProgressLine6";
import ProgressLine7 from "./ProgressLine7";
import ProgressLine8 from "./ProgressLine8";

const DIV = styled.div`
  margin-top: 15px;
  margin-left: 15px;
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

  .wrapper {
    min-width: 220px;
    max-width: 100%;
  }

  .progress-bar {
    height: 30px;
    width: 100%;
    background-color: rgba(210, 167, 249, 0.25);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 2px 0 10px inset rgba(0, 0, 0, 0.2);
    position: relative;
  }

  .progress-bar {
    margin-top: 2rem;
  }

  .bar {
    width: 0;
    height: 100%;
    background-color: rgba(210, 167, 249, 0.25);

    /*Lollipop background gradient*/
    background-image: linear-gradient(
      -45deg,
      rgba(144, 19, 254, 0.25) 25%,
      transparent 25%,
      transparent 50%,
      rgba(144, 19, 254, 0.25) 50%,
      rgba(144, 19, 254, 0.25) 75%,
      transparent 75%,
      transparent
    );

    background-size: 30px 30px;
    animation: move 2s linear infinite;
    box-shadow: 2px 0 10px inset rgba(0, 0, 0, 0.2);
    transition: width 2s ease-out;
  }

  /*Lollipop background gradient animation*/
  @keyframes move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 30px 30px;
    }
  }

  .perc {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: bold;
  }
`;

const ProgressLinedBox = () => {
  const bars = [
    { id: "00001", dataSize: 20 },
    { id: "00001", dataSize: 40 },
    { id: "00001", dataSize: 60 },
    { id: "00001", dataSize: 80 },
    { id: "00001", dataSize: 100 },
  ];

  // function loading() {
  //   document.querySelectorAll(".bar").map((current) => {
  //     let startWidth = 0;
  //     const endWidth = current.dataset.size;

  //     /* 
  //     setInterval() time sholud be set as trasition time / 100. 
  //     In our case, 2 seconds / 100 = 20 milliseconds. 
  //     */
  //     const interval = setInterval(frame, 20);

  //     function frame() {
  //       if (startWidth >= endWidth) {
  //         clearInterval(interval);
  //       } else {
  //         startWidth++;
  //         current.style.width = `${endWidth}%`;
  //         current.firstElementChild.innerText = `${startWidth}%`;
  //       }
  //     }
  //   });
  // }

  // setTimeout(loading, 1000);
  return (
    <DIV>
      <div className="main-box">
        <div className="container-head">
          <h1 className="download">Lined progress bars</h1>
        </div>
        <div className="bars-content">
          <div className="box">
            <div className="wrapper">
              {bars.map((bar, index) => {
                return (
                  <div className="progress-bar">
                    <div className="bar" data-size={bar.dataSize}>
                      <span className="perc"></span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </DIV>
  );
};

export default ProgressLinedBox;
