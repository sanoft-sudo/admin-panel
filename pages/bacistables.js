import React from "react";
import Head from "next/head";
import BasicMain from "../components/tables/basictables/BasicMain";
const basictables = () => {
  return (
    <div>
      <Head>
        <title>Basic tables</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="table, stipped table, basic table" />
      </Head>

      <h1>Basic tables</h1>
      <BasicMain />
    </div>
  );
};

export default basictables;
