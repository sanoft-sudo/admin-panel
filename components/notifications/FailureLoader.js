import React, { useState } from "react";
import styled from "styled-components";

const DIV = styled.div`
  display: inline-block;
  /* width: 100%; */
  position: relative;
  margin: 15px 5px;

  .main-box {
    display: flex;
    flex-direction: column;
    position: relative;
    min-width: 270px;
    max-width: 350px;
    padding: 10px;
    background: rgba(221, 232, 246, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
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
  svg {
    margin: 0 auto;
  }

  .tick {
    stroke-dasharray: 100;
    opacity: 0;
    stroke-dashoffset: 100;
    transition: all linear 0.5s;
    transition-delay: 0.5s;
  }

  path {
    stroke-width: 1;
    fill: transparent;
    stroke-width: 2;
    stroke: ${({ loaded }) =>
      loaded ? "rgba( 254, 2, 2, 0.30 )" : "rgba( 255, 255, 255, 0.25 )"};
  }

  circle {
    stroke-width: 1;
    fill: transparent;
    stroke-width: 2;
    stroke: ${({ loaded }) =>
      loaded ? "rgba( 254, 2, 2, 0.30 )" : "rgba( 255, 255, 255, 0.25 )"};
  }

  .tick-outline {
    stroke-dasharray: 100 26;
    stroke-dashoffset: -20;
    animation: dash 0.5s infinite linear;
    transform-origin: 50% 50%;
    transition: all linear 0.5s;
  }

  .loaded .tick-outline {
    stroke-dashoffset: 0;
    -animation: none;
  }

  .loaded .tick {
    stroke-dashoffset: 0;
    background-color: green;
    opacity: 1;
  }

  @keyframes dash {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const FailureLoader = () => {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target);
    setOpen(true);
    setTimeout(() => {
      setLoaded(true);
    }, 5000);
    setTimeout(() => {
      setOpen(false);
      setLoaded(false);
    }, 10000);
  };
  console.log(open);

  return (
    <DIV>
      <div className="main-box">
        <div className="container-head">
          <h1 className="download">Download failure</h1>
        </div>
        <svg
          style={{
            display: open ? "block" : "none",
          }}
          className={`progress-icon + ${loaded ? "loaded" : ""}`}
          width={50}
          height={50}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <circle
              style={{
                stroke: loaded
                  ? "rgba( 254, 2, 2, 0.30 )"
                  : "rgba( 255, 255, 255, 0.25 )",
              }}
              id="error-outline-path"
              cx={16}
              cy={16}
              r={13}
            />
            <path
              style={{
                stroke: loaded
                  ? "rgba( 254, 2, 2, 0.30 )"
                  : "rgba( 255, 255, 255, 0.25 )",
              }}
              id="tick-error"
              fill="none"
              d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
              opacity={1}
            />
          </defs>
          <g
            className="tick-icon"
            strokeWidth={2}
            style={{
              stroke: loaded
                ? "rgba( 254, 2, 2, 0.30 )"
                : "rgba( 255, 255, 255, 0.25 )",
            }}
            fill="none"
            transform="translate(1, 1)"
          >
            <use className="tick-outline" xlinkHref="#error-outline-path" />
            <use x={5.5} y={5.5} className="tick" xlinkHref="#tick-error" />
          </g>
          <g
            className="tick-icon"
            strokeWidth={2}
            style={{
              stroke: loaded
                ? "rgba( 254, 2, 2, 0.30 )"
                : "rgba( 255, 255, 255, 0.25 )",
            }}
            fill="none"
            transform="translate(1, 1.2)"
          >
            <use className="tick-outline" xlinkHref="#error-outline-path" />
            <use x={5.5} y={5.5} className="tick" xlinkHref="#tick-error" />
          </g>
        </svg>
        <button
          className="btn btn-outline-danger"
          style={{ display: open ? "none" : "inline-block" }}
          onClick={handleClick}
        >
          Download
        </button>
      </div>
    </DIV>
  );
};
export default FailureLoader;
