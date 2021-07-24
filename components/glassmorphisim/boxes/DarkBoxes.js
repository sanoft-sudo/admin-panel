import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  font-family: "Open Sans", sans-serif;

  position: relative;
  .my-cards {
    position: absolute;
    height: 300px;
    width: 100%;
    top: 60px;
    left: calc(50% - 25%);
    display: flex;
  }

  .card {
    display: flex;
    height: 280px;
    width: 200px;
    background-color: #17141d;
    border-radius: 10px;
    box-shadow: -1rem 0 3rem #000;
    /*   margin-left: -50px; */
    transition: 0.4s ease-out;
    position: relative;
    left: 0px;
  }

  .card:not(:first-child) {
    margin-left: -50px;
  }

  .card:hover {
    transform: translateY(-20px);
    transition: 0.4s ease-out;
  }

  .card:hover ~ .card {
    position: relative;
    left: 50px;
    transition: 0.4s ease-out;
  }

  .title {
    color: white;
    font-weight: 300;
    position: absolute;
    left: 20px;
    top: 15px;
  }

  .bar {
    position: absolute;
    top: 100px;
    left: 20px;
    height: 5px;
    width: 150px;
  }

  .emptybar {
    background-color: #2e3033;
    width: 100%;
    height: 100%;
  }

  .filledbar {
    position: absolute;
    top: 0px;
    z-index: 3;
    width: 0px;
    height: 100%;
    background: rgb(0, 154, 217);
    background: linear-gradient(
      90deg,
      rgba(0, 154, 217, 1) 0%,
      rgba(217, 147, 0, 1) 65%,
      rgba(255, 186, 0, 1) 100%
    );
    transition: 0.6s ease-out;
  }

  .card:hover .filledbar {
    width: 120px;
    transition: 0.4s ease-out;
  }

  .circle {
    position: absolute;
    top: 150px;
    left: calc(50% - 60px);
  }

  .stroke {
    stroke: white;
    stroke-dasharray: 360;
    stroke-dashoffset: 360;
    transition: 0.6s ease-out;
  }

  svg {
    fill: #17141d;
    stroke-width: 2px;
  }

  .card:hover .stroke {
    stroke-dashoffset: 100;
    transition: 0.6s ease-out;
  }

  @media (max-width: 475px) {
    .my-cards {
      position: relative;
      height: 300px;
      width: 100%;
      top: 60px;
      left: calc(50% - 30%);
      display: flex;
    }
    .card:not(:first-child) {
      margin-left: 0px;
      margin-top: -27px;
    }

    .card:hover {
      transform: translateY(-30px);
      transition: 0.4s ease-out;
    }

    .card:hover ~ .card {
      position: relative;
      left: 5px;
      transition: 0.4s ease-out;
    }
  }
  @media (min-width: 476px) and (max-width: 654px) {
    .my-cards {
      position: relative;
      height: 300px;
      width: 100%;
      top: 60px;
      left: calc(50% - 35%);
      display: flex;
    }
    .card {
      margin-bottom: 15px;
    }
    .card:nth-child(2) {
      margin-left: -50px;
    }
    .card:nth-child(4) {
      margin-left: -50px;
      left: calc(50% - 39%);
    }
    .card:nth-child(3) {
      left: calc(50% - 39%);
    }

    .card:hover {
      transform: translateY(-30px);
      transition: 0.4s ease-out;
    }

    .card:hover ~ .card {
      position: relative;
      left: 50px;
      transition: 0.4s ease-out;
    }
    .card:nth-child(3):hover ~ .card:nth-child(4) {
      position: relative;
      left: 100px;
      transition: 0.4s ease-out;
    }
  }

  @media (min-width: 654px) and (max-width: 767px) {
    .my-cards {
      left: calc(50% - 46%);
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .my-cards {
      left: calc(50% - 40%);
    }
  }
  @media (min-width: 1024px) {
    .my-cards {
      left: calc(50% - 30%);
    }
  }
`;

const DarkBoxes = () => {
  return (
    <DIV>
      <div className="my-cards row">
        <div className="card col-md-4 col-sm-12">
          <h3 className="title">Card 1</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <div className="circle">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle className="stroke" cx="60" cy="60" r="50" />
            </svg>
          </div>
        </div>
        <div className="card col-md-4 col-sm-12">
          <h3 className="title">Card 2</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <div className="circle">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle className="stroke" cx="60" cy="60" r="50" />
            </svg>
          </div>
        </div>
        <div className="card col-md-4 col-sm-12">
          <h3 className="title">Card 3</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <div className="circle">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle className="stroke" cx="60" cy="60" r="50" />
            </svg>
          </div>
        </div>
        {/* <div className="card col-md-4 col-sm-12">
          <h3 className="title">Card 4</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <div className="circle">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle className="stroke" cx="60" cy="60" r="50" />
            </svg>
          </div>
        </div> */}
      </div>
    </DIV>
  );
};

export default DarkBoxes;
