import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Orders = () => {
    const { user } = useContext(AuthContext)
    const [order, setOrder] = useState()
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
            .catch(err => console.error(err))
    }, [user?.email])

    console.log(order)

    return (
        <div className='text-center'>
            <h2>Hello, {user?.email}!</h2>
            <h2>You have order : {order.length} services</h2>
        </div>
    );
};

export default Orders;