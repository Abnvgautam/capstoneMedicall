import { Card, Col, Row } from 'react-bootstrap'
import avatar from '../testimonials/avatar.svg'
import StarIcon from '@mui/icons-material/Star'
import { yellow } from '@mui/material/colors'
import './testimonials.css'

const Testimonials = () =>{
    return(
        <>
            <Card className='card-feedback'>
                    <Card.Body>
                    <Row>
                        <Col>
                        <img 
                                src={avatar}
                                width="52"
                                height="52"
                                alt="avatarImage"
                                className='avatar-image'
                        />
                         <p className='avatar-name'>Jane Cooper</p>
                         <p className='avatar-date'>12/4/17</p>
                         
                        </Col>
                        <Col>
                        <div className='star-icon'>
                            <StarIcon sx={{ color: yellow[600]}}/>
                            <StarIcon sx={{ color: yellow[600]}}/>
                            <StarIcon sx={{ color: yellow[600]}}/>
                            <StarIcon sx={{ color: yellow[600]}}/>
                            <StarIcon sx={{ color: yellow[600]}}/>
                        </div>
                        </Col>
                        <p className='avatar-para'>Evisit on medicall was fanastic, I had a easy consultation with the doctor and it was a good session as in real life. </p>
                        </Row>
                    </Card.Body>
                </Card>
        </>
    );
};

export default Testimonials;