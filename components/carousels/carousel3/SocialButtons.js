import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  /* background: #262626; */
  position: relative;
  margin-top: 38px;

  ul {
    margin: 0;
    /* background: #262626; */
    padding: 10px;
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ul li {
    list-style: none;
    margin: 5px;
  }

  ul li a {
    position: relative;
    display: block;
    width: 45px;
    height: 45px;
    text-align: center;
    line-height: 45px;
    background: #333;
    border-radius: 50%;
    font-size: 30px;
    color: #666;
    transition: 0.5s;
  }
  i {
    width: 30px;
    height: 30px;
  }

  ul li a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #fc9003;
    transition: 0.5s;
    transform: scale(0.9);
    z-index: -1;
  }

  ul li a:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 15px #fc9003;
  }

  ul li a:hover {
    color: #fc9003;
    box-shadow: 0 0 5px #fc9003;
    text-shadow: 0 0 5px #fc9003;
  }
  i.fab {
    font-size: 23px;
  }
  @media (max-width: 500px) {
    ul {
      padding: 5px;
    }
    ul li {
      list-style: none;
      margin: 0 5px;
    }
    ul li a {
      position: relative;
      display: block;
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      background: #333;
      border-radius: 50%;
      font-size: 25px;
      color: #666;
      transition: 0.5s;
    }
  }
`;

const SocialButtons = () => {
  return (
    <DIV>
      <ul>
        <li>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
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
      </ul>
    </DIV>
  );
};

export default SocialButtons;
