import React, { useRef, useState } from 'react';
import FormInput from '../../input/FormInput';
import Button from '../../button/Button';


const Login = () => {

  const [signInInputs, setSignIninputs] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState();

  const handleSignIn = ({ target }) => {
    const { value, name } = target;
    setSignIninputs(prevState => {
      return ({
        ...prevState,
        [name]: value
      })
    })
  }
  const passwordRef = useRef(null)
  const usernameRef = useRef(null)

  const handleSubmit = event => {
    event.preventDefault();
    setSignIninputs({ username: "", password: "" })
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
        <h2 className='pro-heading'>Admin Log In</h2>
        {fileds.map(field => (
          <FormInput ref={field.ref} key={field.id} {...field} value={signInInputs[field.name]} onChange={handleSignIn} />
        ))}
        <Button type='primary'>Log in</Button>
        <small>Username: admin Pass:123</small>
      </form>
      <p className='fieldError'>{error}</p>
    </div>
  );
}

export default Login;