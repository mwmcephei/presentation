import React, { ReactElement } from "react"
import { useState, useEffect } from "react"

import { Container, Row, Col, Card, CardBody } from "reactstrap"
import { Link } from "react-router-dom"

const Measure_Reports = (): ReactElement => {
  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Row>Measure Reports</Row>
        </Container>
      </div>
    </>
  )
}

export default Measure_Reports
