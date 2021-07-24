import React, { useRef, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dashboard, Carousel } from "@styled-icons/boxicons-solid";
import { Menu3 } from "@styled-icons/icomoon";
import { Uikit } from "@styled-icons/fa-brands";
import { SignInAlt, UnlockAlt } from "@styled-icons/fa-solid";
import {
  DynamicForm,
  NotificationsActive,
} from "@styled-icons/material-outlined";
import { LoaderOutline } from "@styled-icons/evaicons-outline";
import {
  Table,
  InputCursor,
  CardHeading,
  MenuButtonWide,
} from "@styled-icons/bootstrap";
import { Pages, SmartButton, ErrorOutline } from "@styled-icons/material";
import { MailSend, Reset } from "@styled-icons/boxicons-regular";
import { ProgressOne } from "@styled-icons/entypo";
import { TableSimple } from "@styled-icons/fluentui-system-filled";
import { TableEdit } from "@styled-icons/fluentui-system-regular";
import { Wpforms } from "@styled-icons/fa-brands";
import { FormNew } from "@styled-icons/fluentui-system-regular";

const StyledWpforms = styled(Wpforms)`
  width: 20px;
  height: 20px;
`;
const StyledFormNew = styled(FormNew)`
  width: 20px;
  height: 20px;
`;
const StyledTableSimple = styled(TableSimple)`
  width: 20px;
  height: 20px;
`;
const StyledTableEdit = styled(TableEdit)`
  width: 20px;
  height: 20px;
`;
const StyledProgressOne = styled(ProgressOne)`
  width: 20px;
  height: 20px;
`;
const StyledReset = styled(Reset)`
  width: 20px;
  height: 20px;
`;
const StyledNotificationActive = styled(NotificationsActive)`
  width: 20px;
  height: 20px;
`;
const StyledMailSend = styled(MailSend)`
  width: 20px;
  height: 20px;
`;
const StyledSignInAlt = styled(SignInAlt)`
  width: 18px;
  height: 18px;
`;
const StyledUnlockAlt = styled(UnlockAlt)`
  width: 17px;
  height: 17px;
`;
const StyledLoaderOutline = styled(LoaderOutline)`
  width: 20px;
  height: 20px;
`;
const StyledErrorOutline = styled(ErrorOutline)`
  width: 20px;
  height: 20px;
`;
const StyledDashboard = styled(Dashboard)`
  width: 20px;
  height: 20px;
`;
const StyledUiKit = styled(Uikit)`
  width: 20px;
  height: 20px;
`;
const StyledFormElements = styled(DynamicForm)`
  width: 20px;
  height: 20px;
`;
const StyledTables = styled(Table)`
  width: 18px;
  height: 18px;
`;
const StyledPages = styled(Pages)`
  width: 20px;
  height: 20px;
`;
const StyledMenu3 = styled(Menu3)`
  width: 20px;
  height: 20px;
`;
const StyledCarousel = styled(Carousel)`
  width: 20px;
  height: 20px;
`;
const StyledInputCursor = styled(InputCursor)`
  width: 20px;
  height: 20px;
`;
const StyledCardHeading = styled(CardHeading)`
  width: 20px;
  height: 20px;
`;
const StyledMenuButtonWide = styled(MenuButtonWide)`
  width: 20px;
  height: 20px;
`;
const StyledSmartButton = styled(SmartButton)`
  width: 23px;
  height: 23px;
`;

const DIV = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Oswald");
  display: flex;
  width: ${({ open }) => (open ? "255px" : "70px")};
  /* padding: 10px; */
  position: fixed;
  /* /* top: 0; */
  left: 0;
  z-index: 30;
  /* Variables */
  /* Styles */

  .wrapper {
    width: ${({ open }) => (open ? "255px" : "70px")};
    transition: width 0.25s;
    height: auto;
    margin: 0;
    background: rgba(0, 0, 0, 0.75);
    /* width: 100%; */
    border-bottom-right-radius: 4px;
    position: relative;
    top: -2%;
    left: -2%;
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
    line-height: 1rem;
  }
  .wrapper
    input[type="checkbox"]:checked
    + label
    > .mini-container
    > .label-icon {
    color: #209e91;
  }
  .wrapper input[type="checkbox"]:checked + label p {
    color: #209e91;
  }
  .wrapper li a {
    display: ${({ open }) => (open ? "block" : "none")};
    opacity: ${({ open }) => (open ? 1 : 0)};
    transition: opacity 3s ease-in-out;
    width: 100%;
    margin-left: 7px;
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
    /* transition: display 0.5s ease-in-out;  */
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
    background: rgba(0, 0, 0, 0.75);
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
  /* .wrapper input[type="checkbox"]:checked + label:nth-of-type(1) {
    background: #415970 !important;
    color: #fff;
    height: 282px;
    transition: height 1s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  } */
  .wrapper input[type="checkbox"]:checked + label:nth-of-type(2) {
    background: #415970 !important;
    color: #fff;
    height: 512px;
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
  .wrapper input[type="checkbox"]:checked + label:nth-of-type(5) {
    background: #415970 !important;
    color: #fff;
    height: 400px;
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
  .content ul li.active,
  .content ul li.active a {
    color: #209e91;
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

const MainNavbar = () => {
  const router = useRouter();
  const titleRef = useRef();
  const [checked, setChecked] = useState(false);
  const [accId, setAccId] = useState(0);
  const [title, setTitle] = useState("");
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
      <div className="wrapper">
        <div className="burger-wrapper">
          <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
          </StyledBurger>
        </div>

        <input
          id="dashboard"
          type="checkbox"
          defaultChecked={accId === 1 && checked === true ? true : false}
          onClick={(e) => handleChange(e, 1)}
        />
        <label htmlFor="dashboard">
          <Link href="/">
            <div className="mini-container">
              <div className="label-icon">
                <StyledDashboard />
              </div>
              <p>Dashboard</p>
            </div>
          </Link>

          <span></span>
        </label>

        <input
          id="uiElements"
          type="checkbox"
          defaultChecked={accId === 2 && checked === true ? true : false}
          onClick={(e) => handleChange(e, 2)}
        />
        <label htmlFor="uiElements">
          <div className="mini-container">
            <div className="label-icon">
              <StyledUiKit />
            </div>
            <p>UI Features</p>
          </div>

          <div className="lil_arrow"></div>
          <div className="content">
            <ul>
              <Link href="/menus">
                <li className={router.pathname == "/menus" ? "active" : ""}>
                  <StyledMenu3 />
                  <a>Munes</a>
                </li>
              </Link>
              <Link href="/inputs">
                <li className={router.pathname == "/inputs" ? "active" : ""}>
                  <StyledInputCursor />
                  <a>Inputs</a>
                </li>
              </Link>
              <Link href="/buttons">
                <li className={router.pathname == "/buttons" ? "active" : ""}>
                  <StyledSmartButton />
                  <a>Buttons</a>
                </li>
              </Link>
              <Link href="/cards">
                <li className={router.pathname == "/cards" ? "active" : ""}>
                  <StyledCardHeading />
                  <a>Cards</a>
                </li>
              </Link>
              <Link href="/accardion">
                <li className={router.pathname == "/accardion" ? "active" : ""}>
                  <StyledMenuButtonWide />
                  <a>Accordion</a>
                </li>
              </Link>
              <Link href="/carousels">
                <li className={router.pathname == "/carousels" ? "active" : ""}>
                  <StyledCarousel />
                  <a>Carousel</a>
                </li>
              </Link>
              <Link href="/notification">
                <li
                  className={router.pathname == "/notification" ? "active" : ""}
                >
                  <StyledNotificationActive />
                  <a>Notification</a>
                </li>
              </Link>
              <Link href="/progressbars">
                <li
                  className={router.pathname == "/progressbars" ? "active" : ""}
                >
                  <StyledProgressOne />
                  <a>Progress bars</a>
                </li>
              </Link>
            </ul>
          </div>
          <span></span>
        </label>
        <input
          id="formElements"
          type="checkbox"
          defaultChecked={accId === 3 && checked === true ? true : false}
          onClick={(e) => handleChange(e, 3)}
        />
        <label htmlFor="formElements">
          <div className="mini-container">
            <div className="label-icon">
              <StyledFormElements />
            </div>
            <p>Form elements</p>
          </div>
          <div className="lil_arrow"></div>
          <div className="content">
            <ul>
              <Link href="/forminputs">
                <li
                  className={router.pathname == "/forminputs" ? "active" : ""}
                >
                  <StyledWpforms />
                  <a>Form Inputs</a>
                </li>
              </Link>
              <Link href="/formlayouts">
                <li
                  className={router.pathname == "/formlayouts" ? "active" : ""}
                >
                  <StyledFormElements />
                  <a>Form Layouts</a>
                </li>
              </Link>
              <Link href="/formwizard">
                <li
                  className={router.pathname == "/formwizard" ? "active" : ""}
                >
                  <StyledFormNew />
                  <a>Form Wizard</a>
                </li>
              </Link>
            </ul>
          </div>
          <span></span>
        </label>
        <input
          id="tables"
          type="checkbox"
          defaultChecked={accId === 4 && checked === true ? true : false}
          onClick={(e) => handleChange(e, 4)}
        />
        <label htmlFor="tables">
          <div className="mini-container">
            <div className="label-icon">
              <StyledTables />
            </div>
            <p>Tables</p>
          </div>
          <div className="lil_arrow"></div>
          <div className="content">
            <ul>
              <Link href="/bacistables">
                <li
                  className={router.pathname == "/bacistables" ? "active" : ""}
                >
                  <StyledTableSimple />
                  <a>Basic tables</a>
                </li>
              </Link>
              <Link href="/smarttables">
                <li
                  className={router.pathname == "/smarttables" ? "active" : ""}
                >
                  <StyledTableEdit />
                  <a>Smart tables</a>
                </li>
              </Link>
            </ul>
          </div>
          <span></span>
        </label>
        <input
          id="pageEx"
          type="checkbox"
          defaultChecked={accId === 5 && checked === true ? true : false}
          onClick={(e) => handleChange(e, 5)}
        />
        <label htmlFor="pageEx">
          <div className="mini-container">
            <div className="label-icon">
              <StyledPages />
            </div>
            <p>Pages</p>
          </div>
          <div className="lil_arrow"></div>
          <div className="content">
            <ul>
              <Link href="/signin">
                <li className={router.pathname == "/signin" ? "active" : ""}>
                  <StyledSignInAlt />
                  <a>Sign In</a>
                </li>
              </Link>
              <Link href="/signup">
                <li className={router.pathname == "/signup" ? "active" : ""}>
                  <StyledUnlockAlt />
                  <a>Sign up</a>
                </li>
              </Link>
              <Link href="/sendrequestlink">
                <li
                  className={
                    router.pathname == "/sendrequestlink" ? "active" : ""
                  }
                >
                  <StyledMailSend />
                  <a>Send request link</a>
                </li>
              </Link>
              <Link href="/resetpassword">
                <li
                  className={
                    router.pathname == "/resetpassword" ? "active" : ""
                  }
                >
                  <StyledReset />
                  <a>Password reset</a>
                </li>
              </Link>
              <Link href="/loading">
                <li className={router.pathname == "/loading" ? "active" : ""}>
                  <StyledLoaderOutline />
                  <a>Loading</a>
                </li>
              </Link>
              <Link href="/errors">
                <li className={router.pathname == "/errors" ? "active" : ""}>
                  <StyledErrorOutline />
                  <a>Error</a>
                </li>
              </Link>
            </ul>
          </div>
          <span></span>
        </label>
      </div>
    </DIV>
  );
};

export default MainNavbar;
