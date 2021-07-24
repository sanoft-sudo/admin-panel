import React from "react";
import styled from "styled-components";
import DounughtChart from "./DounughtChart";
import RotatingWorldGlobe from "./RotatingWorldGlobe";
import Chart from "./Chart";
import AmChart from "./AmChart";
import SemiDoughnut from "./SemiDoughnut";
import Feed from "./feed/Feed";
import ToDoApp from "./todo/ToDoApp";
const DIV = styled.div`
  .chartBox {
    display: flex;
    width: 100%;
    margin-bottom: 30px;
    flex-direction: column;
    position: relative;
    padding: 10px;
    background: rgba(221, 232, 246, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    margin: 2px;
  }
  .first-row {
    /* width: 100%; */
    justify-content: space-evenly;
  }
  .container-head {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    width: 100%;
    margin-bottom: 5px;
  }
  .container-head h1 {
    color: #fff;
    text-align: center;
  }

  @media (max-width: 337px) {
    .container-head h1 {
      font-size: 20px;
    }
  }
  @media (min-width: 768px) {
    .chartBox {
      width: 100%;
    }
  }
`;

const MainBody = () => {
  return (
    <DIV>
      <div className="col">
        <div className="row first-row">
          <div className="col-md-6 pl-0 col-sm-12  ">
            <div className="chartBox">
              <div className="container-head">
                <h1>Doughnut chart</h1>
              </div>
              <DounughtChart />
            </div>
          </div>
          <div className="col-md-6 pl-0 col-sm-12 ">
            <div className="chartBox">
              <div className="container-head">
                <h1>semi-doughnut</h1>
              </div>
              <SemiDoughnut />
            </div>
          </div>
        </div>
        <div className="row first-row">
          <div className="col-md-6 pl-0 col-sm-12  ">
            <div className="chartBox">
              <div className="container-head">
                <h1>feed</h1>
              </div>
              <Feed />
            </div>
          </div>
          <div className="col-md-6 pl-0 col-sm-12">
            <div className="chartBox">
              <div className="container-head">
                <h1>todo app</h1>
              </div>
              <ToDoApp />
            </div>
          </div>
        </div>
      </div>
    </DIV>
  );
};

export default MainBody;
