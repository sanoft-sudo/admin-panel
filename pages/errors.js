import React from "react";
import Head from "next/head";
import Error1 from "../components/error-pages/Error1";
import Error2 from "../components/error-pages/Error2";
const errors = () => {
  return (
    <div>
      <Head>
        <title>Error</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="pages, error" />
      </Head>

      <div>
        <Error1 />
      </div>
      <div>
        <Error2 />
      </div>
    </div>
  );
};

export default errors;
