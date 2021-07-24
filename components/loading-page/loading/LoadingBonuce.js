import React, { useState } from 'react';
import styled from 'styled-components';

const DIV = styled.div`
 display: flex;
 flex-direction: column;
  justify-content: center;
  align-items: center;
   width: 100%;  
   margin-top:50px;
  -webkit-font-smoothing: antialiased;
  h1.loading-text {
  height: 100px;
  text-transform:initial;
  
}

.loading-textBox{
    display: flex;
  justify-content: center;
  align-items: center;
}

h1.loading-text span {
  position: relative;
  top: 20px;
  display: inline-block;
  animation: bounce .3s ease infinite alternate;
  font-family: 'Titan One', cursive;
  font-size: 80px;
  color: #FFF;
  text-shadow: 0 1px 0 #CCC,
               0 2px 0 #CCC,
               0 3px 0 #CCC,
               0 4px 0 #CCC,
               0 5px 0 #CCC,
               0 6px 0 transparent,
               0 7px 0 transparent,
               0 8px 0 transparent,
               0 9px 0 transparent,
               0 10px 10px rgba(0, 0, 0, .4);
}

h1.loading-text span:nth-child(2) { animation-delay: .1s; }
h1.loading-text span:nth-child(3) { animation-delay: .2s; }
h1.loading-text span:nth-child(4) { animation-delay: .3s; }
h1.loading-text span:nth-child(5) { animation-delay: .4s; }
h1.loading-text span:nth-child(6) { animation-delay: .5s; }
h1.loading-text span:nth-child(7) { animation-delay: .6s; }
h1.loading-text span:nth-child(8) { animation-delay: .7s; }
h1.loading-text span:nth-child(9) { animation-delay: .8s; }
h1.loading-text span:nth-child(10) { animation-delay: .9s; }
@keyframes bounce {
  100% {
    top: -20px;
    text-shadow: 0 1px 0 #CCC,
                 0 2px 0 #CCC,
                 0 3px 0 #CCC,
                 0 4px 0 #CCC,
                 0 5px 0 #CCC,
                 0 6px 0 #CCC,
                 0 7px 0 #CCC,
                 0 8px 0 #CCC,
                 0 9px 0 #CCC,
                 0 50px 25px rgba(0, 0, 0, .2);
  }
}

.input-style{
    margin-bottom: 20px;
}
.input-style input[type="text"]:focus {
    outline: none;
  }
.input-style input[type="text"] {
    font: 15px/24px "Lato", Arial, sans-serif;
    color: #333;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
  }

.input-style .effect-4 {
    border: 0;
    padding: 5px 0 7px;
    border: 1px solid transparent;
    border-bottom-color: #ccc;
    transition: 0.4s;
    background: transparent;
  }

  .input-style .effect-4:focus {
    padding: 5px 14px 7px;
    transition: 0.4s;
  }

  .input-style .effect-4 ~ .focus-border {
    position: absolute;
    height: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    transition: 0.4s;
    z-index: -1;
  }
  .input-style .effect-4:focus ~ .focus-border {
    transition: 0.4s;
    height: 40px;
    border: 2px solid #209e91;
    z-index: 1;
  }

`;

const LoadingBonuce = () => {
    const [loading, setLoading] = useState(['L', 'o', 'a', 'd', 'i', 'n', 'g', '.', '.', '.'])
    const handleChange =(e)=> {
        let Str = e.target.value;
        let StrArr = [];

        for (let i = 0; i < Str.length; i++) {
            StrArr.push(Str[i])
        }
        setLoading(StrArr)
        
    }
   console.log(loading);
    return (
        <DIV>
            <div className="input-style">
                    <input
                    className="effect-4"
                    type="text"
                    placeholder="Placeholder Text"
                    onChange={handleChange}
                    />
                 <span className="focus-border"></span>
                 
            </div>
            <div className="loading-textBox">
                <h1 className="loading-text">
               {
                loading.map((srt, index)=>{
                    return (
                        <span key={index}>{srt}</span>
                    )
                })
            } 
            </h1>
            </div>
            
            
            
        </DIV>
    )
}

export default LoadingBonuce
