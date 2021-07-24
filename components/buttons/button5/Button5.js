import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  @import url(http://weloveiconfonts.com/api/?family=fontawesome);

  [class*="fontawesome-"]:before {
    font-family: "FontAwesome", sans-serif;
  }

  /* @red: #9a1323;
@skyblue: #128cc9; */

  nav {
    margin: 10px;
    padding: 0 20px;
  }

  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #fafafa;
    padding: 10px 10px;
    text-align: center;
    border-radius: 10px;
    box-shadow: inset 0px 0px 10px white;
    -webkit-box-shadow: inset 0px 0px 10px white;
  }

  nav ul li {
    display: inline-block;
    padding: 0px;
    margin: 0px 5px;
    border: 0px solid white;
    border-radius: 30px;
    background-color: white;
    box-shadow: inset 0px 0px 10px #128cc9;
    -webkit-box-shadow: inset 0px 0px 10px #128cc9;
    min-width: 20px;
    text-align: center;
    width: 50px;
    height: 50px;
    position: relative;
  }

  nav ul li div {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border: 0px solid white;
    border-radius: 30px;
    background-color: #128cc9;
    -webkit-transition: width 1s, height 1s, top 1s, left 1s;
    transition: width 1s, height 1s, top 1s, left 1s;
  }

  nav ul li a {
    width: 30px;
    height: 30px;
    text-decoration: none;
    position: absolute;
    top: 10px;
    left: 10px;
    -webkit-transition: top 1s, left 1s;
    transition: top 1s, left 1s;
  }

  nav ul li a span {
    font-size: 1.4em;
    color: white;
    -webkit-transition: color 1s;
    transition: color 1s;
  }

  nav ul li:hover div {
    width: 0px;
    height: 0px;
    top: 20px;
    left: 20px;
  }
  nav ul li:hover a {
    color: white;
    top: -10px;
    left: -10px;
  }
  nav ul li:hover a span {
    color: #128cc9;
  }
`;

const Button5 = () => {
  return (
    <DIV>
      <nav>
        <ul>
          <li id="linkedin">
            <div>
              <a href="#">
                <span className="fontawesome-linkedin">
                  <i className="fab fa-linkedin-in"></i>
                </span>
              </a>
            </div>
          </li>
          <li id="google-plus">
            <div>
              <a href="#">
                <span className="fontawesome-google-plus">
                  <i className="fab fa-google-plus-g"></i>
                </span>
              </a>
            </div>
          </li>
          <li id="instagram">
            <div>
              <a href="#">
                <span className="fontawesome-camera">
                  <i className="fab fa-instagram"></i>
                </span>
              </a>
            </div>
          </li>
          <li id="facebook">
            <div>
              <a href="#">
                <span className="fontawesome-facebook">
                  <i className="fab fa-facebook-f"></i>
                </span>
              </a>
            </div>
          </li>
          <li id="telegram">
            <div>
              <a href="#">
                <span className="fontawesome-facebook">
                  <i className="fab fa-telegram-plane"></i>
                </span>
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </DIV>
  );
};

export default Button5;
