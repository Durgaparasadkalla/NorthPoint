import { Button, Col, Container, Image, ListGroup, Row } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

export default function ProjectDashBoardComponent() {
  const navigate = useNavigate()
  const [isSideBarVisible, setSideBarVisible] = useState(true)
  const navigateToListOfIssues = () => {
    navigate('userList')
  }
  const navigateToSample = () => {
    navigate('sample')
  }
  const toggleSideBar = () => {
    setSideBarVisible(!isSideBarVisible)
  }
  return (
    <Container fluid >

      <Button variant='info' onClick={toggleSideBar}>{isSideBarVisible ? 'Hide Side Bar' : 'Show'}</Button>
      <Row >

        <Col md={2} lg={2} sm={1} style={{ height: '100vh' }} className={`side-bar ${!isSideBarVisible ? 'minimized' : ''}`} >
          <Row>
            <h3>Project desc</h3>

          </Row>
          <Row>
            <ListGroup style={{ width: "100%" }} className="no-border">
              <ListGroup.Item>Project1</ListGroup.Item>
              <ListGroup.Item onClick={navigateToListOfIssues}><Image src='../assets/images/ph_list-fill.jpg' />{isSideBarVisible ? "List of Issues" : ""} </ListGroup.Item>
              <ListGroup.Item onClick={navigateToSample}>Sample</ListGroup.Item>
            </ListGroup>
          </Row>
        </Col>


        <Col md={8}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}
