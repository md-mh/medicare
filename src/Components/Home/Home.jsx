import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Services from './Services/Services';

const Home = () => {
    return (
        <>
            {/* Home page  */}
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Contact></Contact>

        </>
    );
};

export default Home;