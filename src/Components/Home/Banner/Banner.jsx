import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import banner1 from './../../../images/banner-1.jpg'
import banner2 from './../../../images/banner-2.jpg'
import banner3 from './../../../images/banner-3.jpg'
import './Banner.css'

// Home page banner component
const Banner = () => {
    return (
        <Container>
            {/* Home page slider container  */}
            <Carousel className="p-3">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="first slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Banner;