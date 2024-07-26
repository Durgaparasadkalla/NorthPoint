import './SelectedIssue.css'

import { Col, Container, Row } from 'react-bootstrap'

import { Divider } from '@mui/material'
import React from 'react'

export default function SelectedIssueComponent() {
  return (
    <Container fluid>
      <Row className='bg-light'>
        <Col md={8} className='rounded-1 shadow-lg'>
          <Row>
            <Col className='fs-4 fw-bolder m-2'>
              Issue Name
            </Col>
          </Row>
          <Row>
            <Col>
              <Divider style={{ backgroundColor: 'grey', height: '2px', width: "100%" }} />
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col className='fs-5 fw-semibold'>Description</Col>
          </Row>
          <Row>
            <Col className='fs-6 fw-normal' md={10}>Logout functionality not implemented in the north point project we have to implement in Header component</Col>
          </Row>
          <Row className='mt-1'>
            <Col className='fs-5 fw-semibold'>User Story</Col>
          </Row>
          <Row>
            <Col className='fs-6 fw-normal' md={10}>Logout functionality not implemented in the north point project we have to implement in Header component</Col>
          </Row>
          <Row className='mt-1'>
            <Col className='fs-5 fw-semibold'>Goal/Benifit/When</Col>
          </Row>
          <Row>
            <Col className='fs-6 fw-normal' md={10}>Logout functionality not implemented in the north point project we have to implement in Header component</Col>
          </Row>
          <Row className='mt-1'>
            <Col className='fs-5 fw-semibold'>Acceptance Criteria</Col>
          </Row>
          <Row>
            <Col className='fs-6 fw-normal' md={10}>Logout functionality not implemented in the north point project we have to implement in Header component</Col>
          </Row>
          <Row className='mt-1'>
            <Col className='fs-5 fw-semibold'>Solution Details</Col>
          </Row>
          <Row>
            <Col className='fs-6 fw-normal' md={10}>Logout functionality not implemented in the north point project we have to implement in Header component</Col>
          </Row>
        </Col>
        <Col md={4}>Sample</Col>
      </Row>
    </Container>

  )
}
