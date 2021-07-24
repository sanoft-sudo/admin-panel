import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Loading1 from "../components/loading-page/loading1/Loading1";
import Loading2 from "../components/loading-page/loading2/Loading2";
import Loading3 from "../components/loading-page/loading3/Loading3";
import Loading4 from "../components/loading-page/loading4/Loading4";
import Loading6 from "../components/loading-page/loading6/Loading6";
import Loading7 from "../components/loading-page/loading7/Loading7";
import ComponentLoading from "../components/loading-page/loading5/ComponentLoading";
import Loading8 from "../components/loading-page/loading8/Loading8";
import LoadingBonuce from "../components/loading-page/loading/LoadingBonuce";

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const loading = () => {
  return (
    <DIV>
      <Head>
        <title>sign in</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="pages, loading" />
        <meta property="og:title" content="loading" />
      </Head>
      <Loading1 />
      <Loading2 />
      <Loading3 />
      <Loading4 />
      <LoadingBonuce/>
      <Loading6 />
      <Loading7 />
      <ComponentLoading />
      <Loading8 />
      
    </DIV>
  );
};

export default loading;
