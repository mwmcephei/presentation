import React, { useState } from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap"


const getCircle = (number) => {
  switch (number) {
    case 0:
      return (<div className="justify-content-center mx-auto text-center rounded-circle bg-success  text-muted text-truncate" style={{ height: '30px', width: '30px' }} ></div>)
    case 1:
      return (<div className="justify-content-center mx-auto text-center rounded-circle bg-warning align-self-centerr" style={{ height: '30px', width: '30px' }} ></div>)
    case 2:
      return (<div className="justify-content-center mx-auto text-center rounded-circle bg-danger align-self-center" style={{ height: '30px', width: '30px' }} ></div>)

    default:
      return (<div className="text-center rounded-circle " style={{ height: '30px', width: '30px' }} ></div>)
  }
}

function CardUser(props) {
  const [settingsMenu, setSettingsMenu] = useState(false)
  //Setting Menu
  const toggleSettings = () => {
    setSettingsMenu(settingsMenu)
  }

  const overallProgress_style = {
    width: props.overallProgress + "%"
  };
  const kpiProgress_style = {
    width: props.kpiProgress + "%"
  };

  let toalBudget_adjustedForDisplay;
  if (props.budget > 1000000) {
    const millions_float = props.budget / 1000000
    const millions = Math.floor(millions_float)
    const decimals = Math.floor((millions_float - millions) * 100)
    toalBudget_adjustedForDisplay = millions + "." + decimals + "M"
  } else {
    toalBudget_adjustedForDisplay = props.budget
  }


  return (
    <React.Fragment>
      <Row>
        <Col lg="12">
          <Card>
            <CardBody>
              <CardTitle className="mb-4">Short Summary</CardTitle>
              <Row>
                <div>
                  <div className="text-lg-center mt-4 mt-lg-0">
                    <Row>
                      <Col xs="4">
                        <div className="text-center">
                          <p className="text-muted mb-2">
                            Total Measures
                          </p>
                          <div className="mt-3">
                            <h5 className="mb-0"> {props.numberOfMeasures} </h5>
                          </div>

                        </div>
                      </Col>
                      <Col xs="4">
                        <div >
                          <p className="text-muted mb-2 text-center">
                            Approved Budget
                          </p>
                          <div className="text-center mt-3">
                            <h5 className="mb-2 align-self-center"> {toalBudget_adjustedForDisplay} € </h5>
                          </div>

                        </div>
                      </Col>

                      <Col xs="4" className="">
                        <div className="text-center">
                          <p className="text-muted mb-2">
                            Overall Status
                          </p>
                          <div className="text-center ">
                            <div className="justify-content-center mx-auto">
                              {getCircle(props.signal)}
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <Row className="mt-3">
                      <div>
                        <ul className="list-group list-group-flush">

                          <li className="list-group-item">
                            <div className="py-2">
                              <h5 className="font-size-14">
                                Overall Progress <span className="float-end">{props.overallProgress}%</span>
                              </h5>
                              <div className="progress animated-progess progress-sm">
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  style={overallProgress_style}
                                  aria-valuenow="69"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </li>
                          <li className="list-group-item">
                            <div className="py-2">
                              <h5 className="font-size-14">
                                KPI Progress <span className="float-end">{props.kpiProgress}%</span>
                              </h5>
                              <div className="progress animated-progess progress-sm">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  style={kpiProgress_style}
                                  aria-valuenow={"" + props.kpiProgress}
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </Row>
                  </div>
                </div>
              </Row>
            </CardBody>
          </Card >
        </Col >
      </Row >
    </React.Fragment >
  )
}

export default CardUser
