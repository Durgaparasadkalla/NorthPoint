import React, { useState } from 'react';
import { Container, Row, Col, Card, Dropdown } from 'react-bootstrap';


const teams = [
  {
    id: 1,
    title: 'Sample Team 1',
    project: 'Sample Project 1',
    thumbnail: require('../assets/images/Puja.png'),
    Members: ['Member 1', 'Member 2', 'Member 3'],
  },
  {
    id: 2,
    title: 'Sample Team 2',
    project: 'Sample Project 1',
    thumbnail: require('../assets/images/Puja.png'),
    Members: ['Member 1', 'Member 2', 'Member 3'],
  },
  // Add more teams as needed
];


export default function AllTeamsComponent() {
  return (
    <Container>
      <h1>All teams</h1>
      <Row>
        {teams.map((team) => (
          <Col key={team.id} md={3}>
            <Card className="outer-card mb-3" >
              <Card.Header as="h5" className='main-card'>
                <div className="card-header-content ">
                  <img
                    src={team.thumbnail}
                    alt="team Thumbnail"
                    className="thumbnail"
                  />
                  <div>
                    <div>{team.title}</div>
                    <div className="project-title">{team.title}</div>
                  </div>
                </div>
              </Card.Header>
              <Card.Body className='main-card'>
                <Card.Text className="project-item">
                  <span>Project:</span>
                  <span>{team.project}</span>
                </Card.Text>

                <Card.Text className="project-item">
                  <span>Team Members:</span>
                </Card.Text>
                <Card.Text className="project-item">
                  {team.Members.map((member, index) => (
                    <span key={index} href={`#/action-${index}`}>
                      {member}
                      <br />
                    </span>
                  ))}
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}