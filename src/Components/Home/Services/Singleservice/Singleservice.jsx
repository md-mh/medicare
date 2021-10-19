import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from "react-router-dom";

const Singleservice = () => {
    const { slug } = useParams();
    const [service, setService] = useState([]);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('./review.json')
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    useEffect(() => {
        const found = service.find(single => single.id === slug)
        setDetails(found)
    }, [service, slug])

    console.log(service);
    console.log(details);
    return (
        <Container>
            <h1 className="text-center py-3"><span className="text-primary">Our Service {slug}</span></h1>

        </Container>
    );
};

export default Singleservice;