import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import * as Scroll from "react-scroll";
// import { animateScroll as scroll } from "react-scroll";

// import { scroller } from "react-scroll";

// let scroll = Scroll.animateScroll;

const DIV = styled.div`
  position: fixed;
  bottom: 40px;
  right: 50px;
  z-index: 999999;
  cursor: pointer;

  .topto-button {
    display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  }

  .blobs-container {
    display: flex;
  }

  .blob {
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    margin: 10px;
    height: 30px;
    width: 30px;
    align-items: center;
    text-align: center;
    padding: 4px;
    color: #fff;
  }

  .blob.green {
    background: rgba(51, 217, 178, 1);
    box-shadow: 0 0 0 0 rgba(51, 217, 178, 1);
    animation: pulse-green 2s infinite;
  }

  @keyframes pulse-green {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(51, 217, 178, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(51, 217, 178, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(51, 217, 178, 0);
    }
  }
`;

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (typeof window === "object") {
      if (window.pageYOffset > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = (e) => {
    if (typeof window === "object") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <DIV isVisible={isVisible}>
      <div className="topto-button">
        <div class="blobs-container">
          <div class="blob green " onClick={scrollToTop}>
            <i class="fas fa-angle-up"></i>
          </div>
        </div>
      </div>
    </DIV>
  );
};

export default BackToTop;
