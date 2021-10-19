import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import doctor1 from './../../../images/doctor1.jpg'
import doctor2 from './../../../images/doctor2.jpg'

// Home page why choose us component  
const About = () => {
    return (
        <Container>
            <Row className="align-items-center my-5">

                <Col md={4}>
                    <img src={doctor1} alt="doctor_image" />
                </Col>
                <Col md={4}>
                    <div className="py-5">
                        <h1>WHY <span className="text-primary">CHOOSE</span> US</h1> <br />
                        <p>When you visit Medicare, you’ll gain access to advanced technology, treatments and research that may not be available elsewhere. You can feel confident that you’re being treated by our world-renowned experts, who deliver compassionate, comprehensive and individualized care.</p>
                        <Link to='/review'>
                            <Button variant="info">Please see patient stories</Button>
                        </Link>
                    </div>
                </Col>
                <Col md={4}>
                    <img src={doctor2} alt="doctor_image" />
                </Col>
            </Row>
        </Container>
    );
};

export default About;