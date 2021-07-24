import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  margin-top: 20px;
  /* background: linear-gradient(45deg, #fc466b, #3f5efb); */
  /* height: 100%; */
  width: 100%;
  font-family: "Montserrat", sans-serif;
  position: relative;

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 1.5rem;
  }
  .container .card {
    background: rgba(255, 255, 255, 0.3);
    height: auto;
    width: auto;
    margin: 12px;
    border-radius: 5px;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
    text-align: center;
    position: relative;
    transition: all 0.2s ease-in-out;
    overflow: hidden;
    /* background-color: #fff;
    height: auto;
    width: auto;
    overflow: hidden;
    margin: 12px;
    border-radius: 5px;
    box-shadow: 9px 17px 45px -29px rgba(0, 0, 0, 0.44); */
  }
  .container .card__image img {
    width: 100%;
    height: 100%;
  }
  .container .card__image.loading {
    height: 300px;
    width: 400px;
  }
  .container .card__title {
    padding: 8px;
    font-size: 22px;
    font-weight: 700;
  }
  .card__image,
  .card__title,
  .card__description {
    /* background-color: gray; */
    overflow: hidden;
  }
  .card__title,
  .card__description {
    /* background-color: gray; */
    color: #fff;
  }
  .container .card__title.loading {
    height: 1rem;
    width: 50%;
    margin: 1rem;
    border-radius: 3px;
  }
  .container .card__description {
    padding: 8px;
    font-size: 16px;
  }
  .container .card__description.loading {
    height: 3rem;
    margin: 1rem;
    border-radius: 3px;
  }

  .loading {
    position: relative;
    background-color: #e8e8e8;
  }
  .loading::after {
    display: block;
    content: "";
    position: absolute;
    top: -1px;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      transparent,
      rgba(7, 7, 7, 0.1),
      transparent
    );
    animation: loading 0.8s infinite;
  }

  @keyframes loading {
    100% {
      transform: translateX(100%);
    }
  }
`;

let titles = [];
let descriptions = [];
let images = [];

function removeLoading() {
  if (typeof window !== "undefined") {
    titles = document.querySelectorAll(".card__title");
    descriptions = document.querySelectorAll(".card__description");
    images = document.querySelectorAll(".card__image");
  }
  // Setting titles
  titles?.forEach((title, i) => {
    title.classList.remove("loading");
    title.textContent = "Heading " + (i + 1);
  });

  //   Setting description
  descriptions?.forEach((desc) => {
    desc.classList.remove("loading");
    desc.textContent =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.";
  });

  //   Setting images
  images?.forEach((img, i) => {
    img.classList.remove("loading");
    img.innerHTML = `<img src="https://picsum.photos/400/300?t=${i}" />`;
  });
}
setTimeout(() => {
  removeLoading();
}, 5000);
// After 3 seconds content gets displayed

const Loading8 = () => {
  return (
    <DIV>
      <div className="container">
        <div className="card">
          <div className="card__image loading"></div>
          <div className="loading card__title"></div>
          <div className="loading card__description"></div>
        </div>
        <div className="card">
          <div className="card__image loading"></div>
          <div className="card__title loading"></div>
          <div className="card__description loading"></div>
        </div>
        <div className="card">
          <div className="card__image loading"></div>
          <div className="card__title loading"></div>
          <div className="card__description loading"></div>
        </div>
      </div>
    </DIV>
  );
};

export default Loading8;
