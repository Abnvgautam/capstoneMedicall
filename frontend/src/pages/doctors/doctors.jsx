import Footer from "../../components/footer/footer"
import Navigation from "../../components/navbar/navbar"
import Support from "../../components/support/support"
import { Container } from "react-bootstrap";
import { Button, Card, Form, Col, Row } from 'react-bootstrap'
import doctorTeam from './doctorTeam.svg'
import './doctors.css'
import iconOne from './iconOne.png'
import iconTwo from './iconTwo.png'
import doctorOne from './David.jpg'
import doctorTwo from './Evelyn.jpg'
import doctorThree from './Jacob.jpg'


const Doctors = () => {
    return (
        <>
            <Navigation />
            {/* <Container fluid className="ourDoctors-blue">
        <Card className='ourDoctors-card'>
                    <Card.Body className='cardText'>Book an Appointment</Card.Body>
                    <Container>
                        <Row xs={1} sm={2} md={6} lg={6} className="g-0">
                            <Col>
                                <Form.Select aria-label="Default select example" className='select-form'>
                                    <option>Specialities</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Select aria-label="Default select example" className='select-form'>
                                    <option>Doctor's</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Select aria-label="Default select example" className='select-form'>
                                    <option>Date</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Select aria-label="Default select example" className='select-form'>
                                    <option>Time</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                            <Col>
                                <Button variant="primary" className='btn-card'>Search</Button>
                            </Col>
                        </Row>
                    </Container>
                </Card>
        </Container> */}
            <Container fluid className="doctors-specialities">
                <img
                    src={doctorTeam}
                    width="1205"
                    height="760"
                    alt="doctorteam"
                    className="doctor-team"

                />
                <Row>
                    <Col>
                        <p className="doctor-team-text">Health always begins with a healthy life style. Being healthy will makes you happier.</p>
                    </Col>
                    <Col>
                        <p className="doctor-teamText-two">
                            Knee joint replacement is a surgery to
                            replace a knee joint with a man-made artificial joint.
                            <Row className="icons-row">
                                <Col>
                                    <img
                                        src={iconOne}
                                        width="40"
                                        height="40"
                                        alt="iconOne"
                                    />
                                    <p className="iconOne-text">3 KM</p>
                                    <p className="iconOne-textTwo">From Hospital</p>
                                </Col>
                                <Col>
                                    <img
                                        src={iconTwo}
                                        width="40"
                                        height="40"
                                        alt="iconTwo"
                                    />
                                    <p className="iconOne-text">5 KM</p>
                                    <p className="iconOne-textTwo">From Pharmacy</p>
                                </Col>
                            </Row>

                        </p>

                    </Col>
                </Row>
            </Container>

            <Container>
                <p className='text-center text-containerNext'>Our Doctors</p>
                <Card className='ourDoctors-card-two'>
                    <Row>
                        <Col>
                            <img
                                src={doctorOne}
                                width="320"
                                height="340"
                                alt="doctorOne"
                                className="doctor-one"
                            />
                        </Col>
                        <Col>
                            <p className="doctor-one-name">Dr Sean Paul</p>
                            <p className="doctor-one-para">Dr. Sean Paul is a highly experienced and compassionate dermatologist known for his expertise in addressing a wide spectrum of skin concerns. His practice extends beyond dermatology, encompassing general medicine and internal medicine, showcasing his versatility in providing holistic healthcare solutions. </p>
                            <p className="doctor-one-name">Specialities</p>
                            <p className="doctor-one-para">General Medicine , Dematology , Internal Medicine</p>
                            <Button variant="primary" className='btn-card-doctor'>Book Now</Button>
                        </Col>
                    </Row>
                </Card>
            </Container>

            <Container>
                <Card className='ourDoctors-card-two'>
                    <Row>
                        <Col>
                            <img
                                src={doctorTwo}
                                width="320"
                                height="340"
                                alt="doctorOne"
                                className="doctor-one"
                            />
                        </Col>
                        <Col>
                            <p className="doctor-one-name">Dr Evelyn Sanchez</p>
                            <p className="doctor-one-para">Dr. Evelyn Sanchez is a highly experienced and compassionate dermatologist known for his expertise in addressing a wide spectrum of skin concerns. His practice extends beyond dermatology, encompassing general medicine and internal medicine, showcasing his versatility in providing holistic healthcare solutions. </p>
                            <p className="doctor-one-name">Specialities</p>
                            <p className="doctor-one-para">General Medicine , Dematology , Internal Medicine</p>
                            <Button variant="primary" className='btn-card-doctor'>Book Now</Button>
                        </Col>
                    </Row>
                </Card>
            </Container>

            <Container>
                <Card className='ourDoctors-card-two'>
                    <Row>
                        <Col>
                            <img
                                src={doctorThree}
                                width="320"
                                height="340"
                                alt="doctorOne"
                                className="doctor-one"
                            />
                        </Col>
                        <Col>
                            <p className="doctor-one-name">Dr Jacob Nord</p>
                            <p className="doctor-one-para">Dr. Jacob Nord is a highly experienced and compassionate dermatologist known for his expertise in addressing a wide spectrum of skin concerns. His practice extends beyond dermatology, encompassing general medicine and internal medicine, showcasing his versatility in providing holistic healthcare solutions. </p>
                            <p className="doctor-one-name">Specialities</p>
                            <p className="doctor-one-para">General Medicine , Dematology , Internal Medicine</p>
                            <Button variant="primary" className='btn-card-doctor'>Book Now</Button>
                        </Col>
                    </Row>
                </Card>
            </Container>

            <Support />
            <Footer />
        </>
    );

};

export default Doctors;