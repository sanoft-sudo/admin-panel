import React from "react";
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

  .wrapper {
    width: 100%;
    height: 70%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-image: url("./images/mountain.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .wrapper .box {
    position: relative;
    width: 280px;
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
`;

const BoxExamples = () => {
  return (
    <DIV>
      <div className="wrapper">
        <div className="box">
          <div className="description">
            <h2>Box 1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A sunt
              rem magni quasi tempore alias nostrum mollitia delectus cupiditate
              hic unde minima quis officiis, quidem quae quisquam, aperiam porro
              fugiat?
            </p>
            <ul className="list">
              <li>
                <a
                  href="https://twitter.com/SanjarJuraev2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/sanoft-sudo">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sanjar-juraev-7862671b3/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="box">
          <div className="description">
            <h2>Box 2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A sunt
              rem magni quasi tempore alias nostrum mollitia delectus cupiditate
              hic unde minima quis officiis, quidem quae quisquam, aperiam porro
              fugiat?
            </p>
            <ul className="list">
              <li>
                <a
                  href="https://twitter.com/SanjarJuraev2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/sanoft-sudo">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sanjar-juraev-7862671b3/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DIV>
  );
};

export default BoxExamples;
