import { Button,Form, Col, Row } from 'react-bootstrap'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import EmailIcon from '@mui/icons-material/Email';
import FaxIcon from '@mui/icons-material/Fax';
import './contact.css'

const Contact =()=>{
    return(
        <>
            <Form>
                    <Form.Control type="name"  className='form' placeholder="Name *" />
                    <Form.Control type="email"  className='form' placeholder="Email *" />
                    <Form.Control type="email"  className='form' placeholder="Password *" />
                    <Form.Select  className='form'>
                        <option>How did you find us?</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    <Button variant="primary" className='btn-form'>Send</Button> 
                    <Row xs={1} md={3} lg={3}>
                    <Col>
                        <div className='phone-icon'>
                                <PhoneInTalkIcon sx={{ fontSize: 36}} /> 
                                <p className='icon-phone'>Phone</p>
                                <p className='icon-phoneNumber'>03 5432 1234</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='phone-icon'>
                                <FaxIcon sx={{ fontSize: 36}} /> 
                                <p className='icon-phone'>Fax</p>
                                <p className='icon-phoneNumber'>03 5432 1234</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='phone-icon'>
                                <EmailIcon sx={{ fontSize: 36}} /> 
                                <p className='icon-phone'>Email</p>
                                <p className='icon-phoneNumber'>info@marcc.com.au</p>
                        </div>
                    </Col>
                </Row>
                </Form>
        </>
    );
};

export default Contact;