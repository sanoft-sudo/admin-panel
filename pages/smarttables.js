import React from "react";
import Head from "next/head";
import SmartMain from "../components/tables/smarttables/SmartMain";

const smarttables = () => {
  return (
    <div>
      <Head>
        <title>Smart tables</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="table, stipped table, Smart table" />
      </Head>

      <h1>Smart tables</h1>
      <SmartMain />
    </div>
  );
};

export default smarttables;
