import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AdminAothRequired = () => {

    const auth = localStorage.getItem('loggedIn');

    const { pathname } = useLocation()
    console.log(pathname);

    if (!auth) {
        return <Navigate
            to='admin-login'
            state={{
                message: "You must login first",
                from: pathname
            }}
            replace
        />
    }

    return (
        <Outlet />
    )
}

export default AdminAothRequired