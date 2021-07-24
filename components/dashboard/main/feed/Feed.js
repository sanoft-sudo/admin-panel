import React, { useState } from "react";
import styled from "styled-components";
import moment from 'moment';
import ReactPlayer from "react-player";
import {Image } from "@styled-icons/boxicons-regular";
import {PlayVideo } from "@styled-icons/foundation";
import {Location } from "@styled-icons/evil";

const StyledImage = styled(Image)`
width:20px;
height: 20px;
color: red;
  position: absolute;
      bottom:0px;
      right:0px;
`;
const StyledPlayVideo = styled(PlayVideo)`
width:20px;
height: 20px;
color: red;
  position: absolute;
      bottom:0px;
      right:0px;
`;
const StyledMapMarkedAlt = styled(Location)`
width:20px;
height: 20px;
color: red;
  position: absolute;
      bottom:0px;
      right:0px;
`;

const DIV = styled.div`
  /* background: rgba( 54, 72, 89, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 ); */
  /* display: flex; */
  padding: 10px;
  align-items: center;
  justify-content: center;
  /* perspective: 900; */

  width:100%;
  .accordion-menu {
    display: inline-block;
    position: relative;
    /* left: 50%; */
    left:0;
    /* transform: translate(-50%, 0); */
    /* max-width: 370px; */
    width: 100%;
    height:400px;
    overflow-y: scroll;
    /* padding: 10px 20px 20px; */
    border-radius: 5px;
     -webkit-scrollbar {
  width: 10px;
}

/* Track */
-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px grey; 
  border-radius: 10px;
}
 
/* Handle */
-webkit-scrollbar-thumb {
  background: red; 
  border-radius: 10px;
}

/* Handle on hover */
-webkit-scrollbar-thumb:hover {
  background: #b30000; 
}
  }

  .header-pleft h2 {
    font-size: 16px;
    line-height: 34px;
    font-weight: 500;
    letter-spacing: 1px;
    display: block;
    margin: 0;
    cursor: pointer;
    color: #6c6c6a;
    text-transform: uppercase;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 15px;
    line-height: 15px;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
    max-height: 800px;
    opacity: 1;
    transform: translate(0, 0);
    margin-top: 14px;
    z-index: 2;
  }

  ul {
    list-style: none;
  }
  ul li {
    cursor: pointer;
     border-bottom: 1px solid rgba(0,0,0,0.12);
  }

  ul.first {
    list-style: none;
    perspective: 900;
    padding: 0 20px 10px;
    margin: 0;
    /* border-radius: 5px; */
    /* background: rgba(54, 72, 89, 0.3); */
    height: 100%;
    /* border-left: 1px solid rgba(54, 72, 89, 0.3); */
    /* border-top: 1px solid rgba(54, 72, 89, 0.3); */
    /* -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
        border-bottom: 1px solid rgba(0,0,0,0.12); */

  }

  ul li {
    position: relative;
    padding: 0;
    margin: 0;
    padding-bottom: 4px;
    padding-top: 4px;
        border-bottom: 1px solid rgba(0,0,0,0.12);

  }

  ul li:nth-child(1) {
        border-bottom: 1px solid rgba(0,0,0,0.12);

  }

  ul li:nth-of-type(1) {
    animation-delay: 0.5s;
    
  }

  ul li:nth-of-type(2) {
    animation-delay: 0.75s;
  }

  ul li:nth-of-type(3) {
    animation-delay: 1s;
  }
  ul li:nth-of-type(4) {
    animation-delay: 1.25s;
  }
  ul li:nth-of-type(5) {
    animation-delay: 1.5s;
  }
  ul li:nth-of-type(6) {
    animation-delay: 1.75s;
  }
  ul li:nth-of-type(7) {
    animation-delay: 2s;
  }
  ul li:nth-of-type(8) {
    animation-delay: 2.25s;
  }

  ul li:last-of-type {
    padding-bottom: 0;
  }

  ul li:nth-child(1) {
    border: none;
  }

  p ul li:nth-of-type(1) {
    animation-delay: 0.5s;
  }

  p ul li:nth-of-type(2) {
    animation-delay: 0.75s;
  }

  p ul li:nth-of-type(3) {
    animation-delay: 1s;
  }
  p ul li:nth-of-type(4) {
    animation-delay: 1.25s;
  }
  p ul li:nth-of-type(5) {
    animation-delay: 1.5s;
  }
  p ul li:nth-of-type(6) {
    animation-delay: 1.75s;
  }
  p ul li:nth-of-type(7) {
    animation-delay: 2s;
  }
  p ul li:nth-of-type(8) {
    animation-delay: 2.25s;
  }

  ul li .arrow {
    position: absolute;
    transform: translate(-6px, 0);
    margin-top: 12px;
    right: 0;
  }

  ul li .fas {
    color: #f6483b;
    font-size: 15px;
    margin-right: 10px;
  }

  ul li .arrow:before,
  ul li .arrow:after {
    content: "";
    position: absolute;
    background-color: #d514db;
    width: 3px;
    height: 9px;
  }

  ul li .arrow:before {
    transform: translate(-2px, 0) rotate(45deg);
  }

  ul li .arrow:after {
    transform: translate(2px, 0) rotate(-45deg);
  }

  ul li input[type="checkbox"] {
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
  }

  ul li input[type="checkbox"]:checked ~ p {
    margin-top: 0;
    max-height: 0;
    opacity: 0;
    transform: translate(0, 50%);
  }
  ul li input[type="checkbox"]:checked ~ .header-pleft h2 {
    color: #d514db;
  }

  ul li input[type="checkbox"]:checked ~ .arrow:before {
    transform: translate(2px, 0) rotate(45deg);
  }

  ul li input[type="checkbox"]:checked ~ .arrow:after {
    transform: translate(-2px, 0) rotate(-45deg);
  }

  .transition,
  p,
  ul li .arrow:before,
  ul li .arrow:after {
    transition: all 0.25s ease-in-out;
  }

  .flipIn,
  h1,
  ul li {
    animation: flipdown 0.5s ease both;
  }
  .flipIn,
  p ul li {
    animation: flipup 0.5s ease both;
  }

  .no-select,
  h2 {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    user-select: none;
  }
  .post-title{
font-size: 14px;
margin-bottom: 0;

  }
  .post-content{
font-size: 12px;

  }
  .post-header{
      display: flex;
      align-items: center;
  }
  .header-pleft{
      width:80%;
      padding-left:10px;
  }
  .avatar-box{
      width:60px !important;
      height:60px !important;
      object-fit: contain;
      position: relative;
  }
  .avatar-box img{
      width:60px !important;
      height:60px !important;
      object-fit: fill;
      border-radius: 100%;
  }
  .header-firstline{
      display: flex;
      justify-content: space-between;
      align-items: baseline;
  }
  .header-firstline span{
      color: #fff;
      font-size:11px;
  }
  .content-image img{
      width:336px;
      height:240px;
      
      
  }
  .shared-icon{
      position: absolute;
      border-radius: 50%;
      bottom:-8px;
      right:-5px;
      width:22px;
      height:22px;
      background: rgba( 14, 255, 0, 0.5 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border: 1px solid rgba( 255, 255, 255, 0.18 );
  }
  


 

  @keyframes flipdown {
    0% {
      opacity: 0;
      transform-origin: top center;
      transform: rotateX(-90deg);
    }

    5% {
      opacity: 1;
    }

    80% {
      transform: rotateX(8deg);
    }

    83% {
      transform: rotateX(6deg);
    }

    92% {
      transform: rotateX(-3deg);
    }

    100% {
      transform-origin: top center;
      transform: rotateX(0deg);
    }
  }
  @keyframes flipup {
    0% {
      opacity: 0;
      transform-origin: bottom center;
      transform: rotateX(-90deg);
    }

    5% {
      opacity: 1;
    }

    80% {
      transform: rotateX(8deg);
    }

    83% {
      transform: rotateX(6deg);
    }

    92% {
      transform: rotateX(-3deg);
    }

    100% {
      transform-origin: top center;
      transform: rotateX(0deg);
    }
  }

  @media (max-width: 413px) {
    .accordion-menu {
      padding: 0;
    }
    h2 {
      font-size: 12px;
    }
  }
  @media (min-width: 414px) and (max-width: 433px) {
    .accordion-menu {
      padding: 0;
    }
    h2 {
      font-size: 13px;
    }
  }
`;
const data = [
    {
        "userId": 'user1',
        "id": 1,
        "avatar": <img src="./images/user1.jpg" />,
        "username": "Sanjar Juraev",
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "shared": "text",
        "created_at":[2021, 6, 9]
    },
      {
        "userId": 'user2',
        "id": 2,
        "avatar": <img src="./images/user2.jpg" />,
        "username": "Sanjar Juraev",
        "title": "qui est esse",
        "body": "https://goo.gl/maps/SqNoUCWBaYdaAVEN7",
        "bodyimg": <img src="/images/map.jpg" />,
        "shared": "location",
        "created_at":[2021, 6, 9]
      },
      {
        "userId": 'user3',
        "id": 3,
        "avatar": <img src="./images/user3.jpg" />,
        "username": "Sanjar Juraev",
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "It is rain again here... ",
        "bodyimg": <img src="/images/rain.jpg" />,
        "shared": "image",
        "created_at":[2021, 6, 7]
      },
      {
        "userId": 'user4',
        "id": 4,
        "avatar": <img src="./images/user4.jpg" />,
        "username": "Random User",
        "title": "eum et est occaecati",
        "body": "this is cool video",
        "bodyvid": "https://www.youtube.com/watch?v=ybji16u608U",
        "shared": "video",
        "created_at":[2021, 6, 5]
      },
      {
        "userId": 'user5',
        "id": 5,
        "avatar": <img src="./images/user5.jpg" />,
        "username": "Random User",
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        "shared": "text",
        "created_at":[2021, 6, 1]
      },
      {
        "userId": 'user6',
        "id": 6,
        "avatar": <img src="./images/user6.jpg" />,
        "username": "Random User",
        "title": "dolorem eum magni eos aperiam quia",
        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
        "shared": "text",
        "created_at":[2021, 5, 30]
      },
      {
        "userId": 'user7',
        "id": 7,
        "avatar": <img src="./images/user7.jpg" />,
        "username": "Random User",
        "title": "magnam facilis autem",
        "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
        "shared": "text",
        "created_at":[2021, 5, 21]
      },
      {
        "userId": 'user8',
        "id": 8,
        "avatar": <img src="./images/user8.jpg" />,
        "username": "Random User",
        "title": "dolorem dolore est ipsam",
        "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
        "shared": "text",
        "created_at":[2021, 4, 6]
      },
      
];

const Feed = () => {
  const [checkedState, setCheckedState] = useState(
    new Array(data.length).fill(true)
);

  const handleCheck = (position) => {
   const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };
  console.log(">>>>>",checkedState);

  return (
    <DIV>
      <div className="accordion-menu">
        <ul className="first">
            {data.map((user, index) =>{
                return (
                     <li style={{borderBottom:"1px solid rgba(0,0,0,0.12)"}}>
            <input type="checkbox" id={`checkbox-${index}`}  name={user.userId} checked={checkedState[index]} onChange={() => handleCheck(index)} />
            {/* <i className="arrow"></i> */}
            <div className="post-header">
                <div className="avatar-box">
                    {user.avatar}
                    {user.shared ==='location' ? <div className="shared-icon">
                        <StyledMapMarkedAlt />
                    </div> : user.shared ==='image' ? <div className="shared-icon">
                        <StyledImage />
                    </div> : user.shared ==='video' ? <div className="shared-icon">
                        <StyledPlayVideo />
                    </div> :"" }
                </div>
                <div className="header-pleft">
                    <div className="header-firstline">
                       <h2>{user.username}</h2> 
                       <span>{moment(user.created_at).fromNow()}</span>
                    </div>
                     
                <h5 className="post-title">{user.title}</h5>
                </div>
                
            </div>
           
            <p>
              <ul>
                  {user.shared==='image' ? <li className="post-content">{user.body} 
                  <div className="content-image">{user.bodyimg}</div>
                  
                  </li>
                   : user.shared==='video' ? <li className="post-content">{user.body}
                   <div className="content-image">
                       <ReactPlayer width="336px" height='240px' url={user.bodyvid} />
                   </div>
                   </li> : user.shared==='location' ? <li className="post-content">{user.body}
                   <div className="content-image">{user.bodyimg}</div>
                   
                   </li> : <li className="post-content">{user.body}</li>
                  }
                
              </ul>
            </p>
          </li>
                )
            })}
         
        </ul>
      </div>
    </DIV>
  );
};

export default Feed;
