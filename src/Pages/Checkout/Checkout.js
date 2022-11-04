import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const {title} = useLoaderData()
    return (
        <div>
            <h2>This is Checkout page of : {title}</h2>
        </div>
    );
};

export default Checkout;