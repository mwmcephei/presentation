import React, { useState } from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  Media,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

//Import Images
import avatar1 from "../../assets/images/users/avatar-1.jpg"

const getCircle = number => {
  switch (number) {
    case 0:
      return (
        <div
          className="rounded-circle bg-success  text-muted text-truncate"
          style={{ height: "30px", width: "30px" }}
        ></div>
      )
    case 1:
      return (
        <div
          className="rounded-circle bg-warning align-self-centerr"
          style={{ height: "30px", width: "30px" }}
        ></div>
      )
    case 2:
      return (
        <div
          className="rounded-circle bg-danger align-self-center"
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

function CardUser(props) {
  const [settingsMenu, setSettingsMenu] = useState(false)
  //Setting Menu
  const toggleSettings = () => {
    setSettingsMenu(settingsMenu)
  }

  return (
    <React.Fragment>
      <Row>
        <Col lg="12">
          <Card>
            <CardBody>
              <Row>
                {/*
                <Col lg="4">
                  <Media>
                    <div className="me-3">
                      <img
                        src={avatar1}
                        alt=""
                        className="avatar-md rounded-circle img-thumbnail"
                      />
                    </div>
                    <Media className="align-self-center" body>
                      <div className="text-muted">
                        <p className="mb-2">Welcome to Skote Dashboard</p>
                        <h5 className="mb-1">Henry wells</h5>
                        <p className="mb-0">UI / UX Designer</p>
                      </div>
                    </Media>
                  </Media>
                </Col>
                */}

                <Col lg="12" className="align-self-center">
                  <div className="text-lg-center mt-4 mt-lg-0">
                    <Row>
                      <Col xs="4">
                        <div>
                          <p className="text-muted text-truncate mb-2">
                            Total Measures
                          </p>
                          <h5 className="mb-0"> {props.numberOfMeasures} </h5>
                        </div>
                      </Col>
                      <Col xs="4">
                        <div>
                          <p className="text-muted text-truncate mb-2">
                            Approved Budget
                          </p>
                          <h5 className="mb-0"> {props.budget} k€ </h5>
                        </div>
                      </Col>
                      <Col xs="4" className="align-self-center">
                        <div className="align-self-center">
                          <p className="text-muted text-truncate mb-2">
                            Overall Status
                          </p>
                          <Row>
                            <Col xs="5"></Col>
                            <Col xs="2">{getCircle(props.signal)}</Col>
                            <Col xs="5"></Col>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
                {/*
style={{justify-content: "center"}}



                <Col lg="4" className="d-none d-lg-block">
                  <div className="clearfix mt-4 mt-lg-0">
                    <Dropdown
                      isOpen={settingsMenu}
                      toggle={toggleSettings}
                      className="float-end"
                    >
                      <DropdownToggle tag="button" className="btn btn-primary">
                        <i className="bx bxs-cog align-middle me-1" /> Setting
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem href="#">Action</DropdownItem>
                        <DropdownItem href="#">Another action</DropdownItem>
                        <DropdownItem href="#">Something else</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </Col>
*/}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default CardUser
