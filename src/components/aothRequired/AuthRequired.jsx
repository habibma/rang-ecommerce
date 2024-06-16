import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { auth } from '../../firebase';

const AuthRequired = () => {

    const currentUser = useAuth()

    const { pathname } = useLocation()

    if (!auth.currentUser) {
        return <Navigate to='/login' state={{ message: "You must login first", from: pathname }} replace />
    }

    return (
        <Outlet context={{user: currentUser.displayName || currentUser.email }} />
    )
}

export default AuthRequired