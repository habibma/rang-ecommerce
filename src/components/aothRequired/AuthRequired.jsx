import React, { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { GlobalContext } from '../../context/Context';

const AuthRequired = () => {

    const auth = localStorage.getItem('isLoggedIn');

    const { pathname } = useLocation()


    if (!auth) {
        return <Navigate to='login' state={{message: "You must login first", from: pathname}} replace />
    }

    return (
        <Outlet />
    )
}

export default AuthRequired