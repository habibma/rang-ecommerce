import React from 'react'
import './button.scss'

const Button = ({ type, children, ...restProps }) => {
    return (
        <button className={`button ${type}`} {...restProps}>{children}</button>
    )
}

export default Button