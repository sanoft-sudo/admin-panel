import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  display: flex;
  justify-content: center;

  .nav {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .nav li {
    display: inline-block;
    margin-right: -4px;
    position: relative;
  }
  .nav li:before {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #fff;
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    width: 100%;
    height: 1px;
    z-index: -1;
  }
  .nav a {
    background-color: #f7f7f7;
    background-image: linear-gradient(#f7f7f7, #e7e7e7);
    border-radius: 50%;
    box-shadow: 0 3px 8px #aaa, inset 0 2px 3px #fff;
    color: #878787;
    display: block;
    font-family: "Poiret One", cursive;
    font-size: 25px;
    line-height: 50px;
    text-decoration: none;
    margin: 36px;
    position: relative;
    width: 50px;
    height: 50px;
  }
  .nav a:before {
    background: #fff;
    border-top: 2px solid #ddd;
    border-radius: 50%;
    box-shadow: inset 0 8px 48px #ddd;
    content: "";
    display: block;
    position: absolute;
    left: -10px;
    right: -10px;
    top: -10px;
    bottom: -10px;
    z-index: -1;
  }
  .nav a:visited {
    color: #a7a7a7;
  }
  .nav a:hover {
    color: #fc9003;
  }
  .nav a:active {
    background: #f5f5f5;
  }
`;

const Button3 = () => {
  return (
    <DIV>
      <nav>
        <ul className="nav">
          <li>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-telegram-plane"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </nav>
    </DIV>
  );
};

export default Button3;
