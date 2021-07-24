import React from 'react';
import styled from "styled-components";

const DIV = styled.div`



.effect-10,
.effect-11,
.effect-12,
.effect-13,
.effect-14,
.effect-15 {
  border: 0;
  padding: 7px 15px;
  border: 1px solid #ccc;
  position: relative;
  background: transparent;
}

.effect-10 ~ .focus-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #ededed;
  opacity: 0;
  transition: 0.5s;
  z-index: -1;
}
.effect-10:focus ~ .focus-bg {
  transition: 0.5s;
  opacity: 1;
}

.effect-11 ~ .focus-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #ededed;
  transition: 0.3s;
  z-index: -1;
}
.effect-11:focus ~ .focus-bg {
  transition: 0.3s;
  width: 100%;
}

.effect-12 ~ .focus-bg {
  position: absolute;
  left: 50%;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #ededed;
  transition: 0.3s;
  z-index: -1;
}
.effect-12:focus ~ .focus-bg {
  transition: 0.3s;
  width: 100%;
  left: 0;
}

.effect-13 ~ .focus-bg:before,
.effect-13 ~ .focus-bg:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #ededed;
  transition: 0.3s;
  z-index: -1;
}
.effect-13:focus ~ .focus-bg:before {
  transition: 0.3s;
  width: 50%;
}
.effect-13 ~ .focus-bg:after {
  left: auto;
  right: 0;
}
.effect-13:focus ~ .focus-bg:after {
  transition: 0.3s;
  width: 50%;
}

.effect-14 ~ .focus-bg:before,
.effect-14 ~ .focus-bg:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  background-color: #ededed;
  transition: 0.3s;
  z-index: -1;
}
.effect-14:focus ~ .focus-bg:before {
  transition: 0.3s;
  width: 50%;
  height: 100%;
}
.effect-14 ~ .focus-bg:after {
  left: auto;
  right: 0;
  top: auto;
  bottom: 0;
}
.effect-14:focus ~ .focus-bg:after {
  transition: 0.3s;
  width: 50%;
  height: 100%;
}

.effect-15 ~ .focus-bg:before,
.effect-15 ~ .focus-bg:after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0;
  height: 0;
  background-color: #ededed;
  transition: 0.3s;
  z-index: -1;
}
.effect-15:focus ~ .focus-bg:before {
  transition: 0.3s;
  width: 50%;
  left: 0;
  top: 0;
  height: 100%;
}
.effect-15 ~ .focus-bg:after {
  left: auto;
  right: 50%;
  top: auto;
  bottom: 50%;
}
.effect-15:focus ~ .focus-bg:after {
  transition: 0.3s;
  width: 50%;
  height: 100%;
  bottom: 0;
  right: 0;
}

input[type="text"] {
    font: 15px/24px "Muli", sans-serif;
    color: #fff;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
  }
  
 input[type="text"] :focus {
    outline: none;
  }
  
  .col-md-3 {
    float: left;
    width: 27.33%;
    margin: 40px 3%;
    position: relative;
    padding-left: 0;
    padding-right: 0;
  }
  @media (max-width: 600px) {
    .col-md-3 {
    float: left;
    width: 95%;
    margin: 20px 3%;
    position: relative;
    padding-left: 0;
    padding-right: 0;
  }
  }
  @media (min-width: 600px) and ( max-width: 768px) {
    .col-md-3 {
    float: left;
    width: 43.99%;
    margin: 20px 3%;
    position: relative;
    padding-left: 0;
    padding-right: 0;
  }
  }
  
  
  /* necessary to give position: relative to parent. */
  input[type="text"] {
    font: 15px/24px "Lato", Arial, sans-serif;
    color: #333;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
  }
  



`

function InputBackgroudEffects() {
    return (
        <DIV>
            <div className="col-md-3">
                <input className="effect-10" type="text" placeholder="Placeholder Text" />
                <span className="focus-bg"></span>
            </div>
            <div className="col-md-3">
                <input className="effect-11" type="text" placeholder="Placeholder Text" />
                <span className="focus-bg"></span>
            </div>
            <div className="col-md-3">
                <input className="effect-12" type="text" placeholder="Placeholder Text" />
                <span className="focus-bg"></span>
            </div>
       
            <div className="col-md-3">
                <input className="effect-13" type="text" placeholder="Placeholder Text" />
                <span className="focus-bg"></span>
            </div>
            <div className="col-md-3">
                <input className="effect-14" type="text" placeholder="Placeholder Text" />
                <span className="focus-bg"></span>
            </div>
            <div className="col-md-3">
                <input className="effect-15" type="text" placeholder="Placeholder Text" />
                <span className="focus-bg"></span>
            </div>
        
        </DIV>
    )
}

export default InputBackgroudEffects
