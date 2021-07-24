import React from "react";
import styled from "styled-components";
import BasicForm from "./BasicForm";
import InlineForm from "./InlineForm";
import WithoutLabelForm from "./WithoutLabelForm";

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MainFormLayouts = () => {
  return (
    <Styles>
      <div className="row">
        <div className="col">
          <InlineForm />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <BasicForm />
        </div>
        <div className="col-md-6 col-sm-12">
          <WithoutLabelForm />
        </div>
      </div>
    </Styles>
  );
};
export default MainFormLayouts;
