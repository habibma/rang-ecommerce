import React from 'react'

const Button = ({ type, text, onClick }) => {
    return (
        <button className={`button ${type}`} onClick={onClick}>{text}</button>
    )
}

export default Button