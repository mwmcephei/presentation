import React from "react"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Link } from "react-router-dom"

import ApexRadial from "./ApexRadial"

const MonthlyEarning_Custom = props => {
  return (
    <React.Fragment>
      {" "}
      <Card>
        <CardBody>
          <CardTitle className="mb-4">
            {props.id}. {props.title}
          </CardTitle>
          <Row>
            <Col sm="6">
              <h4>Budget: {props.budget}</h4>
              <p>{props.achievement}</p>
            </Col>
            <Col sm="6">
              <div className="mt-4 mt-sm-0">
                <ApexRadial progress={props.progress} />
              </div>
            </Col>
          </Row>
          <p className="text-muted mb-0">{props.work}</p>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default MonthlyEarning_Custom
