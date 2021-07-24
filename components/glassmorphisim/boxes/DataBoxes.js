import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Employees from "./databox/Employees";
import Employers from "./databox/Employers";
import PostedJobs from "./databox/PostedJobs";
import PostedResumes from "./databox/PostedResumes";

const DIV = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .wrapper {
    width: 100%;
    height: 70%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-image: url("./images/mountain.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

const DataBoxes = () => {
  return (
    <DIV>
      <div className="wrapper">
        <Employees />
        <Employers />
        <PostedJobs />
        <PostedResumes />
      </div>
    </DIV>
  );
};

export default DataBoxes;
