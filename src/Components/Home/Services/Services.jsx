import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Serviceitem from './Serviceitem/Serviceitem'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./medical.json')
            .then(res => res.json())
            .then(data => setServices(data));
        console.log(services.length);
    }, []);
    return (
        <Container>
            <h1 className="text-center py-3">Our <span className="text-primary">Service</span></h1>
            {/* Bootstrap responsive row */}
            <Row xs={1} md={2} lg={3} className="g-4 py-4">
                {
                    // mappimg data from services 
                    services.map(service => <Serviceitem key={service.id} service={service}></Serviceitem>)
                }
            </Row>
        </Container>
    );
};

export default Services;