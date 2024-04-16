import React, { useState, useEffect } from 'react';
import './appointment.css'
import '../../pages/patientDashboard/patientDashboard.css'
import { Container, Card, Col, Row, Button } from 'react-bootstrap'
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import HistoryIcon from '@mui/icons-material/History';
import ChatIcon from '@mui/icons-material/Chat';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink, useNavigate } from 'react-router-dom'
import NavbarDashboard from '../navbarDashboard/navbarDashboard';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice';

import axios from 'axios';

const Appointments = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const [filteredBookings, setAppointments] = useState([]);
    const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    // Clean up the interval to prevent memory leaks
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once on mount

    useEffect(() => {
        const fetchData = async () => {

            const baseUrl = '/api/appointments/';

            let url;
            if (user.role === 'patient') {
                url = `${baseUrl}${user._id}`;
            } else {
                url = `${baseUrl}doc/${user._id}/${user.email}`;
            }
            try {

                const response = await axios.get(url);
                setAppointments(response.data);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        fetchData();
    }, []);

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    function GetDate(dateString) {
        const dateObject = new Date(dateString);
        return dateObject.toLocaleDateString();
    }

    let displayName = "";
    if (user && user.role === 'patient') {
        displayName = user.name
    } else if (user && user.role === 'doctor') {
        displayName = user.name
    }

    return (
        <>
            <NavbarDashboard />
            <Container fluid className='container-patientTab'>
                <Card className='card-patient'>
                    <Card.Body>
                        <Row>
                            <Col>
                                <p className='dashboard-date'>{currentTime.toLocaleString()}</p>
                                <p className='dashboard-text'>Good Evening, {displayName}</p>
                            </Col>
                            <Col>

                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Row xs={1} sm={2} md={4} lg={4}>
                    <Col>
                        {user.role === 'doctor' && (
                            <Card className='card-dashboard'>
                                <NavLink to="/doctors/appointments" activeClassName="active" className="dashboard-content dashboard-link">
                                    <BookOnlineIcon /> Appointment
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
                        )}
                        {user.role === 'patient' && (
                            <Card className='card-dashboard'>

                                <NavLink to="/patients/appointments" activeClassName="active" className="dashboard-content dashboard-link">
                                    <BookOnlineIcon /> Appointment
                                </NavLink>
                                <NavLink to="/patients/messages" activeClassName="active" className="dashboard-content dashboard-link">
                                    <EmailIcon /> Messages
                                </NavLink>
                                <NavLink to="/patients/reports" activeClassName="active" className="dashboard-content dashboard-link">
                                    <ArticleIcon /> Reports
                                </NavLink>
                                <NavLink to="/patients/history" activeClassName="active" className="dashboard-content dashboard-link">
                                    <HistoryIcon /> History
                                </NavLink>
                                <NavLink to="/patients/chat" activeClassName="active" className="dashboard-content dashboard-link">
                                    <ChatIcon /> Chat
                                </NavLink>
                                <NavLink to="/" activeClassName="active" className="dashboard-content dashboard-link" onClick={onLogout}>
                                    <LogoutIcon /> Logout
                                </NavLink>
                            </Card>
                        )}

                    </Col>
                    <Col>
                        {user.role === 'patient' ? (
                            <Card className='card-dashboard-expand'>
                                <Card.Body className='appointment-text'>Appointments
                                <Row xs={1} md={2} lg={3} className="g-4"> {/* Define the number of columns for different screen sizes */}
                                        {filteredBookings.map((booking, index) => (
                                            <Col key={index}> {/* Add a unique key to each child component */}
                                                <Card style={{ width: '16rem' }} className='appointment-Card'>
                                                    <Card.Body className='appointment-cardBody'>
                                                        <Card.Title>{booking.doctorName}</Card.Title>
                                                        <Card.Subtitle className="mb-2 text-muted appointment-Time">{booking.appointment_time} | {GetDate(booking.appointment_date)}</Card.Subtitle>
                                                        <Card.Text className='text-muted appointment-Text'>
                                                            You have an appointment. Press the button to join the call with the doctor.
                                                        </Card.Text>
                                                        <Button variant="primary" className='appointment-btn zoom-link'  href='https://conestogac.zoom.us/j/96629257668?pwd=MmhnUlR3aVhDUHM1NE1VUVhyUWg5QT09'>Join Call</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                                </Row>
                                    {/* {filteredBookings.map((booking) => (

                                        // <Card className='card-appointment-call'>
                                        //     <SmartDisplayIcon sx={{ fontSize: 48 }} className='video-icon' />
                                        //     <p className='video-dateTime'>{booking.appointment_time} | {GetDate(booking.appointment_date)} </p>
                                        //     <p className='doctorName-text'>Consultation with {booking.doctorName}</p>
                                        //     <Button variant="primary" className="btn-joinCall"><a className='zoom-link' href='https://conestogac.zoom.us/j/96629257668?pwd=MmhnUlR3aVhDUHM1NE1VUVhyUWg5QT09'>Join Call</a></Button>

                                        // </Card>
                                    ))} */}
                                </Card.Body>

                            </Card>
                        ) : (
                            <Card className='card-dashboard-expand'>
                                <Card.Body className='appointment-text'>Appointments
                                <Row xs={1} md={2} lg={3} className="g-4"> {/* Define the number of columns for different screen sizes */}
                                        {filteredBookings.map((booking, index) => (
                                            <Col key={index}> {/* Add a unique key to each child component */}
                                                <Card style={{ width: '16rem' }} className='appointment-Card'>
                                                    <Card.Body className='appointment-cardBody'>
                                                        <Card.Title>{booking.patientName}</Card.Title>
                                                        <Card.Subtitle className="mb-2 text-muted appointment-Time">{booking.appointment_time} | {GetDate(booking.appointment_date)}</Card.Subtitle>
                                                        <Card.Text className='text-muted appointment-Text'>
                                                        You have a consultation with Patient {booking.patientName}
                                                        </Card.Text>
                                                        <Button variant="primary" className='appointment-btn zoom-link'  href='https://conestogac.zoom.us/j/92082931875?pwd=YkM5WUNiUExNdGJIOEFWRG1icFMxdz09'>Join Call</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                                </Row>
                                    {/* {filteredBookings.map((booking) => (
                                        <Card className='card-appointment-call'>
                                            <SmartDisplayIcon sx={{ fontSize: 48 }} className='video-icon' />
                                            <p className='video-dateTime'>{booking.appointment_time} | {GetDate(booking.appointment_date)} </p>
                                            <p className='doctorName-text'>Consultation with Patient {booking.patientName}</p>
                                            <Button variant="primary" className="btn-joinCall"><a className='zoom-link' href='https://conestogac.zoom.us/j/96629257668?pwd=MmhnUlR3aVhDUHM1NE1VUVhyUWg5QT09'>Join Call</a></Button>
                                        </Card>
                                    ))} */}
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                </Row>
            </Container>


        </>
    );
};

export default Appointments;