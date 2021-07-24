import React from "react";
import Head from "next/head";
import MainFormLayouts from "../components/formElements/formLayouts/MainFormLayout";

const formlayouts = () => {
  return (
    <div>
      <Head>
        <title>Form layouts</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="form, form layouts, form examples" />
      </Head>

      <h1>Form layouts</h1>

      <MainFormLayouts />
    </div>
  );
};

export default formlayouts;
