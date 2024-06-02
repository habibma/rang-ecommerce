import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { GlobalContext } from '../../context/Context';

const AuthRequired = () => {

    const { currentUser } = useContext(GlobalContext)

    const auth = currentUser.isLoggedIn;

    if (!auth) {
        return <Navigate to='login' state={{message: "You must login first"}} />
    }

    return (
        <Outlet />
    )
}

export default AuthRequired