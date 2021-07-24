import React from "react";
import Head from "next/head";
import SignIn from "../components/login&register/signin/SignIn";
import SignUp from "../components/login&register/signin/SignUp";
import SendRequestEmail from "../components/login&register/signin/SendRequestEmail";
import ResetPassword from "../components/login&register/signin/ResetPassword";
import SignIn2 from "../components/login&register/signin2/SignIn2";
import SendRequestEmail2 from "../components/login&register/signin2/SendRequestEmail2";
import ResetPassword2 from "../components/login&register/signin2/ResetPassword2";
import SignUp2 from "../components/login&register/signin2/SignUp2";
import styled from "styled-components";
import Loading1 from "../components/loading-page/loading1/Loading1";
import Loading2 from "../components/loading-page/loading2/Loading2";
import Loading3 from "../components/loading-page/loading3/Loading3";
import Loading4 from "../components/loading-page/loading4/Loading4";
import ComponentLoading from "../components/loading-page/loading5/ComponentLoading";
import Loading6 from "../components/loading-page/loading6/Loading6";
import Loading7 from "../components/loading-page/loading7/Loading7";
import Loading8 from "../components/loading-page/loading8/Loading8";

const DIV = styled.div`
  .sub-title {
    font-size: 22px;
    text-align: center;
    margin-top: 15px;
  }
`;

const pages = () => {
  return (
    <DIV>
      <Head>
        <title>pages</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="pages, login, signin, sign in, signup, signup"
        />
        <meta property="og:title" content="pages" />
      </Head>

      <h1>Pages</h1>
      <h1 className="sub-title">Sign in / Sign up / Password reset</h1>
      <SignIn />
      <SendRequestEmail />
      <ResetPassword />
      <SignUp />
      <SignIn2 />
      <SendRequestEmail2 />
      <ResetPassword2 />
      <SignUp2 />
      <h1 className="sub-title">Loading</h1>
      <Loading1 />
      <Loading2 />
      <Loading3 />
      <Loading4 />
      <Loading6 />
      <Loading7 />
      <ComponentLoading />
      <Loading8 />
    </DIV>
  );
};

export default pages;
