import { Button, Container, Col, Row, Image } from 'react-bootstrap'
import homepage from '../home/homepage.svg'
import Navigation from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import BookingCard from '../../components/bookingCard/bookingCard';
import ChooseUs from '../../components/chooseUs/chooseUs';
import Support from '../../components/support/support';
import Services from '../../components/services/services';
import Contact from '../../components/contact/contact';
import './home.css'
import { useNavigate } from 'react-router-dom';
import getintouch from '../home/getintouch.svg'



const Home = () => {

    const navigate = useNavigate();

    const handleNavigateToSpecialities = () => {
        navigate('/specialities');
    };
    return (
        <>
            <Navigation />
            <Container fluid className="container-style">
                <div className="d-flex justify-content-end">
                    <div className="justify-content-end">
                        <p className='text-left homeText'>Get Online Advice From <span style={{ color: '#0360D9' }}>Healthcare Professional</span> For Your Health Concerns</p>
                        <Button variant="primary" className='btn-chat homeButton' onClick={handleNavigateToSpecialities}>Make an Appointment</Button>
                    </div>
                    <img
                        src={homepage}
                        width="600"
                        height="500"
                        className="d-inline-block align-top image-home"
                        alt="HomepageImage"
                    />
                </div>
                <BookingCard />
            </Container>
            <Container fluid className='container-style-blue'></Container>

            <Services />
            <ChooseUs />
            <Support />

            <Container>
                <Row xs={1} md={2} lg={2}>
                    <Col>
                        <p className='text-left text-touch'>Get in <span style={{ color: '#0360D9' }}>Touch</span> </p>
                        <p className='text-left text-touch-para'>Reach out and connect with us for all your healthcare needs. Our online platform offers access to a range of services, from general consultations to specialized care, providing you with convenience and expert guidance.</p>
                        <Contact />
                    </Col>
                    <Col>
                        <Image src={getintouch} alt="Image" fluid className='getInTouch' />
                    </Col>
                </Row>
            </Container>
            <Footer />

        </>
    );
}


export default Home;