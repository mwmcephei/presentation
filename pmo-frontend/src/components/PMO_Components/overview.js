import React from 'react';
import { useState, useEffect } from 'react';

import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardBody,
    CardTitle,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Media,
    Table,
} from "reactstrap"
import MonthlyEarning_Custom from "../../pages/Dashboard/MonthlyEarning_custom"
import CardUser from "../../pages/Dashboard-saas/card-user_custom"
import TopCities from "../../pages/Dashboard/TopCities_custom"
import Apexchart from "../../pages/Charts/Apexcharts_custom"
import LineColumnArea from "pages/AllCharts/apex/LineColumnArea_custom"

import ApexRadial from "../../pages/Dashboard/ApexRadial"
import BarChart from 'pages/AllCharts/chartjs/barchart'
import LineChart from 'pages/AllCharts/chartjs/linechart'
import SalesAnalytics from 'pages/Dashboard-saas/sales-analytics_custom'
import { Link } from 'react-router-dom';




const Overview = (props) => {
    //   const parserBaseURL = "http://192.168.2.112:5000/xlsx-parser"  // Michael
    const parserBaseURL = "http://localhost:5000/xlsx-parser" // Matthias Browser
    //   const parserBaseURL = "http://10.0.2.2:5000/xlsx-parser"   // android emulator


    const [overviewData, setOverviewData] = useState()
    const [measures, setMeasures] = useState([])
    const [measuresPieChart, setMeasuresPieChart] = useState({ redCounter: 0, yellowCounter: 0, greenCounter: 0 })
    const [measurePKI_pieChart, setMeasurePKI_pieChart] = useState({ redCounter: 0, yellowCounter: 0, greenCounter: 0 })

    const [labels, setLabels] = useState()
    const [monthlySpendings, setMonthlySpendings] = useState()
    const [approved, setApproved] = useState()


    useEffect(() => {
        fetch(parserBaseURL + "/budget")
            .then(response => response.json())
            .then(response => {
                if (response.monthlySpendings && response.approvedBudgetPerMonth) {
                    setMonthlySpendings(response.monthlySpendings)
                    console.log("budget")
                    console.log(response)
                    let labels = []
                    for (let i = 0; i < response.monthlySpendings.length; i++) {
                        const date = "0" + (i + 1) + "/01/" + response.year
                        labels.push(date)
                    }
                    setLabels(labels)
                    setApproved(response.approvedBudgetPerMonth)

                    console.log("in useeffect")
                    console.log(labels)
                    console.log(response.approvedBudgetPerMonth)
                    console.log(response.monthlySpendings)
                }

            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    /*
       useEffect(() => {
        fetch(parserBaseURL + "/overview")
          .then(response => response.json())
          .then(response => {
            setOverviewData(response)
            console.log( "overview")
            console.log( response)
    
            fetch(parserBaseURL + "/measures")
            .then(response => response.json())
            .then(response => {
                setMeasures(response)
                console.log( "measures")
                console.log( response)
            })
            .catch(error => console.log(error));
          })
          .catch(error => console.log(error));
      }, [approved]);
    
    
      useEffect(() => { 
        let greenCounter = 0
        let yellowCounter = 0
        let redCounter = 0
        measures.map(measure => {
            const max = getMax([measure.budget, measure.risk, measure.artefact])
            switch(max) {
                case 0:
                    greenCounter += 1
                  break;
                case 1:
                    yellowCounter += 1
                  break;
                case 2:
                    redCounter += 1
                  break; 
              }
        })
        setMeasuresPieChart({
            redCounter, 
            yellowCounter, 
            greenCounter
        })
        // kpi pie chart
        let greenCounter_kpi = 0
        let yellowCounter_kpi = 0
        let redCounter_kpi = 0
        measures.map(measure => {
            switch(measure.kpiProgress) {
                case 0:
                    redCounter_kpi += 1
                  break;
                case 1:
                    yellowCounter_kpi += 1
                  break;
                case 2:
                    greenCounter_kpi += 1
                  break; 
              }
        })
        setMeasurePKI_pieChart({
            redCounter: redCounter_kpi, 
            yellowCounter: yellowCounter_kpi, 
            greenCounter: greenCounter_kpi
        })
      }, [measures]);
    */




    const getMax = (array) => {
        let res = 0
        array.map(a => {
            if (a > res) { res = a }
        })
        return res
    }




    let status1 = "test"
    let status2 = "test"
    /*     
        if(overviewData){
            status1 = <CardUser signal={ overviewData.overallStatus} 
            budget={ overviewData.totalBudget }
            numberOfMeasures={overviewData.measures.length}
            />
            status2 =  <TopCities overallProgress={overviewData.progress * 100} kpiProgress={overviewData.kpiProgress * 100} />
        }
     */

    let budgetChart = ""
    if (labels && monthlySpendings && approved) {
        budgetChart = <LineColumnArea labels={labels} monthlySpendings={monthlySpendings} approved={approved} />
    }


    return (
        <>
            <div className="page-content">
                <Container fluid>
                    <Row>
                        {"status1"}
                    </Row>

                    <Row>
                        {"status2"}
                    </Row>

                    { /*     <Row>
                    <SalesAnalytics title={"Status of Projects"}
                        green={measuresPieChart.greenCounter} 
                        yellow={measuresPieChart.yellowCounter} 
                        red={measuresPieChart.redCounter} 
                    />
                </Row>
                <Row>
                    <SalesAnalytics title={"KPI"}
                        green={measurePKI_pieChart.greenCounter} 
                        yellow={measurePKI_pieChart.yellowCounter} 
                        red={measurePKI_pieChart.redCounter} 
                    />
                </Row>
          */ }
                    <Row>
                        <Card>
                            <CardBody>
                                <CardTitle className="mb-4"></CardTitle>
                                {budgetChart}
                            </CardBody>
                        </Card>
                    </Row>


                </Container>
            </div>
        </>
    )

}


export default Overview;