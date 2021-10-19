import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Serviceitem.css'

// Home page single service item components

const Serviceitem = (props) => {
    // take data using props 
    const { id, title, img, description } = props.service;

    return (
        <Col>
            {/* single service card */}
            <Card className="card">
                <Card.Img variant="top" src={img} className="card-img" />
                <Card.Body>
                    <Card.Title className="fw-bold">{title}</Card.Title>
                    <Card.Text>{description.slice(0, 150)}</Card.Text>

                    <Link to={`service/${id}`}>
                        <Button variant="info"> Appointment for {title}</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col >
    );
};

export default Serviceitem;