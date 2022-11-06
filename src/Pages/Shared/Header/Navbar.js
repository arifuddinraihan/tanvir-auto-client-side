import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }

    const menuItems =
        <>
            {
                user ?
                    <>
                        <li className='font-semibold'>
                            <NavLink to='/'
                                className={({ isActive }) => isActive ? 'btn btn-outline btn-warning' : undefined}>
                                Home
                            </NavLink>
                        </li>
                        <li className='font-semibold'>
                            <NavLink to='/services'
                                className={({ isActive }) => isActive ? 'btn btn-outline btn-warning' : undefined}>
                                Services
                            </NavLink>
                        </li>
                        <li className='font-semibold'>
                            <NavLink to='/orders'
                                className={({ isActive }) => isActive ? 'btn btn-outline btn-warning' : undefined}>
                                Your Orders
                            </NavLink>
                        </li>
                    </>
                    :
                    <>
                        <li className='font-semibold'>
                            <NavLink to='/'
                                className={({ isActive }) => isActive ? 'btn btn-outline btn-warning' : undefined}>
                                Home
                            </NavLink>
                        </li>
                        <li className='font-semibold'>
                            <NavLink to='/services'
                                className={({ isActive }) => isActive ? 'btn btn-outline btn-warning' : undefined}>
                                Services
                            </NavLink>
                        </li>
                    </>
            }
        </>

    return (
        <div className="navbar bg-transparent">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                        {menuItems}
                    </ul>
                </div>
                <Link to={'/'}>
                    <img className='btn btn-lg btn-ghost rounded-xl' src={logo}></img>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-2">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline btn-warning mr-6 rounded-lg">Appointment</a>
                <div className="">
                    {
                        user ?
                            <>
                                <Link to={'/orders'}>
                                    <button className='mr-2 btn btn-md btn-outline btn-accent'>Your Orders</button>
                                </Link>
                                <button onClick={handleLogout} className='btn btn-md btn-outline btn-accent'>Logout</button>
                            </>
                            :
                            <>  
                                <Link to={'/orders'}>
                                    <button className='mr-2 btn btn-md btn-outline btn-accent'>Your Orders</button>
                                </Link>
                                <NavLink to='/login' className={({ isActive }) => isActive ? 'btn btn-md btn-outline btn-error' : undefined}>
                                    <button>Login</button>
                                </NavLink>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;