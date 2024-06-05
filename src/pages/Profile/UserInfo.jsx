import { useState, useEffect } from "react";
import { auth } from '../../firebase'
import { updateProfile } from "firebase/auth";
import FormInput from "../../components/input/FormInput";
import Button from "../../components/button/Button";
import Avatar from "../../components/avatar/Avatar";
import { getCustomer, updateCustomer } from "../../api";

const UserInfo = () => {

    const [inputs, setInputs] = useState({
        displayName: "",
        lastName: "",
        email: "",
        city: "",
        street: "",
        number: "",
        postalCode: ""
    });
    const [error, setError] = useState()
    const [status, setStatus] = useState('idle')

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        setStatus('submitting')

        //To update email
        updateProfile(auth.currentUser, inputs)
        .then(() => {
            //To set data on customers database
            updateCustomer(inputs)
        })
        .catch((error) => {
            // An error occurred
            setError(error)
        })
        .finally(() => setStatus('idle')
        );

    }

    //to show user data as default values of info page
    const user = auth.currentUser;
    useEffect(() => {
        if (user !== null) {
            // const displayName = user.displayName;
            const email = user.email;

            getCustomer(email)
                .then(data => setInputs(prevState => ({ ...prevState, ...data })))
        }
    }, [user])

    const identityFields = [
        {
            id: 'firstName',
            name: 'displayName',
            type: 'text',
            placeholder: 'First Name',
            errorMessage: "Name should be 2-16 Characters",
            required: false,
            pattern: "^[A-Za-z]{2,16}$",
            label: 'First Name'
        },
        {
            id: 'lastName',
            name: 'lastName',
            type: 'text',
            placeholder: 'Last Name',
            errorMessage: "Name should be 2-30 Character long",
            required: false,
            pattern: "^[A-Za-z]{2,30} ?$",
            label: 'Last Name'
        },
        {
            id: 'email',
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            errorMessage: "It should be a valid email address!",
            pattern: '!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i',
            required: false,
            label: 'Email'
        },
    ]

    const addressFields = [
        {
            id: 'city',
            name: 'city',
            type: 'text',
            placeholder: 'City',
            errorMessage: "It  should be 2-30 Character long!",
            pattern: "^[A-Za-z]{2,30}$",
            required: false,
            label: 'City'
        },
        {
            id: 'street',
            name: 'street',
            type: 'text',
            placeholder: 'Street',
            errorMessage: "It  should be 2-30 Character long!",
            // pattern: "^[A-Za-z]{2,30}$",
            required: false,
            label: 'Street'
        },
        {
            id: 'number',
            name: 'number',
            type: 'number',
            placeholder: 'Number',
            // errorMessage: "It  should be 2-30 Character long!",
            // pattern: "^[A-Za-z]{2,30}$",
            required: false,
            label: 'Number'
        },
        {
            id: 'postalCode',
            name: 'postalCode',
            type: 'text',
            placeholder: 'Postal Code',
            // errorMessage: "It  should be 2-30 Character long!",
            // pattern: "^[A-Za-z]{2,30}$",
            required: false,
            label: 'Postal Code'
        },
    ]

    console.log(status);
    return (
        <div className="row">
            <h3 className="pro-heading">Personal Information</h3>
            <div className="profile-picture">
                <Avatar>{user.displayName}</Avatar>
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <fieldset className="fieldset">
                    <legend>Identity</legend>
                    {identityFields.map(filed => (
                        <FormInput key={filed.id} {...filed} value={inputs[filed.name]} onChange={handleChange} />
                    ))}
                </fieldset>
                <fieldset className="fieldset">
                    <legend>Address</legend>
                    {addressFields.map(filed => (
                        <FormInput key={filed.id} {...filed} value={inputs[filed.name]} onChange={handleChange} />
                    ))}
                </fieldset>
                <Button type="secondary" disabled={status === "submitting"}>{status === 'submitting'? 'Submitting...' : 'Save Changes'}</Button>
                {error && <p>{error}</p>}
            </form>
        </div >
    )
}

export default UserInfo;