import React, { useState } from 'react'
import './button.scss'

const Button = ({ type, children, ...otherProps }) => {
    let typeClass = type ? `btn-${type}` : "";

    console.log(otherProps)

    return (
        <button
            className={`button ${typeClass}`}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button  
