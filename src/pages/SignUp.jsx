import React, { useState } from 'react';
import FormInput from '../components/input/FormInput';
import Button from '../components/button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addCustomer } from '../api';
import { nanoid } from 'nanoid';

const SignUp = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("")

    const handleChange = ({ target }) => {
        const { value, name } = target;
        setFormData(prevState => {
            return ({
                ...prevState,
                [name]: value
            })
        })
    }

    const clearForm = () => {
        setFormData({
            email: "",
            password: "",
            confirmPassword: ""
        })
    }

    const handleSubmit = event => {
        event.preventDefault();

        createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                // const user = userCredential.user;
                clearForm();
                //to add customer to customers database
                addCustomer({
                    id: `ID-${nanoid(4)}`,
                    email: formData.email
                })
                navigate('/login') // Redirect to the login page after successful signup
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
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
            pattern: '!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i',
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
            pattern: formData.password,
            label: 'Confirm Pssword'
        },
    ]

    return (
        <div className="form-container">
            <form className='form' onSubmit={handleSubmit}>
                <h2 className='pro-heading'>Register</h2>
                {fields.map(field => (
                    <FormInput key={field.id} {...field} value={formData[field.name]} onChange={handleChange} />
                ))}
                <Button type='primary'>Submit</Button>
                <small>Already have an account? <Link to='/login'>Log In</Link></small>
            </form>
            <p className='fieldError'>{error}</p>
        </div>
    );
}

export default SignUp;