import { auth } from '../../firebase';
import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AuthRequired = () => {

    const { pathname } = useLocation()

    if (!auth.currentUser) {
        return <Navigate to='/login' state={{ message: "You must login first", from: pathname }} replace />
    }

    return (
        <Outlet context={{user: auth.currentUser.displayName || auth.currentUser.email}} />
    )
}

export default AuthRequired