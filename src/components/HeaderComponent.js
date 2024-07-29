import { Button, Container, Form, Image, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap';

import CreateIssueOrTaskComponent from './CreateIssueOrTaskComponent';
import CreateNewProjectComponent from './CreateNewProjectComponent';
import CreateNewTeamComponent from './CreateNewTeamComponent';
import CustomModalComponent from './CustomModalComponent';
import InviteMemberComponent from './InviteMemberComponent';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function HeaderComponent() {
  const northpoinLogo = require('../assets/images/northfaceliogo.png')
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
    navigate('/yourWork')
  }
  const navigaetToSelectedProject = () => {
    console.log("navigaetToSelectedProject")
    navigate('/projectDashBoard')
  }
  const navigaetToAllTeams = () => {
    console.log("navigaetToAllTeams")
    navigate('/allTeams')
  }


  return (
    <div className='py-4 mb-3'>
      <Navbar expand='sm' className='custom-navbar bg-secondary-subtle fixed-top'>
        <Container fluid>
          <Navbar.Brand href="#" className='text-light d-flex align-items-center'>
            <Image className='ms-3' src={northpoinLogo} width="180" height="30" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
          <Navbar.Offcanvas id="offcanvasNavbar-expand-sm"
            aria-labelledby="offcanvasNavbarLabel-expand-sm"
            placement="start">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">North Point</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-start flex-grow-1 pe-3'>
                <NavDropdown title={<span className='text-dark fw-semibold'>Your work</span>} id="offcanvasNavbarDropdown-expand-sm" className='m-1'>
                  <NavDropdown.Item onClick={navigateToOurWorkSpace} className='text-dark'>Go to WorkSpace</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={<span className='text-dark fw-semibold'>Projects</span>} id="offcanvasNavbarDropdown-expand-sm" className='m-1'>

                  <NavDropdown.Item onClick={() => handleShow(<CreateNewProjectComponent handleClose={handleClose} />, "Create New Project")}>Create New Project</NavDropdown.Item>
                  <NavDropdown.Item onClick={navigateToAllProjects}>List Of Projects</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={navigaetToSelectedProject}>Selected Project</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={<span className='text-dark fw-semibold'>Teams</span>} id="offcanvasNavbarDropdown-expand-sm" className='m-1 me-4'>
                  <NavDropdown.Item onClick={() => handleShow(<CreateNewTeamComponent handleClose={handleClose} />, "Create new Team")}>Create New Team</NavDropdown.Item>
                  <NavDropdown.Item >List Of Teams</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => handleShow(<InviteMemberComponent handleClose={handleClose}/>, "Invite Members")}>Invite Members</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={navigaetToAllTeams} >All Teams</NavDropdown.Item>
                  {/* <NavDropdown.Item href='#action5' >Something else here</NavDropdown.Item> */}
                </NavDropdown>
                <Button className='rounded-2 shadow-lg fw-semibold' variant='outline-primary' onClick={() => handleShow(<CreateIssueOrTaskComponent handleClose={handleClose} />, "Create An Issue")}>Create Issue</Button>
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
