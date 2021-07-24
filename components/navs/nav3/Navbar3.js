import React from "react";
import styles from "../../../styles/Navbar3.module.css";
import {
  Dashboard,
  MonetizationOn,
  PeopleAlt,
  Settings,
  HeadsetMic,
} from "@styled-icons/material";
const Navbar3 = () => {
  return (
    <div>
      <ul className={styles.camenu}>
        <li>
          <a href="#">
            <span className={styles.caicon}>
              <Dashboard />
            </span>
            <div className={styles.cacontent}>
              <h2 className={styles.camain}>Dashboard</h2>
              <h3 className={styles.casub}>All in one</h3>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.caicon}>
              <PeopleAlt />
            </span>
            <div className={styles.cacontent}>
              <h2 className={styles.camain}>Users</h2>
              <h3 className={styles.casub}>All users by roles</h3>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.caicon}>
              <MonetizationOn />
            </span>
            <div className={styles.cacontent}>
              <h2 className={styles.camain}>Incomes</h2>
              <h3 className={styles.casub}>All incomes</h3>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.caicon}>
              <Settings />
            </span>
            <div className={styles.cacontent}>
              <h2 className={styles.camain}>Setting</h2>
              <h3 className={styles.casub}>Configure your pages</h3>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <span className={styles.caicon}>
              <HeadsetMic />
            </span>
            <div className={styles.cacontent}>
              <h2 className={styles.camain}>Support</h2>
              <h3 className={styles.casub}>24/7 for you needs</h3>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar3;
