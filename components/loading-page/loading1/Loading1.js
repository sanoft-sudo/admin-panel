import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  position: relative;
  /* background-color: #ffdee9;
  background-image: linear-gradient(0deg, #ffdee9 0%, #b5fffc 100%); */
  width: 100%;
  height: 350px;
  scroll-behavior: smooth;

  h1 {
    position: absolute;
    overflow: hidden;
    top: 50%;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    color: hsla(0, 0%, 100%, 0.3);
    font-size: 35px;
    font: 600 285% Baskerville, "Palatino Linotype", Palatino, serif;
  }

  @keyframes specialLoading {
    from {
      max-width: 0;
    }
  }

  h1:before {
    content: attr(data-content);
    position: absolute;
    overflow: hidden;
    max-width: 100%;
    color: #fff;
    animation: specialLoading 10s linear infinite;
  }
`;

const Loading1 = () => {
  return (
    <DIV id="refresh">
      <h1 data-content="YourBrand">YourBrand</h1>
    </DIV>
  );
};

export default Loading1;
