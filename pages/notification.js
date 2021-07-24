import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Notification from "../components/notifications/Notification";
import { SuccessLoaded } from "../components/notifications/SuccessLoaded";
import FailureLoader from "../components/notifications/FailureLoader";
import CustomAlertBox from "../components/notifications/CustomAlertBox";

const DIV = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: fixed;

  .notification-boxes {
    display: flex;
    flex-direction: column;
  }
`;

const notification = () => {
  return (
    <DIV>
      <Notification />
      <div className="notification-boxes">
        <SuccessLoaded />
        <FailureLoader />
      </div>
      <CustomAlertBox />
    </DIV>
  );
};

export default notification;
