import React from 'react';

const ServiceCard = ({ service }) => {
    const { img, price, title } = service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt={title} /></figure>
            <div className="card-body text-start">
                <h2 className="card-title">{title}</h2>
                <div className="flex items-center">
                    <p className='text-orange-600 font-semibold'>Price: ${price}</p>
                    <button className="btn btn-warning rounded-lg">Get Service</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;