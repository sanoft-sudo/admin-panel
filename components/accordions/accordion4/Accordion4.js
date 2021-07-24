import React, { useRef, useState } from "react";
import styled from "styled-components";
// import { Palette } from "@styled-icons/material-outlined/Palette";
import {
  Adobe,
  Figma,
  Invision,
  Html5,
  Css3,
  Bootstrap,
  ReactLogo,
  Redux,
  Nodejs,
  SpringBoot,
  Python,
} from "@styled-icons/boxicons-logos";
import {
  Sketch,
  Styledcomponents,
  Nextdotjs,
  Postgresql,
  Mongodb,
} from "@styled-icons/simple-icons";
import { Palette } from "@styled-icons/boxicons-solid";
import { LaptopCode, Cogs, Database } from "@styled-icons/fa-solid";
import { Java } from "@styled-icons/fa-brands";
import Accordion4Child from "./Accordion4Child";

const StyledPalette = styled(Palette)`
  width: 20px;
`;
const StyledAdobe = styled(Adobe)`
  width: 20px;
`;
const StyledFigma = styled(Figma)`
  width: 20px;
`;
const StyledInvision = styled(Invision)`
  width: 20px;
`;
const StyledSketch = styled(Sketch)`
  width: 20px;
`;
const StyledLaptopCode = styled(LaptopCode)`
  width: 20px;
`;
const StyledCog = styled(Cogs)`
  width: 20px;
`;
const StyledHtml = styled(Html5)`
  width: 20px;
`;
const StyledCss3 = styled(Css3)`
  width: 20px;
`;
const StyledBootstrap = styled(Bootstrap)`
  width: 20px;
`;
const StyledReactLogo = styled(ReactLogo)`
  width: 20px;
`;
const StyledStyledcomponents = styled(Styledcomponents)`
  width: 20px;
`;
const StyledRedux = styled(Redux)`
  width: 20px;
`;
const StyledNextdotjs = styled(Nextdotjs)`
  width: 20px;
`;
const StyledNodejs = styled(Nodejs)`
  width: 20px;
`;
const StyledPostgresql = styled(Postgresql)`
  width: 20px;
`;
const StyledMongodb = styled(Mongodb)`
  width: 20px;
`;
const StyledJava = styled(Java)`
  width: 20px;
`;
const StyledSpringBoot = styled(SpringBoot)`
  width: 20px;
`;
const StyledPython = styled(Python)`
  width: 20px;
`;
const StyledDatabase = styled(Database)`
  width: 17px;
  height: 17px;
`;

// const Collapse = () =>{

// }

const DIV = styled.div`
  margin-top: 30px;
  @import url("https://fonts.googleapis.com/css?family=Oswald");
  width: 100%;
  background: linear-gradient(45deg, #fc466b, #3f5efb);
  display: flex;
  padding: 10px;
  position: relative;
  /* Variables */
  /* Styles */

  .d-flex {
    width: 100%;
    display: flex;
  }

  .wrapper {
    width: ${({ open }) => (open ? "100%" : "68px")};
    transition: width 0.25s;
    height: auto;
    margin: 0;
    background: #293949;
    border-radius: 4px;
    position: relative;
    top: 0;
    left: 0;
    box-shadow: 0px 2px rgba(0, 0, 0, 0.12);
    z-index: 20;
  }

  .wrapper label {
    display: block;
    position: relative;
    color: #b5abab;
    overflow: hidden;
    cursor: pointer;
    height: 56px;
    padding-top: 1px;
  }
  .wrapper label:nth-of-type(1) {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .wrapper label:nth-of-type(4) {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .wrapper ul {
    margin: 0;
    padding: 0;
  }
  .wrapper li {
    color: white;
    list-style-type: none;
    padding: 15px 0px;
  }
  .label-icon {
    margin: 1rem 1rem 1rem 0rem;
  }
  .wrapper li a {
    display: ${({ open }) => (open ? "block" : "none")};
    opacity: ${({ open }) => (open ? 1 : 0)};
    transition: opacity 3s ease-in-out;
    width: 100%;
    /* padding: 15px 0px; */
    text-decoration: none;
    color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  }
  .wrapper li a::target {
    scroll-behavior: none;
  }
  .wrapper li:hover {
    background-color: rgba(0, 0, 0, 0.06);
    color: #fff;
  }
  .wrapper label:hover .label-icon i.fas {
    color: #38b087;
    transition: color 0.1s;
    transition-delay: 0.2s;

    /* text-indent: 30px; */
  }
  .wrapper label:hover .lil_arrow {
    border-color: #38b087;
    transition: border-color 0.2s;
    transition-delay: 0.7s;
  }
  .wrapper label:hover p {
    transition: transform 1s ease;
    transform: translateX(8px);
  }
  .wrapper label p {
    margin: 1rem 1rem 1rem 0rem;
    transition: transform 1s ease;
    transform: translateX(0px);
    display: ${({ open }) => (open ? "block" : "none")};
    transition: display 0.5s ease-in-out;
  }
  .wrapper input[type="checkbox"] {
    display: none;
  }
  .wrapper label span {
    position: absolute;
    width: 0px;
    display: block;
    top: 58px;
    background: #38b087;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition: width 0.8s ease-in-out;
  }
  .wrapper p,
  .wrapper li a {
    display: ${({ open }) => (open ? "block" : "none")};
    transition: display 0.5s ease-in-out;
  }

  .wrapper .content {
    height: 100%;
    display: none;
    background: #263d54;
    position: relative;
    border-top: 2px solid rgba(0, 0, 0, 0.12);
    top: 4px;
    transition: height 0.8s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .wrapper .lil_arrow {
    width: 5px;
    height: 5px;
    transition: transform 0.8s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    border-top: 2px solid rgba(0, 0, 0, 0.33);
    border-right: 2px solid rgba(0, 0, 0, 0.33);
    float: right;
    position: relative;
    top: -30px;
    right: ${({ open }) => (open ? "27px" : "13px")};
    transform: rotate(45deg);
    border-color: #666666;
  }
  .wrapper input[type="checkbox"]:checked + label > .content {
    display: block;
    height: 100%;
    transition: height 0.8s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .wrapper input[type="checkbox"]:checked + label > span {
    display: none;
  }
  .wrapper input[type="checkbox"]:checked + label > .lil_arrow {
    transition: transform 0.8s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: rotate(135deg);
    border-color: #fff;
  }
  .wrapper input[type="checkbox"]:checked + label:nth-of-type(1) {
    background: #415970 !important;
    color: #fff;
    height: 282px;
    transition: height 1s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .wrapper input[type="checkbox"]:checked + label:nth-of-type(2) {
    background: #415970 !important;
    color: #fff;
    height: 449px;
    transition: height 1s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .wrapper input[type="checkbox"]:checked + label:nth-of-type(3) {
    background: #415970 !important;
    color: #fff;
    height: 282px;
    transition: height 1s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .wrapper input[type="checkbox"]:checked + label:nth-of-type(4) {
    background: #415970 !important;
    color: #fff;
    height: 174px;
    transition: height 1s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .wrapper label:hover > span {
    width: 100%;
    height: 4px;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition: width 0.8s ease-in-out;
  }
  .wrapper label ul {
    padding-bottom: 0;
  }
  .wrapper input[type="checkbox"]:not(:checked) + label {
    display: block;
    transition: height 0.8s;
    height: 60px;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .content ul li {
    padding-left: ${({ open }) => (open ? "10%" : "31%")};
    display: flex;
    align-items: center;
  }
  .mini-container {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 470px) {
    .wrapper label p {
      font-size: 10px;
      margin: 1rem 0.5rem;
    }
    .kdOWhQ .wrapper input[type="checkbox"]:not(:checked) + label {
      height: 56px;
    }
    .wrapper li a {
      font-size: 12px;
      margin-left: 5px;
    }
    .mini-container {
      margin-left: 21px;
    }
    .wrapper .lil_arrow {
      top: -26px;
      right: 15px;
    }
  }
  .burger-wrapper {
    padding: 20px 0;
  }
`;
const StyledBurger = styled.div`
  width: 20px;
  height: 20px;
  position: fixed;
  top: 15px;
  left: 20px;
  z-index: 20;
  display: none;
  position: absolute;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;

  div {
    width: 22px;
    top: 15px;
    left: 21px;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#fff" : "#808080")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const ContentDIV = styled.div`
  width: 100%;
`;

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Accordion4 = () => {
  const titleRef = useRef();
  const [checked, setChecked] = useState(false);
  const [accId, setAccId] = useState(0);
  const [title, setTitle] = useState("");
  const [collapsed, setCollapsed] = useState(true);
  const [open, setOpen] = useState(false);
  console.log(open);
  const executeScroll = () => scrollToRef(titleRef);
  const handleChange = (e, num) => {
    console.log(e.target.checked, num);
    setAccId(num);
    setChecked(e.target.checked);
  };

  console.log(title);

  return (
    <DIV open={open}>
      <div className="d-flex row">
        <div className="col-md-4 col-sm-12 col-xs-12">
          <div className="wrapper">
            <div className="burger-wrapper">
              <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
              </StyledBurger>
            </div>

            <input
              id="ui-ux"
              type="checkbox"
              checked={accId === 1 && checked === true ? true : false}
              onClick={(e) => handleChange(e, 1)}
            />
            <label htmlFor="ui-ux">
              <div className="mini-container">
                <div className="label-icon">
                  <StyledPalette />
                </div>
                <p>UI/UX DESIGN</p>
              </div>

              <div className="lil_arrow"></div>
              <div className="content">
                <ul>
                  <li onClick={() => setTitle("Figma")} name="Figma">
                    <StyledFigma />

                    <a href="#scrollHere">Figma</a>
                  </li>
                  <li onClick={() => setTitle("Sketch")} name="Sketch">
                    <StyledSketch />
                    <a href="#scrollHere">Sketch</a>
                  </li>
                  <li onClick={() => setTitle("Adobe")} name="Adobe">
                    <StyledAdobe />
                    <a href="#scrollHere">Adobe</a>
                  </li>
                  <li onClick={() => setTitle("Invision")} name="Invision">
                    <StyledInvision />
                    <a href="#scrollHere">Invision</a>
                  </li>
                </ul>
              </div>
              <span></span>
            </label>

            <input
              id="frontend"
              type="checkbox"
              checked={accId === 2 && checked === true ? true : false}
              onClick={(e) => handleChange(e, 2)}
            />
            <label htmlFor="frontend">
              <div className="mini-container">
                <div className="label-icon">
                  <StyledLaptopCode />
                </div>
                <p>FRONTEND DEVELOPMENT</p>
              </div>

              <div className="lil_arrow"></div>
              <div className="content">
                <ul>
                  <li onClick={() => setTitle("Html")} name="Html">
                    <StyledHtml />
                    <a href="#scrollHere">Html</a>
                  </li>
                  <li onClick={() => setTitle("Css")} name="CSS">
                    <StyledCss3 />
                    <a href="#scrollHere">CSS</a>
                  </li>
                  <li onClick={() => setTitle("Bootstrap")} name="Bootstrap">
                    <StyledBootstrap />
                    <a href="#scrollHere">Bootstrap</a>
                  </li>
                  <li onClick={() => setTitle("React")} name="React">
                    <StyledReactLogo />
                    <a href="#scrollHere">React</a>
                  </li>
                  <li
                    onClick={() => setTitle("Styled - component")}
                    name="Styled-component"
                  >
                    <StyledStyledcomponents />
                    <a href="#scrollHere">Styled-component</a>
                  </li>
                  <li onClick={() => setTitle("Redux")} name="Redux">
                    <StyledRedux />
                    <a href="#scrollHere">Redux</a>
                  </li>
                  <li onClick={() => setTitle("Next.js")} name="Next.js">
                    <StyledNextdotjs />
                    <a href="#scrollHere">Next</a>
                  </li>
                </ul>
              </div>
              <span></span>
            </label>
            <input
              id="backend"
              type="checkbox"
              checked={accId === 3 && checked === true ? true : false}
              onClick={(e) => handleChange(e, 3)}
            />
            <label htmlFor="backend">
              <div className="mini-container">
                <div className="label-icon">
                  <StyledCog />
                </div>
                <p>BACKEND DEVELOPMENT</p>
              </div>
              <div className="lil_arrow"></div>
              <div className="content">
                <ul>
                  <li onClick={() => setTitle("Node.js")} name="Node.js">
                    <StyledNodejs />
                    <a href="#scrollHere">Node.js</a>
                  </li>
                  <li onClick={() => setTitle("Java")} name="Java">
                    <StyledJava />
                    <a href="#scrollHere">Java</a>
                  </li>
                  <li onClick={() => setTitle("Spring")} name="Spring">
                    <StyledSpringBoot />
                    <a href="#scrollHere">Spring</a>
                  </li>
                  <li onClick={() => setTitle("Python")} name="Python">
                    <StyledPython />
                    <a href="#scrollHere">Python</a>
                  </li>
                </ul>
              </div>
              <span></span>
            </label>
            <input
              id="database"
              type="checkbox"
              checked={accId === 4 && checked === true ? true : false}
              onClick={(e) => handleChange(e, 4)}
            />
            <label htmlFor="database">
              <div className="mini-container">
                <div className="label-icon">
                  <StyledDatabase />
                </div>
                <p>DATABASE</p>
              </div>
              <div className="lil_arrow"></div>
              <div className="content">
                <ul>
                  <li onClick={() => setTitle("PostgreSQL")} name="PostgreSQL">
                    <StyledPostgresql />
                    <a href="#scrollHere">PostgreSQL</a>
                  </li>
                  <li onClick={() => setTitle("MongoDB")} name="MongoDB">
                    <StyledMongodb />
                    <a href="#scrollHere">MongoDB</a>
                  </li>
                </ul>
              </div>
              <span></span>
            </label>
          </div>
        </div>
        <div className="col-md-8 col-sm-12">
          <ContentDIV id="scrollHere" className="col">
            <Accordion4Child title={title} />
          </ContentDIV>
        </div>
      </div>
      {/* 
      <div id="scrollHere" className="col">
        <Accordion4Child title={title} />
      </div> */}
    </DIV>
  );
};

export default Accordion4;
