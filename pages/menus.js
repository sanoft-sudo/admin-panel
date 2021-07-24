import React from "react";
import Head from "next/head";
import Navbar1 from "../components/navs/nav1/Navbar1";
import styled from "styled-components";
import Navbar3 from "../components/navs/nav3/Navbar3";
import Navbar4 from "../components/navs/Navbar4.js/Navbar4";
import Navbar7 from "../components/navs/nav7/Navbar7";
import ResponsiveNavbars from "../components/navs/responsive-navs/ResponsiveNavbars";

import ResponsiveNav3 from "../components/navs/responsive-navs/ResponsiveNav3";
import ResponsiveMegaMenu from "../components/navs/responsive-navs/ResponsiveMegaMenu";

const menus = () => {
  return (
    <div>
      <Head>
        <title>Menus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="menu, sidebar, nav, navbar" />
      </Head>
      <h1 style={{ color: "black" }}>Menus page</h1>

      <div className="mb-5">
        <ResponsiveMegaMenu />
      </div>
      <div className="mb-5">
        <ResponsiveNavbars />
      </div>
      <div className="mb-5">
        <ResponsiveNav3 />
      </div>
      <div className="mb-5">
        <Navbar4 />
      </div>
      <div className="mb-5">{/* <Navbar7 /> */}</div>
      <div className="row mb-5">
        <div className="col-md-6">
          <Navbar1 />
        </div>
        <div className="col-md-6">
          <Navbar3 />
        </div>
      </div>
    </div>
  );
};

export default menus;
