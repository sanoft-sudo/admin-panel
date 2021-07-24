// import React, { useLayoutEffect } from "react";
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";

// // let am4core = null;
// // let am4charts = null;
// // let am4themesAnimated = null;
// // if (process.browser) {
// //   console.log("process.browser", process.browser);
// //   am4core = require("@amcharts/amcharts4/core");
// //   am4charts = require("@amcharts/amcharts4/charts");
// //   am4themesAnimated = require("@amcharts/amcharts4/themes/animated");
// //   am4core.useTheme(am4themesAnimated.default);
// // }

// am4core.useTheme(am4themes_animated);



 
//   const Chart = () => {
   
//     const data = [
//       {title:"New Orders" , amount: '62000', color:"rgba( 0, 255, 200, 0.4 )"}, 
//       {title:"Purchases" , amount: '86000', color:"rgba( 0, 117, 255, 0.4 )"}, 
//       {title:"Active Orders" , amount: '126000', color:"rgba( 212, 0, 255, 0.4 "}, 
//       {title:"Delivered" , amount: '188000', color:"rgba( 40, 255, 0, 0.4 )"}
// ]
//     const total = [62000, 86000, 126000, 188000]
//     const dataSum = total.reduce((a,v) =>  a = a + v , 0 );
//     let totalSum = dataSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
//     const hide = (ev) => {
//       ev.target.hide();
//     };

//   useLayoutEffect(() => {
//     let chart = am4core.create("chartdiv", am4charts.PieChart);
//     chart.hiddenState.properties.opacity = 0;
//     chart.data = data;

//     chart.radius = am4core.percent(90);
//     chart.innerRadius = am4core.percent(50);
//     chart.startAngle = 180;
//     chart.endAngle = 360;

//     let label = chart.seriesContainer.createChild(am4core.Label);
//     label.text = `${totalSum}`;
//     label.horizontalCenter = "middle";
//     label.verticalCenter = "middle";
//     label.fontSize = 30;

//     let series = chart.series.push(new am4charts.PieSeries());
//     series.dataFields.value = "amount";
//     series.dataFields.category = "title";

//     series.slices.template.cornerRadius = 10;
//     series.slices.template.innerCornerRadius = 7;
//     series.slices.template.draggable = false;
//     series.slices.template.inert = true;
//     series.alignLabels = false;
//     series.slices.template.propertyFields.fill = "color";
//     series.slices.template.propertyFields.stroke = "color";

//     series.ticks.template.events.on("ready", hide);
//     series.ticks.template.events.on("visibilitychanged", hide);
//     series.labels.template.events.on("ready", hide);
//     series.labels.template.events.on("visibilitychanged", hide);

//     series.hiddenState.properties.startAngle = 90;
//     series.hiddenState.properties.endAngle = 90;

//     // chart.legend = new am4charts.Legend();
//     return () => {
//       chart.dispose();
//     };
//   }, []);
  
//     return (
//       <div id="chartdiv" style={{ width: "100%", height: "300px" }}></div>
//     );
//   }
// export default Chart