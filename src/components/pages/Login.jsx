import React, { useContext } from 'react';
import { GlobalContext } from '../../context/Context';
import { Link } from 'react-router-dom';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import FormInput from '../input/FormInput';
import Button from '../button/Button';

const Login = () => {

    const { signInInputs, handleSignIn, isLoggedIn, handleSubmit, error } = useContext(GlobalContext)

    const fileds = [
        {
            id: 'username',
            name: 'username',
            type: 'text',
            placeholder: 'Username / Email',
            // errorMessage: "Username should be 3-16 charachter and not included any special charachter!",
            required: false,
            // pattern: "^[A-Za-z0-9]{3,16}$",
            label: 'Username'
        },
        {
            id: 'password',
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            // errorMessage: "Password should be a 6-20 character combination of lowercase, uppercase letters, numbers and special characters (minimum 2 of each type)",
            required: false,
            // pattern: "^(?=.*\d)(?=.*[a-z]{2,})(?=.*[A-Z]{2,})(?=.*[@$!%*?&]{2,})[A-Za-z\d@$!%*?&]{6,20}$",
            label: 'Password'
        },
    ]

    return (
        <>
            <Header />
            <div className="form-container">
                <form className='form' onSubmit={handleSubmit}>
                    <h2 className='pro-heading'>Sign In</h2>
                    {fileds.map(field => (
                        <FormInput key={field.id} {...field} value={signInInputs[field.name]} onChange={handleSignIn} />
                    ))}
                    <Button type='primary'>{isLoggedIn ? 'Log out' : 'Log in'}</Button>
                    <small>New user? <Link to='/signup'>Create an account</Link></small>
                </form>
                <p className='fieldError'>{error}</p>
            </div>
            <Footer />
        </>
    );
}

export default Login;