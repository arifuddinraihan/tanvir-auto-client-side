import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [allServices, setAllServices] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(3);

    useEffect(() => {
        fetch(`http://localhost:5000/services?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                const { count, services } = data
                setCount(count)
                setAllServices(services)
            })
    }, [page, size])

    const pages = Math.ceil(count / size)

    return (
        <div className='flex flex-col items-center'>
            <div className='text-center my-8'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='text-center py-6 mx-8'>
                <h2 className='font-semibold text-orange-600 py-5'>Total Services: {allServices.length}</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        allServices.map(service => <ServiceCard
                            key={service._id}
                            service={service}></ServiceCard>)
                    }
                </div>
            </div>
            <div className='flex gap-8 my-4 mx-auto items-center'>
                <div>
                    <p>Selected Page : {page} & Size : {size}</p>
                    <div className="tabs bg-amber-300">
                        {
                            [...Array(pages).keys()].map(number =>
                                <NavLink
                                    onClick={() => setPage(number)}
                                    className={page === number ? 'tab tab-lifted tab-active' : 'tab tab-lifted'}>
                                    {number}
                                </NavLink>)
                        }
                    </div>
                </div>
                <div>
                    <select onChange={event => setSize(event.target.value)}
                        className="select select-warning w-full max-w-xs">
                        <option value="2" >2</option>
                        <option value="3" selected>3</option>
                        <option value="6" >6</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Services;