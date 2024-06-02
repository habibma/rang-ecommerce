import React, { useContext } from 'react';
import { GlobalContext } from '../context/Context';
import { Link, useLocation } from 'react-router-dom';
import FormInput from '../components/input/FormInput';
import Button from '../components/button/Button';

const Login = () => {

    const { signInInputs, handleSignIn, isLoggedIn, handleSubmit, error, usernameRef, passwordRef } = useContext(GlobalContext)

    const location = useLocation()

    const fileds = [
        {
            id: 'username',
            name: 'username',
            type: 'text',
            placeholder: 'Username / Email',
            // errorMessage: "Username should be 3-16 charachter and not included any special charachter!",
            required: false,
            // pattern: "^[A-Za-z0-9]{3,16}$",
            label: 'Username',
            ref: usernameRef
        },
        {
            id: 'password',
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            // errorMessage: "Password should be a 6-20 character combination of lowercase, uppercase letters, numbers and special characters (minimum 2 of each type)",
            required: false,
            // pattern: "^(?=.*\d)(?=.*[a-z]{2,})(?=.*[A-Z]{2,})(?=.*[@$!%*?&]{2,})[A-Za-z\d@$!%*?&]{6,20}$",
            label: 'Password',
            ref: passwordRef
        },
    ]

    return (
        <div className="form-container">
            <form className='form' onSubmit={handleSubmit}>
                {location.state?.message && <h3 className='login-first'>{location.state.message}</h3>}
                <h2 className='pro-heading'>Sign In</h2>
                {fileds.map(field => (
                    <FormInput ref={field.ref} key={field.id} {...field} value={signInInputs[field.name]} onChange={handleSignIn} />
                ))}
                <Button type='primary'>{isLoggedIn ? 'Log out' : 'Log in'}</Button>
                <small>New user? <Link to='/signup'>Create an account</Link></small>
            </form>
            <p className='fieldError'>{error}</p>
        </div>
    );
}

export default Login;