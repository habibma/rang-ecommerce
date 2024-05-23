import { useState } from "react";
import FormInput from "../../input/FormInput";
import Button from "../../button/Button";

const PasswordChange = () => {

    const [password, setPassword] = useState({
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: ""
    })
    const [passwordError, setPasswordError] = useState("")

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setPassword(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = event => {
        event.preventDefault();

        const user = auth.currentUser;
        const newPassword = password.newPassword;

        updatePassword(user, newPassword).then(() => {
            // Update successful.
            console.log("Update successful")
        }).catch((error) => {
            // An error ocurred
            console.log(Object.entries(error))
            setPasswordError(error.code)
        });

        setPassword({
            oldPassword: "",
            newPassword: "",
            confirmNewPassword: ""
        })
    }

    const fields = [
        {
            id: 'password',
            name: 'oldPassword',
            type: 'password',
            placeholder: 'Old Password...',
            // errorMessage: "Username should be 3-16 charachter and not included any special charachter!",
            required: false,
            // pattern: "^[A-Za-z0-9]{3,16}$",
            label: 'Username'
        },
        {
            id: 'newPassword',
            name: 'newPassword',
            type: 'password',
            placeholder: 'New Password...',
            errorMessage: "Password should be a 6-20 character combination of lowercase, uppercase letters, numbers and special characters (minimum 2 of each type)",
            required: false,
            // pattern: "^(?=.*\d)(?=.*[a-z]{2,})(?=.*[A-Z]{2,})(?=.*[@$!%*?&]{2,})[A-Za-z\d@$!%*?&]{6,20}$",
            label: 'New Password'
        },
        {
            id: 'confirmPassword',
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm Pssword',
            errorMessage: "Passwords don't match!",
            required: true,
            pattern: password.newPassword,
            label: 'Confirm Pssword'
        },
    ]

    return (
        <div className="form-container">
            {/* <h2 className="pro-heading">Password</h2> */}
            <div className="form-container">
                <form className='form' onSubmit={handleSubmit}>
                    {fields.map(field => (
                        <FormInput key={field.id} {...field} value={password[field.name]} onChange={handleChange} />
                    ))}
                    <Button type="primary">Submit</Button>
                </form>
                <p className='fieldError'>{passwordError}</p>
            </div>
        </div>
    )
}


export default PasswordChange;