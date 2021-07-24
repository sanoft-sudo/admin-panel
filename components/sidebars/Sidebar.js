import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Dashboard } from "@styled-icons/boxicons-solid";
import { Menu3 } from "@styled-icons/icomoon";

const StyledDashboard = styled(Dashboard)`
  width: 20px;
`;
const StyledMenu3 = styled(Menu3)`
  width: 20px;
`;

const StyledBurger = styled.div`
  width: 25px;
  height: 20px;
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 20;
  display: none;
  position: absolute;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;

  div {
    width: 20px;
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

const DIV = styled.div`
  margin: 0;
  padding: 0;
  width: 40px;
  background-color: #0d2538;
  position: fixed;
  height: 100vh;
  overflow: auto;
  width: ${({ open }) => (open ? "220px" : "auto")};
  z-index: 1000;
`;

const UL = styled.ul`
  list-style: none;
  background-color: #0d2538;
  display: inline-block;
  margin-top: 25px;
  padding: 20px 7px;
  /* text-align: center; */
  /* position: relative; */

  li {
    list-style: none;
    height: 39px;
    padding: 5px;
    width: 40px;
    width: ${({ open }) => (open ? "220px" : "40px")};
  }

  svg {
    color: gray;
  }
  li :hover {
    cursor: pointer;
  }
  li :hover svg {
    cursor: pointer;
    fill: white;

    svg:hover {
      fill: white;
    }
  }
  li :hover span {
    cursor: pointer;
    color: white;

    svg:hover {
      fill: white;
    }
  }
  svg:hover & {
    cursor: pointer;
  }
  .navigation-menu {
    .menu-itembox {
      display: flex;
      align-items: center;
    }
  }

  .menu-title {
    width: 0;
    left: 48px;
    height: 1rem;
    padding: 0;
    position: absolute;
    color: gray;

    /* Text properties */
    font-family: "Myriad Pro", Arial, Helvetica, sans-serif;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 0.6px;
    white-space: nowrap;
    line-height: 34px;

    /* CSS3 Transition: */
    transition: 0.25s;
    overflow: ${({ open }) => (open ? "visible" : "hidden")};
  }
  &:hover {
    color: white;
  }
`;

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <DIV>
      <UL id="navigationMenu" open={open}>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
        <li>
          <Link href="/">
            <div className="menu-itembox">
              <StyledDashboard />
              <span className="menu-title">Dashboard</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/menus">
            <div className="menu-itembox">
              <span className="menu-title">Menus</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/inputs">
            <div className="menu-itembox">
              <span className="menu-title">Inputs/Buttons</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/cards">
            <div className="menu-itembox">
              <span className="menu-title">Cards/Avatars</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/carousels">
            <div className="menu-itembox">
              <span className="menu-title">Carousels</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/accardion">
            <div className="menu-itembox">
              <span className="menu-title">Accardions</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/badges">
            <div className="menu-itembox">
              <span className="menu-title">Notifications</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/tables">
            <div className="menu-itembox">
              <span className="menu-title">Tables</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/pages">
            <div className="menu-itembox">
              <span className="menu-title">Pages</span>
            </div>
          </Link>
        </li>
      </UL>
    </DIV>
  );
};

export default Sidebar;
