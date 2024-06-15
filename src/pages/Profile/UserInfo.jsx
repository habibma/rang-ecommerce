import { useState, useEffect } from "react";
import { auth } from '../../firebase'
import { updateProfile } from "firebase/auth";
import FormInput from "../../components/input/FormInput";
import Button from "../../components/button/Button";
import Avatar from "../../components/avatar/Avatar";
import { getCustomer, updateCustomer } from "../../api";
import { useLocation } from "react-router-dom";
import ProfilePicture from "../../components/profilePicture/ProfilePicture";

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
    const location = useLocation()
    // console.log(location);

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

        updateProfile(auth.currentUser, inputs)
            .then(() => {
                //To set data on customers database
                updateCustomer({ ...inputs, email: auth.currentUser.email })
                //To set address on order object and change the order's status
                // updateOrder()
                // updateOrder({customer: inputs.email, status:'On_the_way'})
                // console.log('your order changed to "On the way" status')
            })
            .catch((error) => {
                // An error occurred
                setError(error)
            })
            .finally(() => setStatus('idle')
            );

    }

    //to show user data as default values of inputs
    const user = auth.currentUser;
    useEffect(() => {
        if (user !== null) {
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
            required: true,
            pattern: "^[A-Za-z]{2,16}$",
            label: 'First Name'
        },
        {
            id: 'lastName',
            name: 'lastName',
            type: 'text',
            placeholder: 'Last Name',
            errorMessage: "Name should be 2-30 Character long",
            required: true,
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
            label: 'Email',
            disabled: true
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
            required: true,
            label: 'City'
        },
        {
            id: 'street',
            name: 'street',
            type: 'text',
            placeholder: 'Street',
            errorMessage: "It  should be 2-30 Character long!",
            pattern: "^[A-Za-z]{2,30}$",
            required: true,
            label: 'Street'
        },
        {
            id: 'number',
            name: 'number',
            type: 'text',
            inputMode: "numeric",
            placeholder: 'Number',
            errorMessage: "It  should be 1-30 Character long!",
            pattern: "^[0-9]{2,30}$",
            required: true,
            label: 'Number'
        },
        {
            id: 'postalCode',
            name: 'postalCode',
            type: 'text',
            placeholder: 'Postal Code',
            errorMessage: "It  should be 2-30 Character long!",
            pattern: "^[0-9]{2,30}$",
            required: true,
            label: 'Postal Code'
        },
    ]

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
                <Button type="secondary" disabled={status === "submitting"}>{status === 'submitting' ? 'Submitting...' : 'Save Changes'}</Button>
                {error && <p>{error}</p>}
            </form>
        </div >
    )
}

export default UserInfo;