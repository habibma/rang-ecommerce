import React from 'react'
import './button.scss'

const Button = ({ type, children, ...restProps }) => {
    let typeClass = type ? `btn-${type}` : "";
    return (
        <button className={`button ${typeClass}`} {...restProps}>{children}</button>
    )
}

export default Button