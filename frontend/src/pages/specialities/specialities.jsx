import React, { useState, useEffect } from 'react'
import ChooseUs from "../../components/chooseUs/chooseUs"
import Footer from "../../components/footer/footer"
import Navigation from "../../components/navbar/navbar"
import Services from "../../components/services/services"
import Support from "../../components/support/support"
import Container from 'react-bootstrap/Container'
import { Button, Card, Form, Col, Row } from 'react-bootstrap'
import './specialities.css'
import doctorImage from './doctor.svg'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ConfirmationOverlay from "../../components/confirmation/confirmationOverlay"
import axios from 'axios';
import ZoomMtg from '@zoom/meetingsdk';
import qs from 'querystring'

const Specialities = () => {
    const navigate = useNavigate();
    const [specialties, setSpecialties] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);


    const [selectedSpecialty, setSelectedSpecialty] = useState('');
    const [doctors, setDoctors] = useState([]);
    const [filteredBookings, setAppointments] = useState([]);

    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { user } = useSelector((state) => state.auth);
    const [selectedDate, setSelectedDate] = useState(GetDate(new Date().toISOString()));
    const [selectedDoctor, setselectedDoctor] = useState(null);
    const [selectedDoctorName, setselectedDoctorName] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const [meetingDetails, setMeetingDetails] = useState(null);
    const [sdkInitialized, setSdkInitialized] = useState(false);




    const [formData, setFormData] = useState({
        doctor: doctors._id,
        patient: user._id,
        appointment_date: '2024-03-18T10:00:00.000+00:00',
        appointment_time: '12:00 PM',
        status: 'Confirmed',
        notes: 'This is test from UI',
    });

    const API_URL = '/api/specialty'

    const handleSearch = () => {
        setShowResults(true);
    };

    const handleSpecialtyChange = async (event) => {
        const chosenSpecialtyId = event.target.value;
        setSelectedSpecialty(chosenSpecialtyId);
        console.log(chosenSpecialtyId);
        try {
            const response = await axios.get(`/api/doctors/${chosenSpecialtyId}`);
            setDoctors(response.data);
            setFilteredDoctors(response.data);
        } catch (error) {
            console.error('Error fetching doctors:', error);
        }
    };


    const handleDoctorChange = async (event) => {
        const selectedDoctorId = event.target.value;
        try {
            if (selectedDoctorId !== "All Doctors")
                setFilteredDoctors(doctors.filter(doctor => doctor._id === selectedDoctorId));
            else
                setFilteredDoctors(doctors);
        } catch (error) {
            console.error('Error fetching doctors:', error);
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await axios.get(API_URL);
                setSpecialties(response.data);
            } catch (error) {
                console.error('Error fetching specialties:', error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);


    const handleDateChange = async (doctorName, doctorId, selectedDate) => {
        setselectedDoctor(doctorId);
        setselectedDoctorName(doctorName);
        setSelectedDate(selectedDate);
        const sDate = new Date(selectedDate);
        try {
            const response = await axios.get(`/api/appointments/${doctorId}/${sDate.toISOString().split('T')[0] + 'T18:30:00.000+00:00'}`);
            setAppointments(response.data);
        } catch (error) {
            console.error('Error fetching appointments:', error);
        }
    };

    const handleSubmit = async (fdoctorId, doctorName) => {
        setselectedDoctor(fdoctorId);
        setselectedDoctorName(doctorName);
        setSelectedDate(selectedDate);
        setErrorMessage('');
        const formData = {
            doctor: fdoctorId,
            patient: user._id, // Optional: reset if necessary
            appointment_date: GetDate(selectedDate),
            appointment_time: selectedTime,
            status: 'Confirmed',
            notes: 'This is dynamic date based on selected doctor',
        };

        try {

            const endpoint = '/api/appointments/create';
            const response = await axios.post(endpoint, formData);
            setSuccessMessage('Appointment created successfully!');

            setFormData({ // Clear form data after successful creation
                doctor: '',
                patient: '', // Optional: reset if necessary
                appointment_date: '',
                appointment_time: '',
                status: 'Confirmed',
                notes: '',
            });
            setShowConfirmation(true);
            const sDate = new Date(selectedDate);
            try {
                const response = await axios.get(`/api/appointments/${fdoctorId}/${sDate.toISOString().split('T')[0] + 'T18:30:00.000+00:00'}`);
                setAppointments(response.data);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        } catch (error) {
            console.error('Error creating appointment:', error.response.data || error.message);
            setErrorMessage(error.response.data?.message || 'An error occurred. Please try again.');
        }
    }


    function GetDate(dateString) {
        const dateObject = new Date(dateString);
        return dateObject.toLocaleDateString();
    }

    const timeLabels = ["09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"];

    function createTimeRows() {
        const rows = [];
        for (let i = 0; i < timeLabels.length; i += 2) {
            const row = timeLabels.slice(i, i + 2); // Get a sub-array of 2 elements
            rows.push(row);
        }
        return rows;
    }

    const timeRows = createTimeRows();

    return (
        <>
            <Navigation />
            {showConfirmation && (
                <ConfirmationOverlay
                    isOpen={showConfirmation}
                    closeOverlay={() => setShowConfirmation(false)}
                    selectedDoctorName={selectedDoctorName}
                    selectedDate={selectedDate}
                    selectedTime={selectedTime}
                    navigate={navigate}
                />
            )}
            <Container fluid className='specialities-blue'>
                <Card className='specialities-card'>
                    <Card.Body className='cardText'>Book an Appointment</Card.Body>
                    <Container>
                        <Row xs={1} sm={2} md={3} lg={3} className="g-0">
                            <Col>
                                {isLoading && <p>Loading specialties...</p>}
                                {error && <p>Error: {error.message}</p>}
                                {!isLoading && !error && (
                                    <Form.Select aria-label="Speciality select" id="Specialities" className="select-form" onChange={handleSpecialtyChange} >
                                        <option key="default">Select a Specialty</option>
                                        {specialties.map((specialty) => (
                                            <option key={specialty._id} value={specialty._id}>
                                                {specialty.Specialty}
                                            </option>
                                        ))}
                                    </Form.Select>
                                )}
                            </Col>
                            <Col>
                                {(
                                    <Form.Select aria-label="Doctor's select" id="Doctors" className="select-form" onChange={handleDoctorChange} >
                                        <option key="default">All Doctors</option>
                                        {doctors.map((doctor) => (
                                            <option key={doctor._id} value={doctor._id}>
                                                {doctor.name}
                                            </option>
                                        ))}
                                    </Form.Select>
                                )}
                                {selectedSpecialty && doctors.length === 0 && <p>No doctors found for this Specialty.</p>}
                            </Col>
                            <Col>
                                <Button variant="primary" className='btn-card' onClick={handleSearch}>Search</Button>
                            </Col>
                        </Row>
                    </Container>
                </Card>
                {showResults && (
                    <>
                        <p className="result">Panel List</p>
                        <div className="doctor-card-container">
                            {filteredDoctors.map((fdoctor) => (
                                <Card id={fdoctor._id} className="specialities-card-big">
                                    <Container>
                                        <Row xs={1} sm={2} md={2} lg={3} className="g-0">
                                            <Col>
                                                <img
                                                    src={doctorImage}
                                                    height="177"
                                                    width="189"
                                                    alt="doctorImage"
                                                    className="doctor-image"
                                                />
                                                <p className="doctor-name">{fdoctor.name}</p>
                                                <p className="doctor-desc">{fdoctor.bio}</p>
                                            </Col>
                                            <Col>
                                                <p className="doctor-select">Select Date</p>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DateCalendar onChange={(selectedDate) => handleDateChange(fdoctor.name, fdoctor._id, selectedDate)} />
                                                </LocalizationProvider>
                                            </Col>
                                            <Col>
                                                <div className="date-chips">
                                                    {timeRows.map((row, index) => (
                                                        <Stack key={index} direction="row" spacing={1} className="date-chips-stack">
                                                            <Chip label={row[0]} color="primary" variant={selectedDoctor === fdoctor._id
                                                                && filteredBookings?.some((booking) => booking.appointment_time === row[0]) ? "primary" : "outlined"}
                                                                onClick={() => {
                                                                    setSelectedTime(row[0]);
                                                                }}
                                                                style={{ backgroundColor: selectedTime === row[0] ? "#b5ddee" : '' }}
                                                                disabled={selectedDoctor === fdoctor._id
                                                                    && filteredBookings?.some((booking) => booking.appointment_time === row[0])}
                                                            />
                                                            <Chip label={row[1]} color="primary" variant={selectedDoctor === fdoctor._id && filteredBookings?.some((booking) => booking.appointment_time === row[1]) ? "primary" : "outlined"} onClick={() => {
                                                                setSelectedTime(row[1]);
                                                            }}
                                                                style={{ backgroundColor: selectedTime === row[1] ? "#b5ddee" : '' }}
                                                                disabled={selectedDoctor === fdoctor._id
                                                                    && filteredBookings?.some((booking) => booking.appointment_time === row[1])}
                                                            />
                                                        </Stack>
                                                    ))}
                                                </div>
                                                <Button variant="primary" className="btn-booking" onClick={() => handleSubmit(fdoctor._id, fdoctor.name)} >
                                                    Book Now
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card>
                            ))}
                        </div>
                    </>
                )}
            </Container>
            <Services />
            <ChooseUs />
            <Support />
            <Footer />
        </>
    );
};


export default Specialities;