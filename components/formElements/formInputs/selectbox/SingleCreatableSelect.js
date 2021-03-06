import React, { useState } from "react";
import styled from "styled-components";
import CreatableSelect from "react-select/creatable";

const Styles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;

  .select-wrapper {
    background: rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 5px;
  }

  .sub-subTitle {
    font-size: 18px;
    text-transform: uppercase;
    color: #fff;
  }
`;

const defaultOptions = [
  { value: "javacsript", label: "Javacsript" },
  { value: "react", label: "React" },
  { value: "redux", label: "Redux" },
  { value: "next", label: "Next" },
];

const SingleCreatableSelect = () => {
  const [state, setState] = useState({
    isLoading: false,
    options: defaultOptions,
    value: undefined,
  });

  const createOption = (label) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ""),
  });

  const handleChange = (newValue, actionMeta) => {
    console.group("Value Changed");
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    setState({ value: newValue });
  };
  const handleCreate = (inputValue) => {
    setState({ isLoading: true });
    console.group("Option created");
    console.log("Wait a moment...");
    setTimeout(() => {
      const { options } = state;
      const newOption = createOption(inputValue);
      console.log(newOption);
      console.groupEnd();
      setState({
        isLoading: false,
        options: [...options, newOption],
        value: newOption,
      });
    }, 1000);
  };

  return (
    <Styles>
      <div className="select-wrapper">
        <h1 className="sub-subTitle">Single Creatable Select</h1>
        <CreatableSelect
          isClearable
          isDisabled={state.isLoading}
          isLoading={state.isLoading}
          onChange={handleChange}
          onCreateOption={handleCreate}
          options={state.options}
          value={state.value}
          styles={{
            singleValue: (base) => ({ ...base, color: "#fff" }),
            valueContainer: (base) => ({
              ...base,
              background: "rgba(0,0,0,0.2)",
              color: "white",
              width: "100%",
            }),
            control: (base) => ({
              ...base,
              backgroundColor: "rgba(0,0,0,0.2)",
              border: " 1px solid rgba(0,0,0,0.2)",
              color: "white",
            }),
            indicatorSeparator: (base) => ({
              ...base,
              backgroundColor: "rgba(0,0,0,0.2)",
            }),
            menu: (base) => ({
              ...base,
              backgroundColor: "rgba(0,0,0,0.3)",
              color: "#fff",
            }),
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 5,
            colors: {
              ...theme.colors,
              primary25: " rgba( 0, 0, 0, 0.4 )",
              primary50: " rgba( 0, 0, 0, 0.5 )",
              primary: " rgba( 0, 0, 0, 0.6 )",
            },
          })}
        />
      </div>
    </Styles>
  );
};
export default SingleCreatableSelect;
