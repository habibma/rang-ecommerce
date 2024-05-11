import React, { forwardRef, useState } from 'react'

import './input.scss'

const FormInput = forwardRef((props, ref) => {
    const { id, label, onChange, errorMessage, ...otherProps } = props

    const [focused, setFocused] = useState(false)

    return (
        <div className='field'>
            <label htmlFor={id} >{label}</label>
            <input
                id={id}
                className='input'
                {...otherProps}
                ref={ref}
                onChange={onChange}
                onBlur={() => setFocused(true)}
                onFocus={() => otherProps.name === 'confirmPassword' && setFocused(true)}
                focused={focused.toString()}
            />
            <span role="alert">{errorMessage}</span>
        </div>
    )
})

export default FormInput