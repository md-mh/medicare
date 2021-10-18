import React from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Sociallogin from './Sociallogin';

const Login = () => {
    const { error, handleemail, handlepassword, handleLogin } = useAuth();



    return (
        <Container>
            <Row className="my-5">
                <Col md={{ span: 4, offset: 1 }}>
                    <h2>Please Login</h2><br />
                    <Form onSubmit={handleLogin}>
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
                    <span>Don't have an Account <Link to="/registration"> Please Registration</Link> </span>
                </Col>
            </Row>

        </Container>
    );
};

export default Login;