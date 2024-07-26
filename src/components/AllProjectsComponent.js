import { Card, Col, Container, Dropdown, Image, Row } from 'react-bootstrap';

import React from 'react';

export default function AllProjectsComponent() {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'Sample Project 1',
      thumbnail: require('../assets/images/Puja.png'),
      quickLinks: 3,
      openIssues: 2,
      doneIssues: 5,
      boards: ['Board 1', 'Board 2', 'Board 3'],
    },
    {
      id: 2,
      title: 'Sample Project 2',
      thumbnail: require('../assets/images/SVT-Logo2.png'),
      quickLinks: 2,
      openIssues: 1,
      doneIssues: 3,
      boards: ['Board 1'],
    },
    {
      id: 3,
      title: 'Sample Project 3',
      thumbnail: 'https://via.placeholder.com/150',
      quickLinks: 1,
      openIssues: 0,
      doneIssues: 2,
      boards: ['Board 1', 'Board 2'],
    },
    {
      id: 4,
      title: 'Sample Project 4',
      thumbnail: 'https://via.placeholder.com/150',
      quickLinks: 4,
      openIssues: 0,
      doneIssues: 6,
      boards: ['Board 1', 'Board 2', 'Board 3', 'Board 4'],
    },
    {
      id: 5,
      title: 'Sample Project 5',
      thumbnail: 'https://via.placeholder.com/150',
      quickLinks: 0,
      openIssues: 0,
      doneIssues: 0,
      boards: ['Board 1'],
    },
  ];

  return (
    <Container className='bg-white ps-5 pe-5' fluid>
      <Row className='mb-0'>
        <Col className='m-2 mb-0'>
          <h3 className='text-dark fw-bolder mb-0'>All Projects</h3>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <hr className='w-100' />
        </Col>
      </Row>
      <Row>
        {projects.map((project) => (
          <Col key={project.id} md={3}>
            <Card className="outer-card mb-3 shadow-lg" >
              <Card.Header as="h5" className='ms-1 bg-secondary-subtle'>
                <Row className=''>
                  <Col className='me-2' md={1}>
                    <Image src={project.thumbnail}
                      alt='Project Thumbnail'
                      className="thumbnail "
                    />
                  </Col>
                  <Col>
                    <Card.Title className='fs-5 mb-0 fw-semibold'>{project.title}</Card.Title>
                    <Card.Title className='fs-6 '>{project.title}</Card.Title>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body className='main-card'>
                <Card.Text className="project-item">
                  <span>Quick Links</span>
                  <span>{project.quickLinks}</span>
                </Card.Text>
                <Card.Text className="project-item">
                  <span>My open issues</span>
                  <span>{project.openIssues}</span>
                </Card.Text>
                <Card.Text className="project-item">
                  <span>Done issues</span>
                  <span>{project.doneIssues}</span>
                </Card.Text>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id={`dropdown-${project.id}`}>
                    {project.boards.length} Board{project.boards.length > 1 ? 's' : ''}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {project.boards.map((board, index) => (
                      <Dropdown.Item key={index} href={`#/action-${index}`}>
                        {board}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
