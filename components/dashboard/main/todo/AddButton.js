import React, { useState } from "react";
import styled from "styled-components";
import { Block } from "styled-icons/material";
import { AddCircle } from "@styled-icons/ionicons-outline";

const StyledAdd = styled(AddCircle)`
width:30px;
height:30px;
color: #fff;

`;

const DIV = styled.div`
  display: inline-block;
  /* width: 100%; */
  position: relative;
  margin: 15px 5px 0 5px;

  
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
    stroke: ${({ loaded }) => (loaded ? "green" : "white")};
  }

  circle {
    stroke-width: 1;
    fill: transparent;
    stroke-width: 2;
    stroke: ${({ loaded }) => (loaded ? "green" : "white")};
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

export const AddButton = () => {
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
                  ? "rgba( 2, 254, 18, 0.25 )"
                  : "rgba( 255, 255, 255, 0.25 )",
              }}
              id="tick-outline-path"
              cx={16}
              cy={16}
              r={13}
            />
            <path
              style={{
                stroke: loaded
                  ? "rgba( 2, 254, 18, 0.25 )"
                  : "rgba( 255, 255, 255, 0.25 )",
              }}
              id="tick-path"
              d="M6.173 16.252l5.722 4.228 9.22-12.69"
              opacity={1}
            />
          </defs>
          <g
            className="tick-icon"
            strokeWidth={2}
            stroke="rgba(0,0,0,.2)"
            fill="none"
            transform="translate(1, 1)"
          >
            <use className="tick-outline" xlinkHref="#tick-outline-path" />
            <use x={2} y={2} className="tick" xlinkHref="#tick-path" />
          </g>
          <g
            className="tick-icon"
            strokeWidth={2}
            stroke="#fff"
            fill="none"
            transform="translate(1, 1.2)"
          >
            <use className="tick-outline" xlinkHref="#tick-outline-path" />
            <use x={2} y={2} className="tick" xlinkHref="#tick-path" />
          </g>
        </svg>
        <StyledAdd style={{ display: open ? "none" : "inline-block" }}
          onClick={handleClick} />
       
    </DIV>
  );
};
