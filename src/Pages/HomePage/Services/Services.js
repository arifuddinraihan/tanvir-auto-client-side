import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, [])

    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='text-center py-6'>
                <h2 className='font-semibold text-orange-600 py-5'>Total Services: {services.length}</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        services.map(service => <ServiceCard 
                            key={service._id}
                            service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;