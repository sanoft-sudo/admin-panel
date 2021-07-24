import React from "react";
import styled from "styled-components";
import Head from "next/head";
import SignUp from "../components/login&register/signin/SignUp";
import SignUp2 from "../components/login&register/signin2/SignUp2";

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const signup = () => {
  return (
    <DIV>
      <Head>
        <title>sign up</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="pages, register, sign up, signup" />
        <meta property="og:title" content="sign up" />
      </Head>
      <SignUp />
      <SignUp2 />
    </DIV>
  );
};

export default signup;
