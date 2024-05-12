import React from 'react'

const MenuItem = ({ children }) => {
    return (
        <option className="menu-item">
            {children}
        </option>
    )
}

export default MenuItem