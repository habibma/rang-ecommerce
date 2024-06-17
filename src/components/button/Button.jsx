import React from 'react'
import './button.scss'

const Button = ({ type, children, ...otherProps }) => {
    let typeClass = type ? `btn-${type}` : "";

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
