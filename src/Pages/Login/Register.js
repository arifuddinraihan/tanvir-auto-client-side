import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LoginImg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {

    const { user,
        setLoader,
        createUser } = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset()
        })
        .catch(err => console.error(err))
        setLoader(false)
    }

    return (
        <div className="hero bg-transparent">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2 py-8">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={LoginImg}></img>
                </div>
                <div className="card max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Register now</h1>
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Full Name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="text" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required/>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-outline btn-warning" type="submit" value="Register" />
                        </div>
                    </form>
                    <p className='text-center mb-4'>Already have account? <Link className='text-orange-600 font-bold' to="/login">Login Here</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;