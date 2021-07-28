import React from 'react';
import {useState, useEffect} from 'react';

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

  
  
import { Link } from 'react-router-dom';
  
const CapacitorTest = (props) => {
    const [test, setTest] = useState([])
    const [measures, setMeasures] = useState([])

    


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setTest(json.title)
            })
      }, []);


      const parserBaseURL = "http://localhost:5000/xlsx-parser"
    useEffect(() => {
        fetch(parserBaseURL + "/measures")
          .then(response => response.json())
          .then(response => {
            setMeasures(response[0].title)
            console.log( response)


          })
          .catch(error => console.log(error));
      }, [test]);







    return (
        <>
        <div className="page-content">
        <Container fluid>
        <Row>
            test
        </Row>
        <Row>
            {test}
        </Row>
        <Row>
            {measures}
        </Row>


        </Container>

        </div>
                  
        </>
    )

}


export default CapacitorTest;