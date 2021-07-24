import React from "react";
import Head from "next/head";
import Accordion1 from "../components/accordions/accordion1/Accordion1";
import Accordion2 from "../components/accordions/accordion2/Accordion2";
import Accordion4 from "../components/accordions/accordion4/Accordion4";
import Accordion5 from "../components/accordions/accordion5/Accordion5";

const accardion = () => {
  return (
    <div>
      <Head>
        <title>Accordions</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="accordion" />
      </Head>

      <h1>Accordions</h1>
      <Accordion1 />
      <Accordion2 />
      <Accordion4 />
      {/* <Accordion5 /> */}
    </div>
  );
};

export default accardion;
