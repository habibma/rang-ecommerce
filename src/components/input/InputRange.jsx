import React from 'react'
import './input.scss'

const InputRange = ({ children, ...otherProps }) => {
    return (
        <div className="range-input">
            <label htmlFor='range'>Min Price:</label>
            <input
                type='range'
                id='range'
                {...otherProps}
            />
            <span>
                {children}
            </span>
        </div>
    )
}

export default InputRange