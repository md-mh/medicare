import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, } from 'react-icons/fi';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="py-2">
            <br /><br /><br />
            <Container>
                {/* Footer area  */}
                <Row>
                    <Col md={4}>
                        <h4>IMPORTANT LINK</h4> <br />
                        <p>Doctors List</p>
                        <p>Patient Stories</p>
                        <p>Login</p>
                    </Col>
                    <Col md={4}>
                        <h4>INFORMATION</h4> <br />
                        <p>About Us</p>
                        <p>Terms & Condition</p>
                        <p>Privacy Policy</p>
                    </Col>
                    <Col md={4}>
                        <h4>CONNECT US</h4> <br />
                        <FiLinkedin /><FiFacebook /><FiInstagram /><FiTwitter />
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;