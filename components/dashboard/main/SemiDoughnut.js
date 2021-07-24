import React from 'react';
import styled from 'styled-components';
import { Doughnut } from "react-chartjs-2";
// Doughnut.options.legend.display = false;
// import { defaults } from 'react-chartjs-2'
// defaults.global.legend.display = false;
import {Circle} from '@styled-icons/boxicons-solid';

const StyledCircle = styled(Circle)`

width:25px;
height:25px;

`;
const DIV = styled.div`
width: 100%;
height:100%;
.chart-wrap{
  position: relative;
  /* margin-bottom:20px; */
  
}
.back-box{
  width: 100%;
  height:100%;
  border-radius: 100%;
  background: rgba( 64, 64, 64, 0.8 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border: 1px solid rgba( 255, 255, 255, 0.18 );
/* position: absolute;
/* z-index: -1; */
/* top:0%; */
/* left:50%; */
/* transform: translateX(-50%); */

}

.total-amount{
  position: absolute;
  z-index: 2;
  top:49%;
left:50%;
transform: translate(-50%, -50%);
}

.total-amount h2{
font-size: 22px;
color: rgba( 255, 255, 255, 0.7 );;
text-align: center;
}

.description{
  display: inline-block;
  margin-top: 10px;
  width:100%;
  padding-left: 0;
}

.chart-info{
  list-style: none;
  padding: 5px;
  background: rgba( 64, 64, 64, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
margin-top: 3px;
display: flex;
align-items: center;
}
.chart-info h5{
  margin-bottom: 0;
  margin-left:10px;
}
@media (min-width:544px) and (max-width:767px){
  .total-amount h2{
font-size: 30px;
}
}
@media (max-width:413px){
  .total-amount h2{
font-size: 18px;
}
}

@media (max-width:360px){
  .total-amount{
  position: absolute;
  z-index: 2;
  top:43%;
left:50%;
transform: translate(-50%, -50%);
}
}
@media (min-width:361px) and (max-width:599px){
  .total-amount{
  position: absolute;
  z-index: 2;
  top:43%;
left:50%;
transform: translate(-50%, -50%);
}
}

@media (min-width:768px){
  .description{
    display: none;
  }
  .total-amount{
  position: absolute;
  z-index: 2;
  top:68%;
left:50%;
transform: translate(-50%, -50%);
}
}
 
`;
// const options={
//   legend: {
//       display: false,
//   },
// };

const colorsArr = [
  "rgba( 0, 255, 200, 0.4 )",
          "rgba( 0, 117, 255, 0.4 )",
          "rgba( 212, 0, 255, 0.4 ",
          "rgba( 40, 255, 0, 0.4 )"
];

const Labels =  [
 { label:"New Orders", color:"rgba( 0, 255, 200, 0.4 )"}, 
  { label: "Purchases", color:"rgba( 0, 117, 255, 0.4 )"}, 
 {  label: "Active Orders", color:"rgba( 212, 0, 255, 0.4)"}, 
 {  label: "Delivered", color:"rgba( 40, 255, 0, 0.4 )"}
];

  

const data = {
    labels: ["New Orders", "Purchases", "Active Orders", "Delivered"],
    datasets: [
      {
        data: [62000, 86000, 126000, 188000],
        backgroundColor: [
          "rgba( 0, 255, 200, 0.4 )",
          "rgba( 0, 117, 255, 0.4 )",
          "rgba( 212, 0, 255, 0.4 ",
          "rgba( 40, 255, 0, 0.4 )"
        ],
        boxShadow: [
          "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
        ],
        hoverBackgroundColor: [
          "rgba( 0, 255, 200, 0.6 )",
          "rgba( 0, 117, 255, 0.6 )",
          "rgba( 212, 0, 255, 0.6 ",
          "rgba( 40, 255, 0, 0.6 )"
        ], 
        plugins: {
            labels: {
              render: "percentage",
              fontColor: ["green", "white", "red"],
              precision: 2
            },
          },
           text: "23%",
        
      }
    ]
  };
//   const options = {
//     rotation: 1 * Math.PI,
//     circumference: 1 * Math.PI,
//       plugins: {
//         legend: {
//           display: false
//         }
//       }
    
//   }

 

const SemiDoughnut = () => {
  let sum = data.datasets[0].data;
    const dataSum = sum.reduce((a,v) =>  a = Number(a) + Number(v) , 0 );
    let total = dataSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return (
        <DIV>
          
          <div className="chart-wrap">
          <Doughnut
          data={data}
          options={{
            rotation: 86 * Math.PI,
    circumference: 57 * Math.PI,
    plugins: {
                legend: {
                  display: false
                }
              }
            
            
          }} />
          {/* <Chart /> */}
          
          </div>
          
          <div className="total-amount">
            <h2>Total</h2>
            <h2>{total}</h2>
          </div>
          <ul className="description">
            {Labels.map((label, index) => (
              <li className="chart-info" key={index}>
               
               <StyledCircle color={label.color} />
              <h5>{label.label}</h5>
            </li>
    ))}
            
          </ul>
           
        </DIV>
    )
}

export default SemiDoughnut
