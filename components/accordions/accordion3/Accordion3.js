import React, { useState } from "react";
import styled from "styled-components";

const DIV = styled.div`
  margin-top: 30px;

  .sidebar-toggle {
    margin-left: -240px;
  }
  .sidebar {
    width: 240px;
    /* height: 100%; */
    background: #293949;
    position: absolute;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    z-index: 100;
  }
  .sidebar #leftside-navigation ul,
  .sidebar #leftside-navigation ul ul {
    margin: -2px 0 0;
    padding: 0;
  }
  .sidebar #leftside-navigation ul li {
    list-style-type: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  .sidebar #leftside-navigation ul li.active > a {
    color: #1abc9c;
  }
  .sidebar #leftside-navigation ul li .pull-right {
    transform: rotate(0deg);
    transition: ease-in-out 0.5s;
  }

  .sidebar #leftside-navigation ul li.active .pull-right {
    transform: rotate(90deg);
    transition: ease-in-out 0.5s;
    margin-top: 12px;
    margin-right: 8px;
  }
  i {
    margin-top: 3px;
  }
  .sidebar #leftside-navigation ul li.active ul {
    display: block;
  }
  .sidebar #leftside-navigation ul li a {
    color: #aeb2b7;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    padding: 18px 0 18px 25px;
    font-size: 12px;
    outline: 0;
    -webkit-transition: all 200ms ease-in;
    -moz-transition: all 200ms ease-in;
    -o-transition: all 200ms ease-in;
    -ms-transition: all 200ms ease-in;
    transition: all 200ms ease-in;
  }
  .sidebar #leftside-navigation ul li a:hover {
    color: #1abc9c;
  }
  .sidebar #leftside-navigation ul li a span {
    display: inline-block;
  }
  .sidebar #leftside-navigation ul li a i {
    width: 20px;
  }
  .sidebar #leftside-navigation ul li a i .fa-angle-left,
  .sidebar #leftside-navigation ul li a i .fa-angle-right {
    padding-top: 3px;
  }
  .sidebar #leftside-navigation ul ul {
    display: none;
  }
  .sidebar #leftside-navigation ul ul li {
    background: #23313f;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    border-bottom: none;
  }
  .sidebar #leftside-navigation ul ul li a {
    font-size: 12px;
    padding-top: 13px;
    padding-bottom: 13px;
    color: #aeb2b7;
  }
  a .pull-right {
    margin-left: auto;
  }
`;

const Accordion3 = () => {
  const [show, setShow] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);
  const handleClick = (e, id) => {
    e.preventDefault();
    setCurrentValue(id);
    if (id > 0) {
      setShow(!show);
    }
    setShow(!show);
  };

  return (
    <DIV>
      <aside className="sidebar">
        <div id="leftside-navigation" className="nano">
          <ul className="nano-content">
            <li>
              <a onClick={(e) => handleClick(e, 0)} href="#">
                <i className="fab fa-dashcube"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li
              className={
                currentValue === 1 && show ? "sub-menu active" : "sub-menu"
              }
            >
              <a
                onClick={(e) => handleClick(e, 1)}
                href="#"
                data-value="uiElements"
              >
                <i className="fa fa-cogs"></i>
                <span>UI Elements</span>
                <i className="arrow fa fa-angle-right pull-right"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Alerts &amp; Notifications</a>
                </li>
                <li>
                  <a href="#">Buttons</a>
                </li>
                <li>
                  <a href="#">Sliders &amp; Progress</a>
                </li>
                <li>
                  <a href="#">Tabs &amp; Accordions</a>
                </li>
              </ul>
            </li>
            <li
              className={
                currentValue === 2 && show ? "sub-menu active" : "sub-menu"
              }
            >
              <a onClick={(e) => handleClick(e, 2)}>
                <i className="fa fa-table"></i>
                <span>Tables</span>
                <i className="arrow fa fa-angle-right pull-right"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Basic Tables</a>
                </li>

                <li>
                  <a href="#">Data Tables</a>
                </li>
              </ul>
            </li>
            <li>
              <a onClick={(e) => handleClick(e, 0)} href="#">
                <i className="fa fa fa-tasks"></i>
                <span>Forms</span>
              </a>
            </li>

            <li
              className={
                currentValue === 5 && show ? "sub-menu active" : "sub-menu"
              }
            >
              <a onClick={(e) => handleClick(e, 5)} href="#">
                <i className="far fa-chart-bar"></i>
                <span>Charts</span>
                <i className="arrow fa fa-angle-right pull-right"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Chartjs</a>
                </li>
                <li>
                  <a href="#">Morris</a>
                </li>
                <li>
                  <a href="#">C3 Charts</a>
                </li>
              </ul>
            </li>
            <li
              className={
                currentValue === 6 && show ? "sub-menu active" : "sub-menu"
              }
            >
              <a onClick={(e) => handleClick(e, 6)} href="#">
                <i className="fa fa-map-marker"></i>
                <span>Maps</span>
                <i className="arrow fa fa-angle-right pull-right"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Google Map</a>
                </li>
                <li>
                  <a href="#">Vector Map</a>
                </li>
              </ul>
            </li>
            <li className="sub-menu">
              <a onClick={(e) => handleClick(e, 0)} href="№">
                <i className="fa fa-text-height"></i>
                <span>Typography</span>
              </a>
            </li>
            <li
              className={
                currentValue === 7 && show ? "sub-menu active" : "sub-menu"
              }
            >
              <a onClick={(e) => handleClick(e, 7)} href="#">
                <i className="fa fa-file"></i>
                <span>Pages</span>
                <i className="arrow fa fa-angle-right pull-right"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Blank Page</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Sign Up</a>
                </li>
                <li>
                  <a href="#">Calendar</a>
                </li>
                <li>
                  <a href="#">Timeline</a>
                </li>
                <li>
                  <a href="#">404</a>
                </li>
                <li>
                  <a href="#">500</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    </DIV>
  );
};

export default Accordion3;
