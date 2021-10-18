import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Serviceitem.css'

const Serviceitem = (props) => {
    // take data using props 
    const { title, img, description } = props.service;

    return (
        <Col>
            {/* single service card */}
            <Card className="card">
                <Card.Img variant="top" src={img} className="card-img" />
                <Card.Body>
                    <Card.Title className="fw-bold">{title}</Card.Title>
                    <Card.Text>{description.slice(0, 200)}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Serviceitem;