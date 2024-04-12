import Navigation from "../../components/navbar/navbar"
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
import {Container, Row, Col} from 'react-bootstrap'
import './about.css'
import doctorTeam from './doctorTeam.svg'
import iconOne from './iconOne.png'
import iconTwo from './iconTwo.png'
import doctorOne from './doctorOne.svg'
import doctorTwo from './doctorTwo.png'

const About = () => {
    return (
        <>
        <Navigation />
        <Container fluid className="about-container">
            <p className="about-heading">About Us</p>
            <p className="about-para">Welcome to Medicall, where healthcare meets convenience and compassion. At Medicall, we're committed to transforming the way you access and experience healthcare. Our platform is designed to provide seamless virtual consultations, efficient appointment booking, and secure management of your medical records.</p>
            <p className="about-heading-two">Who We Are</p>
            <p className="about-para">Medicall is a dedicated team of healthcare professionals, technology experts, and passionate individuals who believe in making quality healthcare accessible to everyone. With a focus on innovation and user-centricity, we aim to empower individuals to take control of their health and well-being.</p>
            <Container fluid >
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
                                alt="iconOne"
                         />
                                <p className="iconOne-text">5 KM</p>
                                <p className="iconOne-textTwo">From Pharmacy</p>
                        </Col>
                    </Row>
                    
                </p>
                
                </Col>
            </Row>
            </Container>
            
        </Container>
       
        <p className="offer-heading">What we offer</p>
        <p>
            <ul className="list-one">
                <li>Virtual Consultations: Connect with trusted and experienced doctors virtually. Whether it's a routine check-up or addressing a specific health concern, our platform ensures that you can access healthcare services from the comfort of your home.</li>
                <li>Appointment Booking: Easily find and book appointments with skilled healthcare professionals. Our user-friendly interface simplifies the process, allowing you to schedule appointments that suit your schedule.</li>
                <li>Secure Medical Records: Your health records are valuable, and we prioritize their security. Medicall provides a safe and encrypted space for you to store and manage your medical history, facilitating better collaboration between you and your healthcare providers.</li>
                <li>Effortless Billing and Payments: Transparent and straightforward, our billing system lets you view consultation charges, make secure payments, and receive digital receipts seamlessly.</li>
            </ul>
        </p>
        <p className="offer-heading-two">Why Choose Medicall </p>
        <p>
            <ul className="list-one">
                <li>Expertise: Our platform connects you with experienced doctors across various specialties, ensuring that you receive top-notch healthcare advice and services.</li>
                <li>Convenience: We understand the importance of time and convenience. With Medicall, you can access healthcare services without the need to travel, saving you time and effort.</li>
                <li>Privacy and Security: Your privacy matters. Medicall employs robust security measures to safeguard your personal and medical information, ensuring confidentiality and peace of mind.</li>
             </ul>
        </p>
        <img 
            src={doctorOne}
            width="1095"
            height="250"
            alt="doctorOne"
            className="about-image"
            
        />
        <Container>
                <Row>
                    <Col className="about-contact">
                        <p className='text-left text-touch'>Get in <span style={{ color: '#0360D9' }}>Touch</span> </p>
                        <p className='text-left text-touch-para'>Reach out and connect with us for all your healthcare needs. Our online platform offers access to a range of services, from general consultations to specialized care, providing you with convenience and expert guidance.</p>  
                    <Contact />
                    </Col>
                    <Col>
                    <img 
                        src={doctorTwo}
                        width="430"
                        height="425"
                        alt="doctorTwo"
                        className="doctorTwo-image"
                    />
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <hr className='hr-line-about' style={{borderTop: "3px solid #0360D9 "}}></hr>
            </Container>

            <Footer />
       </>
    );
};


export default About;