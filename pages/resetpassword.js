import React from "react";
import styled from "styled-components";
import Head from "next/head";
import ResetPassword from "../components/login&register/signin/ResetPassword";
import ResetPassword2 from "../components/login&register/signin2/ResetPassword2";

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const resetpassword = () => {
  return (
    <DIV>
      <Head>
        <title>reset password</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="pages, reset password" />
        <meta property="og:title" content="reset password" />
      </Head>
      <ResetPassword />
      <ResetPassword2 />
    </DIV>
  );
};

export default resetpassword;
