import React from 'react';
import { Link } from 'react-router-dom';
import LoginImg from '../../assets/images/login/login.svg'

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email , password)
        form.reset()
    }

    return (
        <div className="hero bg-transparent">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2 py-8">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={LoginImg}></img>
                </div>
                <div className="card max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Login now</h1>
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-outline btn-warning" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center mb-4'>New to Genius Car? <Link className='text-orange-600 font-bold' to="/register">Register Here</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;