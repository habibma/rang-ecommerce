import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import React, { useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AuthRequired = () => {

    const [uid, setUid] = useState()


    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         setUid(user.uid);
    //     }
    // });

    const { pathname } = useLocation()

    if (!auth.currentUser) {
        return <Navigate to='/login' state={{ message: "You must login first", from: pathname }} replace />
    }

    return (
        <Outlet context={{}}/>
    )
}

export default AuthRequired