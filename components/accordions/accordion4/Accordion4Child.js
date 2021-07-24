import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  margin: 10px;
  text-align: center;
`;

const Accordion4Child = ({ title }) => {
  return (
    <DIV>
      <h1>{title}</h1>
    </DIV>
  );
};

export default Accordion4Child;
