import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: wrap;

  .hidden {
    visibility: hidden;
    position: absolute;
    width: 0;
    height: 0;
  }

  .burger {
    display: block;
    position: relative;
    width: 3rem;
    height: 3rem;
    border-radius: 3px;
    box-shadow: 0 0 4.1666666667vw rgba(0, 0, 0, 0.25),
      0 0 0.8333333333vw rgba(0, 0, 0, 0.1);
    background-color: var(--color-white);
    margin: 0.5rem;
  }
  .burger span {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: absolute;
    margin: 0.0625rem auto 0.525rem -0.75rem;
    text-indent: -999em;
    top: 50%;
    left: 50%;
    margin-top: -0.0625rem;
    cursor: pointer;
  }
  .burger span,
  .burger span:before,
  .burger span:after {
    display: block;
    width: 1.5rem;
    height: 0.125rem;
    background-color: black;
    transition: 0.3s;
    opacity: 1;
  }
  .burger span:before,
  .burger span:after {
    position: absolute;
    content: "";
  }
  .burger span:before {
    top: -0.525rem;
  }
  .burger span:after {
    top: 0.525rem;
  }

  .burgers {
    display: flex;
  }

  .burger1 input:checked + span:before,
  .burger1 input:checked + span:after {
    top: 0px;
    margin-top: -0.5875rem;
  }
  .burger1 input:checked + span {
    background-color: transparent;
  }
  .burger1 input:checked + span:before {
    transform: translateY(0.525rem) rotate(45deg);
  }
  .burger1 input:checked + span:after {
    transform: translateY(0.525rem) rotate(-45deg);
  }

  .burger2 input:checked + span:before,
  .burger2 input:checked + span:after {
    top: 0px;
    margin-top: -0.5875rem;
  }
  .burger2 input:checked + span {
    background-color: transparent;
  }
  .burger2 input:checked + span:before {
    transform: translateY(0.525rem) rotate(-45deg);
  }
  .burger2 input:checked + span:after {
    transform: translateY(0.525rem) rotate(45deg);
  }

  .burger3 input:checked + span:before,
  .burger3 input:checked + span:after {
    top: 0px;
    margin-top: -0.5875rem;
  }
  .burger3 input:checked + span {
    transform: rotate(-360deg);
    background-color: transparent;
  }
  .burger3 input:checked + span:before {
    transform: translateY(0.525rem) rotate(-45deg);
  }
  .burger3 input:checked + span:after {
    transform: translateY(0.525rem) rotate(45deg);
  }

  .burger4 input:checked + span:before,
  .burger4 input:checked + span:after {
    top: 0px;
    margin-top: -0.5875rem;
  }
  .burger4 input:checked + span {
    -webkit-animation: menuCloseMiddle--base 0.5s forwards;
    animation: menuCloseMiddle--base 0.5s forwards;
  }
  .burger4 input:checked + span:before {
    -webkit-animation: menuCloseMiddle--before 0.5s forwards;
    animation: menuCloseMiddle--before 0.5s forwards;
  }
  .burger4 input:checked + span:after {
    -webkit-animation: menuCloseMiddle--after 0.5s forwards;
    animation: menuCloseMiddle--after 0.5s forwards;
  }
  @-webkit-keyframes menuCloseMiddle--base {
    0% {
      background-color: black;
    }
    80% {
      background-color: black;
    }
    100% {
      background-color: rgba(0, 0, 0, 0);
    }
  }
  @keyframes menuCloseMiddle--base {
    0% {
      background-color: black;
    }
    80% {
      background-color: black;
    }
    100% {
      background-color: rgba(0, 0, 0, 0);
    }
  }
  @-webkit-keyframes menuCloseMiddle--after {
    0% {
      transform: translateY(0) rotate(0);
    }
    80% {
      transform: translateY(0.525rem) rotate(0);
    }
    100% {
      transform: translateY(0.525rem) rotate(45deg);
    }
  }
  @keyframes menuCloseMiddle--after {
    0% {
      transform: translateY(0) rotate(0);
    }
    80% {
      transform: translateY(0.525rem) rotate(0);
    }
    100% {
      transform: translateY(0.525rem) rotate(45deg);
    }
  }
  @-webkit-keyframes menuCloseMiddle--before {
    0% {
      transform: translateY(0) rotate(0);
    }
    80% {
      transform: translateY(0.525rem) rotate(0);
    }
    100% {
      transform: translateY(0.525rem) rotate(-45deg);
    }
  }
  @keyframes menuCloseMiddle--before {
    0% {
      transform: translateY(0) rotate(0);
    }
    80% {
      transform: translateY(0.525rem) rotate(0);
    }
    100% {
      transform: translateY(0.525rem) rotate(-45deg);
    }
  }

  .description {
    width: 100%;
    text-align: center;
    color: rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 500px) {
    .burger {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

const BurgerButton = () => {
  return (
    <DIV>
      <div className="burgers">
        <label className="burger burger1" htmlFor="burger1">
          <input className="hidden" id="burger1" type="checkbox" />
          <span></span>
        </label>
        <label className="burger burger2" htmlFor="burger2">
          <input className="hidden" id="burger2" type="checkbox" />
          <span></span>
        </label>
        <label className="burger burger3" htmlFor="burger3">
          <input className="hidden" id="burger3" type="checkbox" />
          <span></span>
        </label>
        <label className="burger burger4" htmlFor="burger4">
          <input className="hidden" id="burger4" type="checkbox" />
          <span></span>
        </label>
      </div>
    </DIV>
  );
};

export default BurgerButton;
