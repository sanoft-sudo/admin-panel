import React from "react";
import Head from "next/head";
import MainBox from "../components/formElements/formInputs/MainBox";

const forminputs = () => {
  return (
    <div>
      <Head>
        <title>Form inputs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="form, form inputs, input types" />
      </Head>

      <h1>Form inputs</h1>

      <MainBox />
    </div>
  );
};

export default forminputs;
