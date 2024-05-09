import React from 'react'
import './menu.scss'
import Toggle from '../../context/Toggle'

const Menu = ({ children }) => {

    return (
        <Toggle>
            <div className="menu">
                {children}
            </div>
        </Toggle>
    )
}

export default Menu