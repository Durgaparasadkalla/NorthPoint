import { Button, Container, Form, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap';

import CreateIssueOrTaskComponent from './CreateIssueOrTaskComponent';
import CreateNewProjectComponent from './CreateNewProjectComponent';
import CreateNewTeamComponent from './CreateNewTeamComponent';
import CustomModalComponent from './CustomModalComponent';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function HeaderComponent() {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState('')

  const handleShow = (content, title) => {
    setModalContent(content)
    setModalTitle(title)
    setShow(true)
  }
  const handleClose = () => setShow(false)
  const navigateToAllProjects = () => {
    console.log("Navigate to all projects screen")
    navigate('/allProjects')
  }
  const navigateToOurWorkSpace = () => {
    console.log("Navigate to our work space")
    navigate('/')
  }
  const navigaetToSelectedProject = () => {
    console.log("navigaetToSelectedProject")
    navigate('projectDashBoard')
  }


  return (
    <div>
      <Navbar expand='sm' className='custom-navbar'>
        <Container fluid>
          <Navbar.Brand href="#">North Point</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
          <Navbar.Offcanvas id="offcanvasNavbar-expand-sm"
            aria-labelledby="offcanvasNavbarLabel-expand-sm"
            placement="start">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">North Point</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-start flex-grow-1 pe-3'>
                <NavDropdown title='Your Work' id="offcanvasNavbarDropdown-expand-sm">
                  <NavDropdown.Item onClick={navigateToOurWorkSpace}>Go to WorkSpace</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Projects' id="offcanvasNavbarDropdown-expand-sm">
                  <NavDropdown.Item onClick={()=>handleShow(<CreateNewProjectComponent handleClose={handleClose} />,"Create New Project")}>Create New Project</NavDropdown.Item>
                  <NavDropdown.Item onClick={navigateToAllProjects}>List Of Projects</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={navigaetToSelectedProject}>Selected Project</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Teams' id="offcanvasNavbarDropdown-expand-sm">
                  <NavDropdown.Item onClick={()=>handleShow(<CreateNewTeamComponent handleClose={handleClose} />,"Create new Team")}>Create New Team</NavDropdown.Item>
                  <NavDropdown.Item >List Of Projects</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action5'>
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Button variant='primary' onClick={() => handleShow(<CreateIssueOrTaskComponent handleClose={handleClose} />, "Create An Issue")}>Create</Button>
                <Button variant='primary' onClick={() => handleShow(<CreateNewTeamComponent handleClose={handleClose} />, "Create An Team")}>Create new Team</Button>
              </Nav>
              <Form className='d-flex '>
                <Form.Control
                  type='search'
                  placeholder='Search'
                  className='me-2'
                  aria-label='Search'
                />
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <CustomModalComponent show={show} handleClose={handleClose} title={modalTitle}>
        {modalContent}
      </CustomModalComponent>
    </div>
  )
}
