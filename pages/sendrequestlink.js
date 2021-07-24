import React from "react";
import styled from "styled-components";
import Head from "next/head";
import SendRequestEmail from "../components/login&register/signin/SendRequestEmail";
import SendRequestEmail2 from "../components/login&register/signin2/SendRequestEmail2";

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const sendrequestlink = () => {
  return (
    <DIV>
      <Head>
        <title>send e-mail request</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="pages, send e-mail request" />
        <meta property="og:title" content="send e-mail request" />
      </Head>
      <SendRequestEmail />
      <SendRequestEmail2 />
    </DIV>
  );
};

export default sendrequestlink;
