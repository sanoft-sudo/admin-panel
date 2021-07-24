import React, {useState} from 'react';
import styled from 'styled-components';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Timer from "./Timer";
const DIV = styled.div`

position: relative;

.carousel-status {
  display: none;
}
.thumbs {
  display: none;
}

.timer-wrapper {
    right:1.5%;
    bottom:71%;
    position: absolute;
    z-index: 9999;
}

.timer {
  font-family: "Montserrat";
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;


}

.value {
  font-size: 20px;
}
.myTimer {
  width: 20px ;
  height: 20px ;
  position: absolute;
  right:400px;
    bottom:300px;
 
}

.carousel .control-dots {
  bottom: 73% ;
  right: -95% ;
  display: flex ;
  flex-direction: column ;
}

.carousel .control-dots .dot{
  margin: 2px 8px ;
  background: #ff8d00;
  box-shadow: -1px 0px 1px rgb (0 0 0 / 80%);
}
@media (max-width: 500px){
  .carousel .control-dots {
  bottom: 76% ;
  right: -59% ;
  display: flex ;
  flex-direction: row ;
}
.carousel .control-dots .dot{
  margin: 2px 2px ;
  background: #ff8d00;
  box-shadow: -1px 0px 1px rgb (0 0 0 / 80%);
}
.timer-wrapper {
    bottom:84%;
}
}
@media (min-width: 501px) and (max-width: 600px){
  .carousel .control-dots {
  bottom: 78% ;
  right: -82% ;
  display: flex ;
  flex-direction: row ;
}
.carousel .control-dots .dot{
  margin: 2px 2px ;
  background: #ff8d00;
  box-shadow: -1px 0px 1px rgb (0 0 0 / 80%);
}
.timer-wrapper {
    bottom:84%;
}
}

`

const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer"></div>;
    }
  
    return <div className="timer"></div>;
  };

const Carousel1 = () => {
    const [key, setKey] = useState(0)
    return (
        <DIV>
            {/* <Timer duration={7000} key={key} className="myTimer" /> */}
            <div className="timer-wrapper">
                <CountdownCircleTimer
                    key={key}
                className="myTimer"
                isPlaying
                size={20}
                strokeWidth={4}
                duration={7}
                colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                onComplete={() => [true, 0.1]}
                style={{ width: "15px", height: "15px", postion:'absolute' }}
                >
                {renderTime}
                </CountdownCircleTimer>
            </div>
            <Carousel autoPlay fade={true} transitionTime={1000} onChange={() => setKey(prevKey => prevKey + 1)}  infiniteLoop interval={7000} style={{postion:'relative'}}>
            <div>
                <img alt="" src="/images/html.png" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img alt="" src="/images/js.jpg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img alt="" src="/images/react.jpg" />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img alt="" src="/images/styled-components.png" />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img alt="" src="/images/redux.jpg" />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img alt="" src="/images/nextjs.png" />
                <p className="legend">Legend 3</p>
            </div>
        
            </Carousel>
        </DIV>
    )
}

export default Carousel1
