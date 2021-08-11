import React from "react"
import {useState, useEffect} from 'react';
import ReactApexChart from "react-apexcharts"

const LineColumnArea = ({labels, monthlySpendings, approved}) => {

  const [approvedArray, setApproved] = useState()
  const [accumulatedSpendings, setAccumulatedSpendings] = useState()

  useEffect(() => {
    console.log("data")
    console.log(labels)
    console.log(monthlySpendings)
    console.log(approved)

    const a = monthlySpendings.map(a => {
      return approved
   })
    setApproved(a)

   const acumulateSpendingsAray = acumulateArray(monthlySpendings)
   console.log("acumulateSpendings")
   console.log(acumulateSpendingsAray)
   setAccumulatedSpendings(acumulateSpendingsAray)
  }, [labels, monthlySpendings, approved]);


  const acumulateArray = (array) => {
    let result = []
    for(let i = 0; i < array.length; i++){
      let acc = 0
      for(let j = 0; j <= i; j++){
        acc += array[j]
      }
      result.push(acc)
    }
    return result
  }


  const series = [
    {
      name: "Approved",
      type: "area",
      data: approvedArray,
    },
    {
      name: "Accumulated Monthly Spendings",
      type: "line",
      data: accumulatedSpendings,
    },   
    {
      name: "Monthly Spendings",
      type: "column",
      data: monthlySpendings,
    },
  ]
  const options = {
    chart: {
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [0, 2, 4],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },
    colors: ["#f46a6a", "#556ee6", "#34c38f"],

    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    
    labels: labels ,
    markers: {
      size: 0,
    },
    legend: {
      offsetY: 11,
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      title: {
        text: "Spent",
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " points"
          }
          return y
        },
      },
    },
    grid: {
      borderColor: "#f1f1f1",
    },
  }

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height="350"
    />
  )
}

export default LineColumnArea
