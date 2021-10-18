import React from 'react';
import { Form, Button, Row, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Sociallogin from './Sociallogin';

const Registration = () => {
    const { error, handleRegistration, handlename, handleemail, handlepassword } = useAuth();
    return (
        <Container>
            <Row className="my-5">
                <Col md={{ span: 4, offset: 1 }}>
                    <h2>Please  Registration </h2><br />

                    <Form onSubmit={handleRegistration}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onBlur={handlename} type="text" placeholder="Enter your nickname" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleemail} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlepassword} type="password" placeholder="Password" />
                        </Form.Group>
                        <p className="text-danger">{error}</p>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col md={{ span: 4, offset: 1 }}>
                    <Sociallogin></Sociallogin>
                    <span>Already have an Account <Link to="/login"> Please Login</Link> </span>
                </Col>
            </Row>
        </Container>
    );
};

export default Registration;