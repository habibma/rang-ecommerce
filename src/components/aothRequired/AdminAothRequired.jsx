import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const AdminAothRequired = () => {

    const auth = localStorage.getItem('loggedIn');

    if (!auth) {
        return <Navigate to='admin-login' state={{ message: "You must login first" }} />
    }

    return (
        <Outlet />
    )
}

export default AdminAothRequired