import React from "react";
import styled from "styled-components";
import Link from "next/link";

const DIV = styled.div`
  justify-content: center;
  align-items: center;
  padding: 2%;

  .content-box {
    padding: 2%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: rgba(255, 255, 255, 0.3);
    height: 100%;
    border-radius: 20px;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
  }
  .content-box h1 {
    color: rgba(255, 255, 255, 0.75);
    font-size: 100px;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
    /* backdrop-filter: blur(8.5px); */
    letter-spacing: -8px;
    /* -webkit-backdrop-filter: blur(8.5px); */
    margin-bottom: 0;
  }
  .content-box p {
    color: rgba(255, 255, 255, 0.75);
    font-size: 35px;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
    /* backdrop-filter: blur(8.5px); */
    letter-spacing: 1px;
    /* -webkit-backdrop-filter: blur(8.5px); */
    margin-bottom: 0;
  }
  .vertical-line {
    background-color: rgba(255, 255, 255, 0.75);
    width: 5px;
    height: 160px;
  }
  .content-box p span {
    color: #ff8214;
  }
  .content-box p span a {
    color: #ff8214;
    text-decoration: none;
  }

  .content-box p span a:hover {
    color: #25d911;
  }
  @media (min-width: 601px) and (max-width: 768px) {
    .content-box h1 {
      color: rgba(255, 255, 255, 0.75);
      font-size: 100px;
      text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
      /* backdrop-filter: blur(8.5px); */
      letter-spacing: -8px;
      /* -webkit-backdrop-filter: blur(8.5px); */
    }
    .content-box p {
      color: rgba(255, 255, 255, 0.75);
      font-size: 15px;
      text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
      /* backdrop-filter: blur(8.5px); */
      letter-spacing: 1px;
      /* -webkit-backdrop-filter: blur(8.5px); */
    }
    .vertical-line {
      background-color: rgba(255, 255, 255, 0.75);
      width: 5px;
      height: 87px;
    }
  }
  @media (min-width: 769px) and (max-width: 1200px) {
    .content-box h1 {
      color: rgba(255, 255, 255, 0.75);
      font-size: 100px;
      text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
      /* backdrop-filter: blur(8.5px); */
      letter-spacing: -8px;
      /* -webkit-backdrop-filter: blur(8.5px); */
    }
    .content-box p {
      color: rgba(255, 255, 255, 0.75);
      font-size: 15px;
      text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
      /* backdrop-filter: blur(8.5px); */
      letter-spacing: 1px;
      /* -webkit-backdrop-filter: blur(8.5px); */
    }
    .vertical-line {
      background-color: rgba(255, 255, 255, 0.75);
      width: 5px;
      height: 87px;
    }
  }
  @media (min-width: 501px) and (max-width: 600px) {
    .content-box h1 {
      color: rgba(255, 255, 255, 0.75);
      font-size: 90px;
      text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
      /* backdrop-filter: blur(8.5px); */
      letter-spacing: -8px;
      /* -webkit-backdrop-filter: blur(8.5px); */
    }
    .content-box p {
      color: rgba(255, 255, 255, 0.75);
      font-size: 15px;
      text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
      /* backdrop-filter: blur(8.5px); */
      letter-spacing: 1px;
      /* -webkit-backdrop-filter: blur(8.5px); */
    }
    .vertical-line {
      background-color: rgba(255, 255, 255, 0.75);
      width: 5px;
      height: 87px;
    }
  }
  @media (max-width: 500px) {
    .content-box {
      padding: 5%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      text-align: center;
    }
    .content-box h1 {
      color: rgba(255, 255, 255, 0.75);
      font-size: 70px;
      text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
      /* backdrop-filter: blur(8.5px); */
      letter-spacing: -8px;
      font-weight: 900;
      /* -webkit-backdrop-filter: blur(8.5px); */
    }
    .content-box p {
      color: rgba(255, 255, 255, 0.75);
      font-size: 14px;
      text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
      /* backdrop-filter: blur(8.5px); */
      letter-spacing: 1px;
      /* -webkit-backdrop-filter: blur(8.5px); */
    }
    .vertical-line {
      background-color: rgba(255, 255, 255, 0.75);
      width: 145px;
      height: 5px;
    }
  }
`;

const CommingSoon = () => {
  return (
    <DIV>
      <div className="content-box">
        <h1 className="mx-2">Coming soon...</h1>
      </div>
    </DIV>
  );
};

export default CommingSoon;
