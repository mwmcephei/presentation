import React from "react"
import { Row, Col, Card, CardBody } from "reactstrap"
import ReactApexChart from "react-apexcharts"

const SalesAnalytics = props => {
  const series = [props.yellow, props.green, props.red]
  const options = {
    labels: ["Series A", "Series B", "Series C"],
    colors: ["#f0ad4e", "#34c38f", "#f46a6a"],
    legend: { show: !1 },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },
  }


  return (
    <React.Fragment>
        <Card>
          <CardBody>
            <h4 className="card-title mb-4">{props.title}</h4>

            <div>
              <div id="donut-chart">
                <ReactApexChart
                  options={options}
                  series={series}
                  type="donut"
                  height={260}
                  className="apex-charts"
                />
              </div>
            </div>

            <div className="text-center text-muted">
              <Row>
              <Col xs="4">
                  <div className="mt-4">
                    <p className="mb-2 ">
                      <span>Behind </span>
                      <i className="mdi mdi-circle text-danger me-1 " />
                    </p>
                    <h5>{props.red}</h5>
                  </div>
                </Col>
                <Col xs="4">
                  <div className="mt-4">
                    <p className="mb-2 text-truncate">
                    <span>On Track </span> 
                      <i className="mdi mdi-circle text-warning me-1" />
                    </p>
                    <h5>{props.yellow}</h5>
                  </div>
                </Col>
                <Col xs="4">
                  <div className="mt-4">
                    <p className="mb-2 text-truncate">
                      <span>Achieved </span> 
                      <i className="mdi mdi-circle text-success me-1" /> 
                    </p>
                    <h5>{props.green}</h5>
                  </div>
                </Col>
                
              </Row>
            </div>
          </CardBody>
        </Card>
    </React.Fragment>
  )
}

export default SalesAnalytics
