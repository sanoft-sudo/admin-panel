import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  position: relative;
  /* background-color: #ffdee9; */
  /* background-image: linear-gradient(0deg, #ffdee9 0%, #b5fffc 100%); */
  width: 100%;
  height: 350px;
  scroll-behavior: smooth;
  margin-top: 20px;
  padding-top: 20px;

  .loading {
    /*  Sketeleton Related */
  }
  .loading .skeleton {
    display: inline-block;
    height: 100%;
    width: 100%;
    background: linear-gradient(-90deg, #c1c1c1 0%, #f8f8f8 50%, #c1c1c1 100%);
    background-size: 400% 400%;
    animation: left-to-right 1.2s ease-in-out infinite;
    border-radius: 4px;
    color: transparent;
    position: relative;
    z-index: 2;
  }
  .loading .skeleton:before {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(-90deg, #c1c1c1 0%, #f8f8f8 50%, #c1c1c1 100%);
    background-size: 400% 400%;
    animation: left-to-right 1.2s ease-in-out infinite;
    z-index: 2;
    content: "";
  }
  @keyframes left-to-right {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }

  .container {
    border: 1px solid #ccc;
    width: 50%;
    margin-top: 20px;

    padding: 20px;
  }
  .container .meta-section .thumbnail-image {
    height: 65px;
    width: 65px;
  }
  .thumbnail {
    border-radius: 50%;
    border: 1px solid #ccc;
    overflow: hidden;
  }
  .meta-section {
    display: flex;
    align-items: center;
  }
  .meta-information {
    margin-left: 20px;
  }
  .name {
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 5px;
    width: 100%;
  }
  .designation {
    font-size: 15px;
    font-weight: 500;
    width: 100%;
  }
  .post-section {
    margin-top: 5px;
    width: 100%;
  }
  @media (max-width: 768px) {
    .container {
      width: 80%;
    }
  }
`;

const ComponentLoading = () => {
  return (
    <DIV id="refresh">
      <div className="container loading">
        <div className="meta-section">
          <div className="thumbnail-image skeleton">
            {/* <img
              src="http://gravatar.com/avatar/69c42f71f1bcd895511282fe7bd1b8fb"
              alt="logo"
              width="80"
              className="thumbnail"
            /> */}
          </div>
          <div className="meta-information">
            <div className="name skeleton">Demo User</div>
            <div className="designation skeleton">Software Engineer</div>
            <div className="post-section skeleton">1</div>
          </div>
        </div>
      </div>
      <div className="container loading">
        <div className="meta-section">
          <div className="thumbnail-image skeleton">
            {/* <img
              src="http://gravatar.com/avatar/69c42f71f1bcd895511282fe7bd1b8fb"
              alt="logo"
              width="80"
              className="thumbnail"
            /> */}
          </div>
          <div className="meta-information">
            <div className="name skeleton">Demo User</div>
            <div className="designation skeleton">Software Engineer</div>
            <div className="post-section skeleton">1</div>
          </div>
        </div>
      </div>
    </DIV>
  );
};

export default ComponentLoading;
