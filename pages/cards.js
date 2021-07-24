import React from "react";
import Head from "next/head";
import EmptyGlass from "../components/glassmorphisim/g1/EmptyGlass";
import CreditCard from "../components/glassmorphisim/creditcard/CreditCard";
import BoxExamples from "../components/glassmorphisim/boxes/BoxExamples";
import DarkBoxes from "../components/glassmorphisim/boxes/DarkBoxes";
import DataBoxes from "../components/glassmorphisim/boxes/DataBoxes";
const cards = () => {
  return (
    <div>
      <Head>
        <title>Cards and Avatar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="cards, avatar" />
      </Head>

      <h1>Cards and Avatar page</h1>

      <h1>Glassmorphisim examples</h1>
      <EmptyGlass />
      <CreditCard />
      <BoxExamples />
      <DataBoxes />
      <DarkBoxes />
    </div>
  );
};

export default cards;
