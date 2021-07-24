import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  width: 100%;
  height: 25%;
  overflow: hidden;

  background: linear-gradient(
    90deg,
    #ffff00 6%,
    #ffa500 25%,
    #f14444 45%,
    #d53567 55%,
    #9a109a 94%
  );
  display: flex;
  align-items: center;
  justify-content: center;

  .wrap {
    position: relative;
    text-align: center;
  }

  h1 {
    font-family: Arial;
    color: #fff;
    font-size: 90px;
    padding: 20px 30px;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
  }

  .main {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    width: 40px;
    height: 40px;
    position: absolute;
    border-radius: 50%;
    top: 11px;
    left: 280px;
    right: 0;
    display: block;
    margin: 0 auto;
    z-index: 4;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }

  .drop {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: absolute;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    display: block;
    margin: 0 auto;
  }

  .drop1 {
    width: 45%;
    height: 150px;
    top: -2px;
    left: 0;
    right: 0;
    z-index: 2;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }

  .drop2 {
    width: 40px;
    height: 40px;
    top: -30px;
    left: -80%;
    right: 0;
    z-index: 4;
  }

  .drop3 {
    width: 60px;
    height: 60px;
    top: 120px;
    right: 30px;
    z-index: 3;
  }

  .drop4 {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    top: -55px;
    right: 20px;
  }
  @media (min-width: 600px) and (max-width: 768px) {
    .drop1 {
      width: 70%;
      height: 150px;
      top: 56px;
      left: 0;
      right: 0;
      z-index: 2;
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }

    .drop2 {
      width: 40px;
      height: 40px;
      top: -30px;
      left: -80%;
      right: 0;
      z-index: 4;
    }

    .drop3 {
      width: 60px;
      height: 60px;
      top: 120px;
      right: 30px;
      z-index: 3;
    }

    .drop4 {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      top: -55px;
      right: 20px;
    }
  }

  @media (min-width: 600px) and (max-width: 768px) {
    .drop1 {
      width: 54%;
      height: 204px;
      top: 24px;
      left: 0;
      right: 0;
      z-index: 2;
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }
    .drop3 {
      width: 60px;
      height: 60px;
      top: 175px;
      right: 30px;
      z-index: 3;
    }
  }
  @media (min-width: 769px) and (max-width: 893px) {
    .drop1 {
      width: 54%;
      height: 204px;
      top: 25px;
      left: 0;
      right: 0;
      z-index: 2;
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }
    .drop3 {
      width: 60px;
      height: 60px;
      top: 175px;
      right: 30px;
      z-index: 3;
    }
  }
`;

const EmptyGlass = () => {
  return (
    <DIV>
      <div className="wrap">
        <h1>Empty Glass</h1>
        <div className="drop drop1">
          <div className="drop drop2"></div>
          <div className="drop drop3"></div>
          <div className="drop drop4"></div>
        </div>
      </div>
    </DIV>
  );
};

export default EmptyGlass;
