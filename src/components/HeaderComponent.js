import '@fortawesome/fontawesome-free/css/all.min.css';

import { Button, Col, Container, Form, Image, Nav, NavDropdown, Navbar, Offcanvas, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';

import CreateIssueOrTaskComponent from './CreateIssueOrTaskComponent';
import CreateNewProjectComponent from './CreateNewProjectComponent';
import CreateNewTeamComponent from './CreateNewTeamComponent';
import CustomModalComponent from './CustomModalComponent';
import InviteMemberComponent from './InviteMemberComponent';
import { useNavigate } from 'react-router-dom';

export default function HeaderComponent() {
  const northpoinLogo = require('../assets/images/northfaceliogo.png')
  const profileIcon = require('../assets/images/Puja.png')
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState('');
  const [profileOpen, setProfileOpen] = useState(false);
  const [loginUserInfo, setLoginUserInfo] = useState({});
  const [loginUserFirstChar, setLoginUserFirstChar] = useState('')
  const [loginUserSecondChar, setLoginUserSecondChar] = useState('')
  const [userFirstName, setFirstName] = useState('')
  const [userLastName, setLastName] = useState('')
  const handleShow = (content, title) => {
    try {
      setModalContent(content)
      setModalTitle(title)
      setShow(true)
    } catch (error) {
      console.error("Error handling the modal:", error)
    }

  }
  const handleClose = () => {
    try {
      setShow(false)
    } catch (error) {
      console.error("Error closing the modal:", error)
    }

  }
  const navigateToAllProjects = () => {
    try {
      // console.log("Navigate to all projects screen")
      navigate('/allProjects')
    } catch (error) {
      console.error("Error navigating the all projects screen", error)
    }

  }
  const navigateToOurWorkSpace = () => {
    try {
      navigate('/yourWork')
    } catch (error) {
      console.error("Error navigating the workspace:", error)
    }
  }
  const navigaetToSelectedProject = () => {
    try {
      navigate('/projectDashBoard')
    } catch (error) {
      console.error("Error naviagting to selected project screen:", error)
    }
  }
  const navigaetToAllTeams = () => {
    try {
      navigate('/allTeams')
    } catch (error) {
      console.error("Error navigtaing to all teams:", error)
    }

  }
  const fetchLoginUserInfo = () => {
    setLoginUserInfo(JSON.parse(localStorage.getItem('userData')))

  }
  const onSignOut = () => {
    localStorage.clear();
    navigate('/')
  }
  useEffect(() => {
    fetchLoginUserInfo();
  }, [])
  useEffect(() => {
    if (loginUserInfo && loginUserInfo.loginDetails && loginUserInfo.loginDetails.firstName) {

      console.log("Login User:", loginUserInfo.loginDetails.firstName)
      setFirstName(loginUserInfo.loginDetails.firstName)
      setLastName(loginUserInfo.loginDetails.lastName)
      // setLoginUserFirstChar(loginUserInfo.loginDetails.firstName.charAt(0).toUpperCase())
    }
  }, [loginUserInfo])
  // useEffect(() => {
  //   console.log("userFirstName",userFirstName)
  // },[userFirstName])
  // useEffect(() => {
  //   console.log("loginUserFirstChar",loginUserFirstChar)
  // }, [loginUserFirstChar])
  useEffect(() => {
    if (userFirstName) {
      setLoginUserFirstChar(userFirstName.charAt(0).toUpperCase())
      setLoginUserSecondChar(userLastName.charAt(0).toUpperCase())
    }
  }, [userFirstName])
  useEffect(() => {
    console.log("loginUserFirstChar", loginUserFirstChar)
    console.log("loginUserSecondChar", loginUserSecondChar)
  }, [loginUserFirstChar, loginUserSecondChar])
  return (
    <div className='py-4 mb-3'>
      <Navbar expand='md' className='custom-navbar bg-secondary-subtle fixed-top'>
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
                  <NavDropdown.Item onClick={() => handleShow(<InviteMemberComponent handleClose={handleClose} />, "Invite Members")}>Invite Members</NavDropdown.Item>
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
              {/* <i className="fas fa-user-circle fa-2x" onClick={() => setProfileOpen(!profileOpen)}></i> */}
              {/* <Image className="bg-light" style={{ width: "5%", height: 'auto' }} src='profileImg.png' alt="Dk" roundedCircle /> */}
              {/* <div className="d-flex justify-content-center align-items-center">
                <Image className="bg-light img-fluid " src="sample" alt="Dk" roundedCircle style={{width:"35px",height:"35px"}} />

              </div> */}
              <div className="profile-image-wrapper bg-light rounded-circle d-flex justify-content-center align-items-center mt-2" onClick={() => setProfileOpen(!profileOpen)}>
                <Image className="profile-image" src="Sample.png" alt="" roundedCircle />
                <h2 className="profile-placeholder fw-bolder">{loginUserFirstChar}{loginUserSecondChar}</h2>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <CustomModalComponent show={show} handleClose={handleClose} title={modalTitle}>
        {modalContent}
      </CustomModalComponent>
      <Offcanvas show={profileOpen} onHide={() => setProfileOpen(false)} placement="end" id="offcanvasProfile-expand-lg" aria-labelledby="offcanvasProfileLabel">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasProfileLabel">Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row>
            <Col className='d-flex justify-content-center'>
              <div className="profile-image-wrapper bg-light rounded-circle d-flex justify-content-center align-items-center mt-2" style={{width:'70px',height:'70px'}}>
                <Image className="profile-image" src="Sample.png" alt="" roundedCircle />
                <h2 className="profile-placeholder fw-bolder">{loginUserFirstChar}{loginUserSecondChar}</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-center'>
              {(loginUserInfo && loginUserInfo.loginDetails) && (
                <h4 className='fw-bolder text-secondary'>{loginUserInfo.loginDetails.firstName}</h4>
              )}
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-center'>
              {(loginUserInfo && loginUserInfo.loginDetails) && (
                <h4 className='fw-bolder text-secondary'>{loginUserInfo.loginDetails.organization}</h4>
              )}
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-center'>
              {(loginUserInfo && loginUserInfo.loginDetails) && (
                <h4 className='fw-bolder text-secondary'>{loginUserInfo.loginDetails.role}</h4>
              )}
            </Col>
          </Row>
          <Nav className='flex-column mt-0'>
            {/* <Nav.Link href="#profile">User Profile</Nav.Link>
            <Nav.Link href="#settings">Settings</Nav.Link> */}
            <Nav.Link className='fw-semibold fs-4' href="#logout" onClick={onSignOut}>Logout</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}
