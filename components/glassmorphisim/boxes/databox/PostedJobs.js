import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const DIV = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .box {
    position: relative;
    width: 170px;
    max-height: 468px;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    margin: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    transform-style: preserve-3d;
    transform: perspective(800px);
  }
  h2 {
    color: #f5f5f5;
    font-size: 2.5rem;
    text-align: center;
    font-family: "Acme", sans-serif;
  }
  p {
    color: #ccc;
    margin: 20px 10px;
    font-family: "Fira Code", monospace;
  }
  ul {
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 30px 0;
    padding: 10px;
  }

  li {
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
  i {
    color: #ccc;
    font-size: 1.5rem;
    transition: all 0.3s ease;
  }
  li:hover .fa-twitter {
    transform: translate3d(0, -10px, 20px);
    color: #00acee;
  }
  li:hover .fa-github {
    transform: translate3d(0, -10px, 20px);
    color: gray;
  }
  li:hover .fa-linkedin-in {
    transform: translate3d(0, -10px, 20px);
    color: #077099;
  }
  .title {
    color: #fff;
  }
  .description {
    padding: 15px;
  }
`;

const PostedJobs = () => {
  const [data, setData] = useState({
    id: "004",
    label: "Posted jobs",
    number: "680000",
    duration: "2",
  });
  console.log(data);

  const [count, setCount] = useState("0");
  useEffect(() => {
    let start = 0;
    // propsdagi birinchi 3ta raqamlarni olish
    const end = parseInt(data.number.substring(0, 3));
    //agar 0 bolsa
    if (start === end) return;

    //xar oshib borishni hisoblash
    let totalMillSecDuration = parseInt(data.duration);
    let incrementTime = (totalMillSecDuration / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + data.number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [data.number, data.duration]);
  return (
    <DIV>
      <div className="box">
        <div className="description">
          <h3 className="title">{count}</h3>
          <h6 className="title">{data.label}</h6>
        </div>
      </div>
    </DIV>
  );
};

export default PostedJobs;
