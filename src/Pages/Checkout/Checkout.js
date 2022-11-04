import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Checkout = () => {
    const { user, setLoader } = useContext(AuthContext)
    const { _id, title, price } = useLoaderData()

    const handlePlaceOrder = event => {
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstName?.value} ${form.lastName?.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;
        console.log(name, phone, message)

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

        console.log(order)

        fetch(`http://localhost:5000/orders`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset()
                    alert("Your order has been placed")
                }
                console.log(data)
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-4xl">You are about to order: {title}</h2>
                <h4 className="text-3xl">Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>

                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required>
                </textarea>

                <Link to={'/orders'}>
                    <input className='btn' type="submit" value="Place Your Order" />
                </Link>
            </form>
        </div>

    );
};

export default Checkout;