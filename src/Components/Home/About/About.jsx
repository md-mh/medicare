import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import doctor1 from './../../../images/doctor1.jpg'
import doctor2 from './../../../images/doctor2.jpg'

const About = () => {
    return (
        <Container>
            <Row className="justify-content-center">

                <Col>
                    <img src={doctor1} alt="doctor_image" />
                </Col>
                <Col>
                    <h1>WHY CHOOSE US</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eveniet, itaque facilis sit ipsum esse ratione! Quaerat eaque ex asperiores. Assumenda, voluptatibus obcaecati mollitia perspiciatis rem tenetur qui possimus sequi!</p>
                </Col>
                <Col>
                    <img src={doctor2} alt="doctor_image" />
                </Col>
            </Row>
        </Container>
    );
};

export default About;