import React, {useState} from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styled from 'styled-components';
import Carousel1 from './Carousel1';

const DIV = styled.div`
 /* right:400px;
    bottom:300px;
    position: absolute;
    z-index: 9999;
.timer-wrapper {
   
}

.timer {
  font-family: "Montserrat";
  display: flex;
  flex-direction: column;
  align-items: center;

}

.value {
  font-size: 20px;
}
.myTimer {
  width: 20px !important;
  height: 20px !important;
 
} */


`

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer"></div>;
  }

  return <div className="timer"></div>;
};
const Timer = ({duration, key}) => {
  return (
    <DIV>
      <div className="timer-wrapper">
        <CountdownCircleTimer
            key={key}
          className="myTimer"
          isPlaying
          size={20}
          strokeWidth={4}
          duration={duration/1000}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [true, 0.1]}
          style={{ width: "15px", height: "15px" }}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    </DIV>
  );
};
export default Timer;
