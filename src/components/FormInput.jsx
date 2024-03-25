import React, { useState } from 'react'

const FormInput = (props) => {
    const { id, label, onChange, errorMessage, ...otherProps } = props

    const [focused, setFocused] = useState(false)

    return (
        <div className='field'>
            <label htmlFor={id} >{label}</label>
            <input
                id={id}
                className='input'
                {...otherProps}
                onChange={onChange}
                onBlur={() => setFocused(true)}
                onFocus={() => otherProps.name === 'confirmPassword' && setFocused(true)}
                focused={focused.toString()}
            />
            <span role="alert">{errorMessage}</span>
        </div>
    )
}

export default FormInput