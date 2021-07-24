import React from "react";
import Head from "next/head";
import InfoCard from "../components/dashboard/header/InfoCard";
import styled from "styled-components";
import { BurstNew } from "@styled-icons/foundation";
import { Paid, DeliveryDining } from "@styled-icons/material-outlined";
import { CheckCircle, CheckDouble } from "@styled-icons/boxicons-regular";
import MainBody from "../components/dashboard/main/MainBody";

const StyledDeliveryDining = styled(DeliveryDining)`
  width: 70px;
  height: 70px;
  color: rgba(250, 255, 255, 0.8);
  text-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;
const StyledCheckDouble = styled(CheckDouble)`
  width: 40px;
  height: 40px;
  color: rgba(250, 255, 255, 0.8);
  text-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;
const StyledCheckCircle = styled(CheckCircle)`
  width: 70px;
  height: 70px;
  color: rgba(250, 255, 255, 0.8);
  text-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;
const StyledBurstNew = styled(BurstNew)`
  width: 70px;
  height: 70px;
  color: rgba(250, 255, 255, 0.8);
  text-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;
const StyledPaid = styled(Paid)`
  width: 70px;
  height: 70px;
  color: rgba(250, 255, 255, 0.8);
  text-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;
const DIV = styled.div`
  display: inline-block;
  width: 100%;
`;

export default function Home() {
  const data = [
    {
      id: 11111,
      title: "New Orders",
      amount: "62000",
      duration: 1,
      percentage: 71,
      radius: 30,
      lineWidth: 8,
      icon: <StyledBurstNew />,
    },
    {
      id: 22222,
      title: "Purchases",
      amount: "86000",
      duration: 1,
      percentage: 89,
      radius: 30,
      lineWidth: 8,
      icon: <StyledPaid />,
    },
    {
      id: 33333,
      title: "Active Orders",
      amount: "126000",
      duration: 1,
      percentage: 78,
      radius: 30,
      lineWidth: 8,
      icon: <StyledCheckCircle />,
    },
    {
      id: 44444,
      title: "Delivered ",
      amount: "188000",
      duration: 1,
      percentage: 90,
      radius: 30,
      lineWidth: 8,
      icon: <StyledDeliveryDining />,
      secondIcon: <StyledCheckDouble />,
    },
  ];

  return (
    <div>
      <Head>
        <title>dashboard</title>
        <meta name="description" content="dashboard" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="dashboard, admin, admin panel" />
      </Head>

      <h1>Dashboard page</h1>
      <DIV>
        <div className="row px-0 mx-0">
          {data.map((product, index) => (
            <div
              className="col-xl-3 col-lg-6 pl-0 col-md-6 col-sm-12"
              // style={{ paddingLeft: "0px" }}
            >
              <InfoCard product={product} key={index} />
            </div>
          ))}
        </div>
        <div className="row px-0 mx-0">
          <MainBody />
        </div>
      </DIV>
    </div>
  );
}
