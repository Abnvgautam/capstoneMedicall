import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import '../confirmation/confirmationOverlay.css';


const ConfirmationOverlay = ({ isOpen, closeOverlay, selectedDoctorName, selectedDate, selectedTime }) => {
    const navigate = useNavigate();
    const [paymentDone, setPaymentDone] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);

    function GetDate(dateString) {
        const dateObject = new Date(dateString);
        return dateObject.toLocaleDateString();
    }

    const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

    function handlePayment() {
        setIsPaymentProcessing(true);
        setTimeout(() => {
            setIsPaymentProcessing(false);
            setPaymentDone(true);
        }, 3000);
    }

    return (
        <div className={`overlay ${isOpen ? 'active' : ''}`}>
            {paymentDone ? (
                <Card className='confirmation-card'>
                    <div class="confirmation-header">Booking Confirmed</div>
                    <Container fluid>
                        <hr className='hr-line' style={{ borderTop: "3px solid #0360D9 " }}></hr>
                    </Container>
                    <button className="close-btn" onClick={closeOverlay}>&times;</button>
                    <p className='confirmation-text'> Your zoom call consulation is scheduled with </p>
                    {selectedDoctorName && (
                        <p className='confirmation-text confirmation-highlights'> {selectedDoctorName}
                        </p>)}
                    {selectedDate && selectedTime && (
                        <p className='confirmation-text confirmation-highlights'> on{' '}
                            {GetDate(selectedDate)} at {selectedTime}
                        </p>
                    )}
                    <div className='viewContainer'>
                        <Button className="btn-card viewButton" onClick={() => navigate('/patients/appointments')}>
                            View My Appointments
                        </Button>
                    </div>
                </Card>) : (<Card className='confirmation-card'>
                    <div class="confirmation-header">Make Payment</div>
                    <button className="close-btn" onClick={closeOverlay}>&times;</button>

                    {isPaymentProcessing ? (
                        <p className='confirmation-text confirmation-highlights'>Processing payment...</p>
                    ) : (<Form className="payment-form">
                        <Form.Group controlId="formBasicCardNumber">
                            <Form.Label >Card Number</Form.Label>
                            <Form.Control type="text" placeholder="**** **** **** ****" required maxLength={16} pattern="[0-9]{16}" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCardholder">
                            <Form.Label>Cardholder Name</Form.Label>
                            <Form.Control type="text" placeholder="John Doe" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicExpiry">
                            <Form.Label>Expiry Date</Form.Label>
                            <Form.Control type="text" placeholder="MM/YY" required maxLength={5} pattern="[0-9]{2}/[0-9]{2}" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCvc">
                            <Form.Label>CVC</Form.Label>
                            <Form.Control type="text" placeholder="***" required maxLength={3} pattern="[0-9]{3}" />
                        </Form.Group>
                    </Form>)}
                    <div className='viewContainer'>
                        <Button className="btn-card viewButton" disabled={isPaymentProcessing} onClick={handlePayment}>
                            Pay Now
                        </Button>
                    </div>
                </Card>)}
        </div>
    );
};

export default ConfirmationOverlay;