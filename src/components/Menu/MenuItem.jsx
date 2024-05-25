import React, { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext'

const MenuItem = ({ children, value = children }) => {

    const { handleValue } = useContext(MenuContext)

    return (
        <option
            className="menu-item"
            value={value}
            onClick={handleValue}
        >
            {children}
        </option>
    )
}

export default MenuItem