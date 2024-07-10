import React from 'react';
import { Container, Row, Col, Card, Dropdown } from 'react-bootstrap';

export default function AllProjectsComponent() {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'Sample Project 1',
      thumbnail:require('../assets/images/Puja.png'),
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
    <Container>
      <h1>All Projects</h1>
      <Row>
        {projects.map((project) => (
          <Col key={project.id} md={3}>
            <Card className="outer-card mb-3" >
              <Card.Header as="h5" className='main-card'>
                <div className="card-header-content ">
                  <img
                    src={project.thumbnail}
                    alt="Project Thumbnail"
                    className="thumbnail"
                  />
                  <div>
                    <div>{project.title}</div>
                    <div className="project-title">{project.title}</div>
                  </div>
                </div>
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
