import React from "react";
import styled from "styled-components";
import Head from "next/head";
import SignIn from "../components/login&register/signin/SignIn";
import SignIn2 from "../components/login&register/signin2/SignIn2";
import SignIn3 from "../components/login&register/signin3/SignIn3";

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const signin = () => {
  return (
    <DIV>
      <Head>
        <title>sign in</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="pages, login, sign in, signin" />
        <meta property="og:title" content="sign in" />
      </Head>
      <SignIn />
      <SignIn2 />
      <SignIn3 />
    </DIV>
  );
};

export default signin;
