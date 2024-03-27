import React, { useState } from 'react';
import Header from "../header/Header";
import Footer from "../footer/Footer";
import FormInput from '../input/FormInput';
import Button from '../button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {

    const navigate = useNavigate()

    const [inputs, setSignUpinputs] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("")

    const handleChange = ({ target }) => {
        const { value, name } = target;
        setSignUpinputs(prevState => {
            return ({
                ...prevState,
                [name]: value
            })
        })
    }

    const clearForm = () => {
        setSignUpinputs({
            email: "",
            password: "",
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)) {
            setError("Invalid email address");
            return;
        }
        if (inputs.password !== inputs.confirmPassword) {
            setError("your password is not typed samely!")
            return;
        }
        createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
            .then((userCredential) => {
                // Signed up
                // const user = userCredential.user;
                clearForm();
                navigate('/login') // Redirect to the login page after successful signup
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                setError(errorMessage);
            });
    }

    const fields = [
        // {
        //     id: 'username',
        //     name: 'username',
        //     type: 'text',
        //     placeholder: 'Username',
        //     errorMessage: "Username should be 3-16 charachter and not included any special charachter!",
        //     required: true,
        //     pattern: "^[A-Za-z0-9]{3,16}$",
        //     label: 'Username'
        // },
        {
            id: 'email',
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            errorMessage: "It should be a valid email address!",
            pattern:'!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i',
            required: true,
            label: 'Email'
        },
        {
            id: 'password',
            name: 'password',
            type: '',
            placeholder: 'Password',
            errorMessage: "Password should be a 6-20 character combination of lowercase, uppercase letters, numbers and special characters (minimum 2 of each type)",
            required: true,
            // pattern: "^(?=.*\d)(?=.*[a-z]{2,})(?=.*[A-Z]{2,})(?=.*[@$!%*?&]{2,})[A-Za-z\d@$!%*?&]{6,20}$",
            label: 'Password'
        },
        {
            id: 'confirmPassword',
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm Pssword',
            errorMessage: "Passwords don't match!",
            required: true,
            pattern: inputs.password,
            label: 'Confirm Pssword'
        },
    ]

    return (
        <>
            <Header />
            <div className="form-container">
                <form className='form' onSubmit={handleSubmit}>
                    <h2 className='pro-heading'>Register</h2>
                    {fields.map(field => (
                        <FormInput key={field.id} {...field} value={inputs[field.name]} onChange={handleChange} />
                    ))}
                    <Button type='btn-primary' text="Submit"/>
                    <small>Already have an account? <Link to='/login'>Log In</Link></small>
                </form>
                <p className='fieldError'>{error}</p>
            </div>
            <Footer />
        </>
    );
}

export default SignUp;