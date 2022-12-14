import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Homepage = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Homepage;