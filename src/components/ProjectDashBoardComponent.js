import './ProjectDashboard.css';

import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { faBars, faDashboard, faList, faListCheck, faMoneyCheck, faTableList, faTimeline, faTimes } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProjectDashBoardComponent() {
  const navigate = useNavigate()
  const [isSideBarVisible, setSideBarVisible] = useState(true)
  const navigateToListOfIssues = () => {
    try {
      navigate('userList')
    } catch (error) {
      console.error("Error navigating")
    }

  }
  const navigateToSample = () => {
    navigate('sample')
  }
  const navigateToDashBoard = () => {
    navigate('dashBoard')
  }
  const navigateToSelectedIssue = () => {
    try {
      navigate('selected-issue')
    } catch (error) {
      console.error("Error navigating to selected Issue Page")
    }
  }
  const toggleSideBar = () => {
    setSideBarVisible(!isSideBarVisible)
  }
  return (
    <Container fluid >
      <Row className=''>
        <Col md={2} lg={2} sm={10} className={`side-bar ${!isSideBarVisible ? 'minimized' : ''}`} >
          <Row className='bg-secondary-subtle'>
            <div className='d-flex justify-content-end' onClick={toggleSideBar} style={{ cursor: 'pointer', padding: '10px' }}>
              <FontAwesomeIcon icon={isSideBarVisible ? faTimes : faBars} size="lg" className='toggle-icon' />
            </div>
          </Row>
          <Row className='bg-secondary-subtle '>
            {isSideBarVisible &&
              <h3>Project desc</h3>
            }
          </Row>
          <Row className='bg-secondary-subtle side-bar-bg-color'>
            <ListGroup className="">
              <ListGroup.Item onClick={navigateToListOfIssues} className='fw-semibold m-1 rounded-2 shadow-lg bg-primary-subtle text-dark'><FontAwesomeIcon icon={faTimeline} className='text-primary me-3' />{isSideBarVisible ? "Time Line" : ""} </ListGroup.Item>
              <ListGroup.Item onClick={navigateToSample} className='fw-semibold m-1 rounded-2 shadow-lg bg-primary-subtle text-dark'><FontAwesomeIcon icon={faMoneyCheck} className='text-primary me-3' />{isSideBarVisible ? "Back log" : ""} </ListGroup.Item>
              <ListGroup.Item onClick={navigateToListOfIssues} className='fw-semibold m-1 rounded-2 shadow-lg bg-primary-subtle text-dark'><FontAwesomeIcon icon={faTableList} className='text-primary me-3' />{isSideBarVisible ? "Active Sprint" : ""} </ListGroup.Item>
              <ListGroup.Item onClick={navigateToListOfIssues} className='fw-semibold m-1 rounded-2 shadow-lg bg-primary-subtle text-dark'><FontAwesomeIcon icon={faList} className='text-primary me-3' />{isSideBarVisible ? "User List" : ""} </ListGroup.Item>
              <ListGroup.Item onClick={navigateToSelectedIssue} className='fw-semibold m-1 rounded-2 shadow-lg bg-primary-subtle text-dark'><FontAwesomeIcon icon={faListCheck} className='text-primary me-3' />{isSideBarVisible ? "Selected Issue" : ""} </ListGroup.Item>
              <ListGroup.Item onClick={navigateToDashBoard} className='fw-semibold m-1 rounded-2 shadow-lg bg-primary-subtle text-dark'><FontAwesomeIcon icon={faDashboard} className='text-primary me-3' />{isSideBarVisible ? "Dash board" : ""} </ListGroup.Item>
            </ListGroup>
          </Row>
        </Col>
        <Col md={10} lg={10} sm={12}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}
