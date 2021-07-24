import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  position: relative;
  /* background-color: #ffdee9;
  background-image: linear-gradient(0deg, #ffdee9 0%, #b5fffc 100%); */
  width: 100%;
  height: 350px;
  scroll-behavior: smooth;
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  .wrapper {
    position: absolute;
    width: 80%;
    height: 2px;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    justify-content: center;
    margin: auto;
  }

  .loader {
    height: 100%;
    display: flex;
    transform: translateZ(0);
  }
  .loader div {
    flex: 1;
    background: #fff;
    -webkit-animation: go 0.8s infinite alternate ease;
    animation: go 0.8s infinite alternate ease;
    box-shadow: 0 0 20px #fff;
  }
  .loader div:nth-child(1) {
    -webkit-animation-delay: -0.72s;
    animation-delay: -0.72s;
  }
  .loader div:nth-child(2) {
    -webkit-animation-delay: -0.64s;
    animation-delay: -0.64s;
  }
  .loader div:nth-child(3) {
    -webkit-animation-delay: -0.56s;
    animation-delay: -0.56s;
  }
  .loader div:nth-child(4) {
    -webkit-animation-delay: -0.48s;
    animation-delay: -0.48s;
  }
  .loader div:nth-child(5) {
    -webkit-animation-delay: -0.4s;
    animation-delay: -0.4s;
  }
  .loader div:nth-child(6) {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .loader div:nth-child(7) {
    -webkit-animation-delay: -0.24s;
    animation-delay: -0.24s;
  }
  .loader div:nth-child(8) {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  .loader div:nth-child(9) {
    -webkit-animation-delay: -0.08s;
    animation-delay: -0.08s;
  }
  .loader div:nth-child(10) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }

  @-webkit-keyframes go {
    100% {
      background: transparent;
      flex: 10;
      box-shadow: 0 0 0 transparent;
    }
  }

  @keyframes go {
    100% {
      background: transparent;
      flex: 10;
      box-shadow: 0 0 0 transparent;
    }
  }
  behavior: smooth;

  h1 {
    position: absolute;
    top: -85px;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    color: hsla(0, 0%, 100%, 0.3);
    font-size: 35px;
    font: 600 285% Baskerville, "Palatino Linotype", Palatino, serif;
  }

  @keyframes myLoading {
    from {
      max-width: 0;
    }
  }

  h1:before {
    content: attr(data-content);
    position: absolute;
    overflow: hidden;
    max-width: 10em;
    color: #fff;
    animation: myLoading 10s linear infinite;
  }

  @media (max-width: 413px) {
    h1 {
      position: absolute;
      top: -85px;
      bottom: 0;
      left: 0;
      right: 0;
      text-align: center;
      color: hsla(0, 0%, 100%, 0.3);
      font-size: 35px;
      font: 600 214% Baskerville, "Palatino Linotype", Palatino, serif;
    }
  }
`;

const Loading4 = () => {
  return (
    <DIV id="refresh3">
      <div className="wrapper">
        <h1 data-content="YourBrand">YourBrand</h1>
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </DIV>
  );
};

export default Loading4;
