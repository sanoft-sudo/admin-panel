import React from "react";
import Head from "next/head";
import InputBackgroudEffects from "../components/inputs/InputBackgroundEffects";
import InputBorderEffcets from "../components/inputs/InputBorderEffcets";
import InputWithLabelEffects from "../components/inputs/InputWithLabelEffects";
import styled from "styled-components";
import Button1 from "../components/buttons/button1/Button1";
import ButtonGroup from "../components/buttons/button2/ButtonGroup";
import Button3 from "../components/buttons/button3/Button3";
import Button4 from "../components/buttons/button4/Button4";
import Button5 from "../components/buttons/button5/Button5";
import Dropdown1 from "../components/buttons/dropdowns/dropdown1/Dropdown1";
import Dropdown2 from "../components/buttons/dropdowns/dropdown2/Dropdown2";
import Dropdown3 from "../components/buttons/dropdowns/dropdown3/Dropdown3";
import BurgerButton from "../components/buttons/burgerButtons/burgerbutton/BurgerButton";
import BurgerButton2 from "../components/buttons/burgerButtons/burgerbutton2/BurgerButton2";
import Button6 from "../components/buttons/button6/Button6";
import Dropdownspack from "../components/buttons/dropdowns/dropdownspack/Dropdownspack";
import MainButtons from "../components/buttons/MainButtons";

const DIV = styled.div`
  .line {
    border-bottom: 3px solid #0d2538;
    width: 95%;
    margin: 5px auto;
  }
  .sub-title {
    margin-top: 5px;
    text-align: center;
    color: #0d2538;
  }
`;
const buttons = () => {
  return (
    <DIV className="mainDiv">
      <Head>
        <title>Buttons</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="button" />
      </Head>

      <div className="line">
        <h1 className="sub-title">Buttons</h1>
      </div>
      <MainButtons />
      <div className="line pb-5">
        <h1 className="sub-title">Fab Buttons</h1>
        <Button1 />
        {/* <ButtonGroup/> */}
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
      </div>

      <div className="line">
        <h1 className="sub-title">Burger button animations</h1>
        <BurgerButton />
        <BurgerButton2 />
      </div>
    </DIV>
  );
};

export default buttons;
