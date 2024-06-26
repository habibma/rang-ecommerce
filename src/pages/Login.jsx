import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import FormInput from '../components/input/FormInput';
import Button from '../components/button/Button';
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

    const location = useLocation()
    const navigate = useNavigate();

    const from = location.state?.from || '/profile';

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = ({ target }) => {
        const { value, name } = target;
        setFormData(prevState => {
            return ({
                ...prevState,
                [name]: value
            })
        })
    }
    const passwordRef = useRef(null)
    const usernameRef = useRef(null)

    const [error, setError] = useState();

    const isLoggedIn = localStorage.getItem('isLoggedIn')

    const handleSubmit = event => {
        event.preventDefault();
        // setFormData({ username: "", password: "" })

        //firebase check
        signInWithEmailAndPassword(auth, formData.username, formData.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                localStorage.setItem('isLoggedIn', true)
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === "auth/invalid-email") {
                    usernameRef.current.focus();
                }
                if (errorCode === "auth/missing-password") {
                    passwordRef.current.focus();
                }
                setError(errorMessage)
            });
    }

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
                    <FormInput ref={field.ref} key={field.id} {...field} value={formData[field.name]} onChange={handleChange} />
                ))}
                <Button type='primary'>{isLoggedIn ? 'Log out' : 'Log in'}</Button>
                <small>New user? <Link to='/signup'>Create an account</Link></small>
            </form>
            <p className='fieldError'>{error}</p>
        </div>
    );
}

export default Login;