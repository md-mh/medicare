import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';

// Single service page details component 

const Singleservice = () => {
    const { serviceId } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({});
    useEffect(
        () => {
            fetch('/medical.json')
                .then(res => res.json())
                .then(data => setServiceDetails(data))
        }, []);

    useEffect(
        () => {
            const foundServices = serviceDetails.find(service => service.id === serviceId)
            setSingleService(foundServices);
        }, [serviceDetails])
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1 className="my-5 text-primary text-center"> Our {singleService?.title} Service</h1>
                    <img src={singleService?.img} alt="service" height="400px" />
                    <p className="my-3"> {singleService?.description} </p>
                    <Button variant="info" className="mb-5">Appointment Now</Button>
                </Col>
            </Row>
        </Container>

    );
};

export default Singleservice;