import React from "react"
import { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Progress } from "reactstrap"
const TopCities = () => {


  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <div className="table-responsive mt-4">
            <table className="table align-middle table-nowrap">
              <tbody>
                <tr>
                  <td style={{ width: "30%" }}>
                    <p className="mb-0">Overall Progress</p>
                  </td>
                  <td style={{ width: "25%" }}>
                    <h5 className="mb-0">{props.overallProgress}%</h5>
                  </td>
                  <td>
                    <Progress
                      value={props.overallProgress}
                      color="secondary"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <p className="mb-0">KPI Progress</p>
                  </td>
                  <td>
                    <h5 className="mb-0">{props.kpiProgress}%</h5>
                  </td>
                  <td>
                    <Progress
                      value={props.kpiProgress}
                      color="success"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default TopCities
