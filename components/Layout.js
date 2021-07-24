import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MainNavbar from "./mainNavbar/MainNavbar";
import BackToTop from "./backtotop/BackToTop";
import Header from "./header/Header";
import * as Scroll from "react-scroll";
import ScrollTop from "./backtotop/ScrollTop";

let scroll = Scroll.animateScroll;

// const BackToTop = dynamic(
//   () => {
//     return import("./backtotop/BackToTop");
//   },
//   { ssr: false }
// );
const DIV = styled.div`
  /* display: flex;
  flex-direction: row; */
  background: url("./images/blur-bg.jpg") center center no-repeat;
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  /* width: 100vw; */
  height: 100%;
  background-size: cover;
  box-sizing: border-box;
  overflow-y: scroll;
  h1 {
    font-family: Roboto, sans-serif;
    font-weight: 500;
  }

  .custom-container {
    /* min-height: 100vh; */
    /* padding: 0 0.5rem; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* overflow-y: scroll; */
    height: 100%;
    /* width: 100%; */
    margin-left: 6%;
    box-sizing: border-box;
  }

  .main {
    padding: 1rem;
    flex: 1;
    display: flex;
    /* width: 100%; */
    flex-direction: column;
    justify-content: flex-start;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .scroll-to-top {
    position: fixed;
    bottom: 0.5rem;
    right: 0.5rem;
    animation: fadeIn 700ms ease-in-out 1s both;
    cursor: pointer;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 992px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
    .custom-container {
      /* min-height: 100vh; */
      /* padding: 0 0.5rem; */
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 80%;
      margin-left: 17%;
    }
    .main {
      padding: 0;
      width: 100%;
    }
  }

  /* margin: 0 auto; */
`;

const Layout = ({ children }) => {
  // const [isVisible, setIsVisible] = useState(false);

  // // Show button when page is scorlled upto given distance
  // const toggleVisibility = () => {
  //   if (window.pageYOffset > 20) {
  //     setIsVisible(true);
  //   } else {
  //     setIsVisible(false);
  //   }
  // };

  // // Set the top cordinate to 0
  // // make scrolling smooth
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", toggleVisibility);
  // }, []);

  return (
    <DIV className="container-lg px-0">
      <Header />
      <MainNavbar />
      <div className="custom-container">
        <main className="main">{children}</main>
      </div>
      <ScrollTop />
    </DIV>
  );
};

export default Layout;
