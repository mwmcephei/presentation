import React from "react"
import { useState, useEffect } from "react"

import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
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

import ApexRadial from "../../pages/Dashboard/ApexRadial"
import BarChart from "pages/AllCharts/chartjs/barchart"
import LineChart from "pages/AllCharts/chartjs/linechart"
import SalesAnalytics from "pages/Dashboard-saas/sales-analytics_custom"

import { Link } from "react-router-dom"

const Test = props => {
  const [measures, setMeasures] = useState([])
  const [currentMeasure, setCurrentMeasure] = useState({})
  const [artefacts, setArtefacts] = useState([])
  const [artefacts_display, setArtefactsDisplay] = useState([])

  //   const parserBaseURL = "http://192.168.2.112:5000/xlsx-parser"  // Michael
  const parserBaseURL = "http://localhost:5000/xlsx-parser" // Matthias
  // const parserBaseURL = "http://10.0.2.2:5000/xlsx-parser"

  useEffect(() => {
    fetch(parserBaseURL + "/measures")
      .then(response => response.json())
      .then(response => {
        setMeasures(response)
        console.log(response)
      })
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    if (currentMeasure !== {}) {
      fetch(parserBaseURL + "/artefacts/" + currentMeasure._id)
        .then(response => response.json())
        .then(response => {
          setArtefacts(response)
          console.log("artefacts")
          console.log(response)
        })
        .catch(error => console.log(error))
    }
  }, [currentMeasure])

  useEffect(() => {
    // order artefacts
    //      let orderedArtefacts = artefacts.sort()

    let artefacts_display = []
    if (artefacts.length > 0) {
      artefacts.map(art => {
        artefacts_display.push(
          <MonthlyEarning_Custom
            progress={art.progress * 100}
            title={art.description}
            budget={art.budget}
            id={art.id}
            achievement={art.achievement}
            work={art.work}
          />
        )
      })
    }
    setArtefactsDisplay(artefacts_display)
  }, [artefacts])

  let measureLinks_display = []
  if (measures.length > 0) {
    measureLinks_display = measures.map(measure => {
      return (
        <Link
          id={measure._id}
          className="p-1"
          onClick={() => setCurrentMeasure(measure)}
        >
          {measure.title}
        </Link>
      )
    })
  }

  const getCircle = number => {
    switch (number) {
      case 0:
        return (
          <div
            className="rounded-circle bg-success"
            style={{ height: "30px", width: "30px" }}
          ></div>
        )
      case 1:
        return (
          <div
            className="rounded-circle bg-warning"
            style={{ height: "30px", width: "30px" }}
          ></div>
        )
      case 2:
        return (
          <div
            className="rounded-circle bg-danger"
            style={{ height: "30px", width: "30px" }}
          ></div>
        )
      default:
        return (
          <div
            className="rounded-circle "
            style={{ height: "30px", width: "30px" }}
          ></div>
        )
    }
  }

  const getMaxFromThis = [
    currentMeasure.risk,
    currentMeasure.budget,
    currentMeasure.artefact,
  ]
  const getMax = array => {
    let res = 0
    array.map(a => {
      if (a > res) {
        res = a
      }
    })
    return res
  }
  const getApprovedBudget = () => {
    let approvedBudget = 0
    if (artefacts.length > 0) {
      artefacts.map(art => {
        if (art.budget) {
          const parsed = parseInt(
            art.budget.substring(0, art.budget.length - 2)
          )
          approvedBudget = approvedBudget + parsed
        }
      })
    }
    return approvedBudget
  }

  // OVERALL Progress:  Sum(average progress of artifacts in one measure *  the budget of the measure)) / (total budget)   over all measures!!!!
  // avg of artefacts in each measure
  const getOverallProgress = () => {
    let avgProgress = 0
    if (artefacts.length > 0) {
      artefacts.map(art => {
        if (art.progress) {
          avgProgress = avgProgress + art.progress
        }
      })
      avgProgress = avgProgress / artefacts.length
    }

    return 20
  }

  // KPI progress: Sum(KPI progress * by measure budget)/ (total budget).
  const getKPIProgress = () => {
    return 50
  }

  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Row>
            <SalesAnalytics />
          </Row>

          <Row>
            <Col xl="6">
              <Row>
                <Col>
                  <Card className="mini-stats-wid">
                    <CardBody>{measureLinks_display.slice(2)}</CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col xl="4">
                  <Card className="mini-stats-wid">
                    <CardBody>
                      <Row className="mt-2 ">
                        <Col>Risk:</Col>
                        <Col>{getCircle(currentMeasure.risk)}</Col>
                      </Row>
                      <Row className="mt-2 ">
                        <Col>Budget:</Col>
                        <Col>{getCircle(currentMeasure.budget)}</Col>
                      </Row>
                      <Row className="mt-2 ">
                        <Col>Artefact:</Col>
                        <Col>{getCircle(currentMeasure.artefact)}</Col>
                      </Row>

                      {/* 
                                        danger warning
                                    */}
                    </CardBody>
                  </Card>
                </Col>
              </Row>

              <Row>
                <CardUser
                  signal={getMax(getMaxFromThis)}
                  budget={getApprovedBudget()}
                  numberOfMeasures={
                    currentMeasure.artefacts
                      ? currentMeasure.artefacts.length
                      : 0
                  }
                />
              </Row>

              <Row>
                <TopCities
                  overallProgress={getOverallProgress()}
                  kpiProgress={getKPIProgress()}
                />
              </Row>
            </Col>

            <Col xl="6">
              <Row>
                <Col>
                  <div className="mt-4 mt-sm-0">{artefacts_display}</div>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* 
<WelcomeComp />

*/}
        </Container>
      </div>
    </>
  )
}

export default Test
