import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Roboto:300);

  box-sizing: border-box;
  font-family: "Roboto", Arial, sans-serif;
  background-color: #f5f5f5;

  #checkbox,
  .btn span {
    /* Hide the checkbox input & word "Menu" in the button */
    display: none;
  }

  /* Menu button - starts */
  .btn {
    display: block;
    background-color: #247d9e;
    color: #fff;
    width: 55px;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    cursor: pointer;
    transition: width 0.3s ease-in-out;
  }
  /* Menu button - ends */

  /* Sidebar - starts */
  .sidebar-navig {
    background-color: #2b2e33;
    position: fixed;
    width: 250px;
    height: 100%;
    z-index: 1111;
    transition: transform 0.3s ease-in-out;
    transform: translateX(-250px);
  }

  .sidebar-navig ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  .sidebar-navig ul a {
    position: relative;
    text-decoration: none;
    display: block;
    background-color: transparent;
    color: #bab5bd;
    padding: 15px 20px;
    font-size: 16px;
  }

  .sidebar-navig ul a li i {
    margin-right: 15px;
  }

  /* Add the word "New" to the second item and "2" to the third item */
  .sidebar-navig ul a:nth-child(2):after,
  .sidebar-navig ul a:nth-child(3):after {
    position: absolute;
    top: 50%;
    right: 15px;
    margin-top: -9px;
    color: #fff;
    font-size: 13px;
    padding: 0 7px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
  }

  .sidebar-navig ul a:nth-child(2):after {
    content: "New";
    background-color: tomato;
  }

  .sidebar-navig ul a:nth-child(3):after {
    content: "2";
    background-color: #247d9e;
  }

  /* Add margin to the icon in the second item */
  .sidebar-navig ul a:nth-child(2) li i {
    margin-left: 4px;
    margin-right: 19px;
  }

  .sidebar-navig ul a:hover,
  .sidebar-navig ul a.active {
    background-color: #161920;
    color: #fff;
  }

  .sidebar-navig ul a:hover:before,
  .sidebar-navig ul a.active:before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    background-color: #247d9e;
    width: 4px;
    height: 100%;
  }
  /* Sidebar - ends */

  /* Effect of showing the sidebar - starts */
  #checkbox:checked ~ .sidebar-navig {
    transform: translateX(0);
  }

  #checkbox:checked + .btn {
    width: 250px;
    padding: 0 20px;
  }

  #checkbox:checked + .btn span {
    /* Show again the word "Menu" in the button */
    display: inline;
  }
`;

const Navbar8 = () => {
  return (
    <DIV>
      <input type="checkbox" id="checkbox" />
      <label className="btn" htmlFor="checkbox">
        <i className="fa fa-bars"></i> <span>Menu</span>
      </label>
      <div className="sidebar-navig">
        <ul>
          <a href="#">
            <li>
              <i className="fa fa-tachometer"></i>Dashboard
            </li>
          </a>
          <a href="#">
            <li>
              <i className="fa fa-lightbulb-o"></i>Widgets
            </li>
          </a>
          <a href="#" className="active">
            <li>
              <i className="fa fa-line-chart"></i>Charts
            </li>
          </a>
          <a href="#">
            <li>
              <i className="fa fa-television"></i>Front-End
            </li>
          </a>
          <a href="#">
            <li>
              <i className="fa fa-send"></i>Email
            </li>
          </a>
          <a href="#">
            <li>
              <i className="fa fa-wpforms"></i>Forms
            </li>
          </a>
          <a href="#">
            <li>
              <i className="fa fa-paint-brush"></i>UI Elements
            </li>
          </a>
          <a href="#">
            <li>
              <i className="fa fa-file-text-o"></i>Pages
            </li>
          </a>
          <a href="#">
            <li>
              <i className="fa fa-globe"></i>Google Maps
            </li>
          </a>
        </ul>
      </div>
    </DIV>
  );
};

export default Navbar8;
