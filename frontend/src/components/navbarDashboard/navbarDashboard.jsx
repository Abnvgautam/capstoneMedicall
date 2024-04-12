import '../navbar/style.css'
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';
import logo from '../navbar/MEDICALL.svg'
import './navbarDashboard.css'
import Patient from './Patient.svg'
import Doctor from './Doctor.svg'
import { useSelector } from 'react-redux'

const NavbarDashboard = () => {
  const { user } = useSelector((state) => state.auth)
  return (
    <>
      {user.role === 'patient' && (
        <Navbar bg="light" data-bs-theme="light" className="navbar-length navbar-color">
          <Container fluid >
            <Navbar.Brand as={Link} to="/">
              <img
                src={logo}
                width="159"
                height="42"
                alt="Logo"
                className="d-inline-block align-top medicallLogo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto navbar-content " >
                <Nav.Link as={NavLink} to="/" className='nav-link-navbar'>Home</Nav.Link>
                <Nav.Link as={NavLink} to="/ourdoctors" className='nav-link-navbar'>Our Doctors</Nav.Link>
                <Nav.Link as={NavLink} to="/specialities" className='nav-link-navbar'>Specialities</Nav.Link>
                <Nav.Link as={NavLink} to="/aboutus" className='nav-link-navbar'>About Us</Nav.Link>
              </Nav>
              <Nav className="ml-auto buttons">
                {/* <p className='avatar-name-dashboard'>{user.name}</p> */}
                <img
                  src={Patient}
                  width="52"
                  height="52"
                  alt="avatarImage"
                  className='avatar-image-dashboard'
                  title={user.name}
                />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}

      {user.role === 'doctor' && (
        <Navbar bg="light" data-bs-theme="light" className="navbar-length navbar-color">
          <Container fluid >
            <Navbar.Brand as={Link} to="/">
              <img
                src={logo}
                width="159"
                height="42"
                alt="Logo"
                className="d-inline-block align-top medicallLogo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto navbar-content navbar-doctorTab" >
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/messages">Messages</Nav.Link>
              </Nav>
              <Nav className="ml-auto buttons">
                <p className='avatar-name-doctorTab'>Hi, {user.name}</p>
                <img
                  src={Doctor}
                  width="52"
                  height="52"
                  alt="avatarImage"
                  className='avatar-image-doctorTab'
                />

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      )}

    </>

  );
};

export default NavbarDashboard;