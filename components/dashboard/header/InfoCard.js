import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import CircleProgress6 from "../../circle-progress-bar/CircleProgress6";

const DIV = styled.div`
 display: flex;
 width:100%;
 height: 100px;
 margin-bottom: 30px;
    flex-direction: column;
    position: relative;
    padding: 10px;
    background: rgba(221, 232, 246, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

.progress-box{
    position: absolute;
    padding: 0px;
    top: -2px;
    left: 0px;
    background: rgba(221, 232, 246, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
}

.card-content{
    display: flex;
    flex-direction: column;
    padding: 20px 0px;
    margin-left: 98px;
}
.prod-title, .prod-amount{
    font-size: 18px;
    color: #fff;
    font-family:  Roboto,sans-serif;
}
.prod-amount{
    font-size:22px !important;
}
.product-icon{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right:15px;
}

@media (max-width:413px){
    .product-icon, .product-icon2{
        display: none;
    }

}
@media (min-width:1200px){
    .product-icon, .product-icon2{
        display: none;
    }

}

`;

const InfoCard = ({product}) => {
    let count = product.amount;
    const [amount, setAmount] = useState("0");
  useEffect(() => {
    let start = 0;
    // propsdagi birinchi 3ta raqamlarni olish
    const end = parseInt(product.amount.substring(0, 2));
    //agar 0 bolsa
    if (start === end) return;

    //xar oshib borishni hisoblash
    let totalMillSecDuration = parseInt(product.duration);
    let incrementTime = (totalMillSecDuration / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setAmount(String(start) + product.amount.substring(2));
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [product.amount, product.duration]);
    return (
        <DIV>
            <div className="progress-box">
                <CircleProgress6 percentage={product.percentage} radius = {product.radius} lineWidth={product.lineWidth}/>
            </div>
            <div className="card-content">
                <h2 className="prod-title">{product.title}</h2>
                <h2 className="prod-title">{amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</h2>
            </div>
            <div className="product-icon">
                {product.icon}
            </div>
        </DIV>
    )
}

export default InfoCard
