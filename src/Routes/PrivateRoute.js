import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { Player } from '@lottiefiles/react-lottie-player';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return (
            <Player
                autoplay
                loop
                src="https://assets2.lottiefiles.com/packages/lf20_uhnbbycj.json"
                className='text-center'
            ></Player>
        )
    }

    if (user === null) {
        return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    }
    return children
};

export default PrivateRoute;