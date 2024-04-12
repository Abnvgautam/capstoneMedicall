import { Navbar, Nav, Row, Col, Card, Container } from 'react-bootstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './doctorDashboard.css'
import logo from './MEDICALL.svg'
import avatar from './avatar.svg'
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import ChatIcon from '@mui/icons-material/Chat';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout, reset } from '../../features/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux'

const DoctorDashboard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <>
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
                                src={avatar}
                                width="52"
                                height="52"
                                alt="avatarImage"
                                className='avatar-image-doctorTab'
                            />

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* <Container fluid className="container-doctorTab">
        <Row sm={4} md={4} lg={6} className='doctorTab-cards'>
            <Col className='doctor-col'>
            <Card className='doctorTab'></Card>
            <p className='docotorTab-text'>Appointments</p>
            </Col>
            <Col className='doctor-col'>
            <Card className='doctorTab'></Card>
                <p className='docotorTab-text-two'>Schedule</p>
            </Col>
            <Col className='doctor-col'>
            <Card className='doctorTab'></Card>
            <p className='docotorTab-text-two'>Patients</p>
            </Col>
            <Col className='doctor-col'>
            <Card className='doctorTab'></Card>
                <p className='docotorTab-text-two'>Reports</p>
            </Col>
            <Col className='doctor-col'>
            <Card className='doctorTab'></Card>
                <p className='docotorTab-text-two'>Activity</p>
            </Col>
            <Col className='doctor-col'>
            <Card className='doctorTab'></Card>
                <p className='docotorTab-text-two'>Settings</p>
            </Col>
        </Row>
    </Container>
    <p className='appointments-text'>Appointments</p>
    <div className='table-columns'>
        <p className='columns-text'>Upcoming Consultation</p>
        <div className="flex-space"></div>
        <p className='columns-textTwo'>Rescheduled</p>
        <div className="flex-space"></div>
        <p className='columns-textTwo'>Canceled</p>
    </div>
        
    
    <hr className='hr-doctorDashboard' style={{borderTop: "3px solid #000000 "}}></hr>

    <div className='table-columns'>
        <p className='columns-textTwoName'>Name</p>
        <div className="flex-space"></div>
        <p className='columns-textTwo'>Age</p>
        <div className="flex-space"></div>
        <p className='columns-textTwo'>Checkup</p>
        <div className="flex-space"></div>
        <p className='columns-textTwo'>Date</p>
        <div className="flex-space"></div>
        <p className='columns-textTwo'>Time</p>
        
    </div>

    <hr className='hr-doctorDashboard' style={{borderTop: "3px solid #000000 "}}></hr>   
    
    <p className='text-below'>No Appointment at the moment</p> */}

            <Container fluid className='container-patientTab'>
                <Card className='card-patient'>
                    <Card.Body>
                        <Row>
                            <Col>
                                <p className='dashboard-date'>10:12PM September 4, 2024</p>
                                <p className='dashboard-text'>Good Evening, {user.name}</p>
                            </Col>
                            <Col>

                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Row xs={1} sm={2} md={4} lg={4}>
                    <Col>
                        <Card className='card-dashboard'>
                            <NavLink to="/doctors/appointments" activeClassName="active" className="dashboard-content dashboard-link">
                                <BookOnlineIcon /> Appointment
                            </NavLink>
                            <NavLink to="/doctors/chat" activeClassName="active" className="dashboard-content dashboard-link">
                        <ChatIcon /> Chat
                    </NavLink>
                            <NavLink to="/doctors/messages" activeClassName="active" className="dashboard-content dashboard-link">
                                <EmailIcon /> Patients
                            </NavLink>
                            <NavLink to="/doctors/reports" activeClassName="active" className="dashboard-content dashboard-link">
                                <ArticleIcon /> Reports
                            </NavLink>
                            <NavLink to="/" activeClassName="active" className="dashboard-content dashboard-link" onClick={onLogout}>
                                <LogoutIcon /> Logout
                            </NavLink>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='card-dashboard-expand'>
                            <Card.Body className='patient-welcome'>Welcome to your Dashboard</Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default DoctorDashboard;