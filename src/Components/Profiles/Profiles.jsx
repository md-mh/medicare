import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Profileitem from './Profileitem/Profileitem';

const Profiles = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);

    console.log(doctors);
    return (
        <Container>
            <h1 className="text-center py-3"><span className="text-primary">Our Doctors</span></h1>
            {/* Bootstrap responsive row */}
            <Row xs={1} md={2} lg={3} className="g-4 py-4">
                {
                    // mappimg data 
                    doctors.map(doctor => <Profileitem key={doctor.id} doctor={doctor}></Profileitem>)
                }
            </Row>
        </Container>
    );
};

export default Profiles;