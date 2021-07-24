import React from "react";
import Head from "next/head";
import Carousel1 from "../components/carousels/carousel1/Carousel1";
import Carousel2 from "../components/carousels/carousel2/Carousel2";
import Carousel4 from "../components/carousels/carousel4/Carousel4";
import Carousel3 from "../components/carousels/carousel3/Carousel3";

const carousels = () => {
  return (
    <div>
      <Head>
        <title>carousels</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="carousels, avatar" />
      </Head>

      <h1>carousels page</h1>
      <div className="row mb-2">
        <div className="col-md-8 offset-md-2">
          <Carousel1 />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-8 offset-md-2">
          <Carousel2 />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-8 offset-md-2">
          <Carousel4 />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-8 offset-md-2">
          <Carousel3 />
        </div>
      </div>
    </div>
  );
};

export default carousels;
