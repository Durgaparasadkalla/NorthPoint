import './SelectedProject.css';

import { Card, Col, Container, Row } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { getIssues } from '../../services/IssueService';
import { useState } from 'react';

export default function SelectedProject() {
  const image1 = require('../../assets/images/Puja.png')
  const [issueList, setIssueList] = useState([]);

  const issues = [
    {
      
    }
  ]
  const getIssuesdata = async () => {
    try {
      await getIssues().then(result => {
        setIssueList(result);
      })
    } catch (error) {
      console.error("Error getting the issue data:", error)
    }
  }
  try {
    return (
      <Container fluid className='bg-white'>
        <Row className='mt-2'>
          <Col md={3}>
            <h3 className="text-dark">Project Name</h3>
          </Col>
        </Row>
        <Row className="">
          <Col className="" md={4}>
            <Card className="bg-secondary-subtle shadow-lg">
              <Card.Title className="m-3 p-0 mb-0 fw-semibold fs-5">To Do</Card.Title>
              <Card.Body className="bg-white m-3 rounded-2 mb-0 shadow-lg">
                <Row>
                  <Col className="mt-0 p-0" md={5}>
                    <Card.Text className=" text-danger fw-bolder text-center rounded-2 ">High priority</Card.Text>
                  </Col>
                  <Col className="text-right">
                    <Card.Text className="text-end">
                      <FontAwesomeIcon className="text-primary" icon={faEllipsis} size="lg" />
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col className="" md={5}>
                    <Card.Text className=" text-info fw-bolder text-center rounded-2">Front End Issue</Card.Text>
                  </Col>
                  <Col md={4}></Col>
                  <Col className="text-right bg-white">
                    <Card.Text className="">
                      <h6 className="text-warning text-end rounded-2 fw-bolder">Issue</h6>
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col md={1}>
                  </Col>
                  <Col className="">
                    <Card.Text className="fw-bolder fs-5 py-0 mb-0">Issue1</Card.Text>
                    <Card.Text className="py-0">Issue Id : Project Name</Card.Text>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col className="">
                    <Card.Text className="text-dark py-0 mb-0">Logout functionality not implemented in the north point project we have to implement in Header component</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Body className="bg-white m-3 rounded-2 shadow-lg">
                <Row>
                  <Col className="" md={5}>
                    <Card.Text className=" text-danger fw-bolder text-center rounded-2">High priority</Card.Text>
                  </Col>
                  <Col className="text-right">
                    <Card.Text className="text-end">
                      <FontAwesomeIcon className="text-primary" icon={faEllipsis} size="lg" />
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col className="" md={5}>
                    <Card.Text className="text-info fw-bolder text-center rounded-2">High priority</Card.Text>
                  </Col>
                  <Col md={4}></Col>
                  <Col className="text-right bg-white">
                    <Card.Text className="">
                      <h6 className="text-warning text-end rounded-2 fw-bolder">Issue</h6>
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col md={1}>
                  </Col>
                  <Col className="">
                    <Card.Text className="fw-bolder fs-5 py-0 mb-0">Issue1</Card.Text>
                    <Card.Text className="py-0">Issue Id : Project Name</Card.Text>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col className="">
                    <Card.Text className="text-dark py-0 mb-0">Logout functionality not implemented in the north point project we have to implement in Header component</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col className="" md={4}>
            <Card className="bg-secondary-subtle shadow-lg">
              <Card.Title className="m-3 p-0 mb-0 fw-semibold fs-5">In Progress</Card.Title>
              <Card.Body className="bg-white m-3 rounded-2 shadow-lg">
                <Row>
                  <Col className="" md={5}>
                    <Card.Text className="text-danger fw-bolder text-start rounded-2 ps-0">High priority</Card.Text>
                  </Col>
                  <Col className="text-right">
                    <Card.Text className="text-end">
                      <FontAwesomeIcon className="text-primary" icon={faEllipsis} size="lg" />
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col className="" md={5}>
                    <Card.Text className="text-danger fw-bolder text-start rounded-2 p-0">Front End Issue</Card.Text>
                  </Col>
                  <Col md={4}></Col>
                  <Col className="text-right bg-white">
                    <Card.Text className="">
                      <h6 className="text-success text-end rounded-2 fw-bolder">Task</h6>
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col md={1}>
                  </Col>
                  <Col className="">
                    <Card.Text className="fw-bolder fs-5 py-0 mb-0">Issue1</Card.Text>
                    <Card.Text className="py-0">Issue Id : Project Name</Card.Text>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col className="">
                    <Card.Text className="text-dark py-0 mb-0">Logout functionality not implemented in the north point project we have to implement in Header component</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col className="" md={4}>
            <Card className="bg-secondary-subtle shadow-lg">
              <Card.Title className="m-3 p-0 mb-0 fw-semibold fs-5">Completed</Card.Title>
              <Card.Body className="bg-white m-3 rounded-2 shadow-lg">
                <Row>
                  <Col className="" md={5}>
                    <Card.Text className="text-danger fw-bolder text-start rounded-2">High priority</Card.Text>
                  </Col>
                  <Col className="text-right">
                    <Card.Text className="text-end">
                      <FontAwesomeIcon className="text-primary" icon={faEllipsis} size="lg" />
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col className="" md={5}>
                    <Card.Text className="text-success fw-bolder text-start rounded-2">Middleware Task</Card.Text>
                  </Col>
                  <Col md={4}></Col>
                  <Col className="text-right bg-white">
                    <Card.Text className="">
                      <h6 className="text-danger text-end rounded-2 fw-bolder">Bug</h6>
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col md={1}>
                  </Col>
                  <Col className="">
                    <Card.Text className="fw-bolder fs-5 py-0 mb-0">Issue1</Card.Text>
                    <Card.Text className="py-0">Issue Id : Project Name</Card.Text>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col className="">
                    <Card.Text className="text-dark py-0 mb-0">Logout functionality not implemented in the north point project we have to implement in Header component</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  } catch (error) {
    console.error("Error displying the information :", error)
  }
}
