import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, setLoader, logOut } = useContext(AuthContext)
    const [orders, setOrders] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}` , {
            headers : {
                authoraization: `Bearer ${localStorage.getItem('auto-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403){
                    logOut()
                }
                return res.json()
            })
            .then(data => {
                setOrders(data)
            })
    }, [user?.email])
    
    const handleDelete = id => {
        const proceed = window.confirm("Are you sure, deleting this order?")
        if (proceed) {
            console.log("Delete button working", id)
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0){
                        const remaining = orders.filter(odr => odr._id !== id)
                        setOrders(remaining)
                        // alert("Delete Successfully")
                    }
                })
        }
    }

    const handleStatusUpdate = id => {
        console.log("status button working", id)
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "PATCH",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({status : "Approved"})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== id)
                    const approving = orders.find(odr => odr._id === id)
                    approving.status = 'Approved';
                    const newOrders = [approving,...remaining]
                    setOrders(newOrders)
                    // alert("Updated Successfully")
                }
            })
    }

    return (
        <div className='text-center'>
            <h2>Hello, {user?.email}!</h2>
            <h2>You have order : {orders.length} services</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                                ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;