import React from 'react'
import './menu.scss'
import Toggle from '../../context/Toggle'

const Menu = ({ children, onSelect }) => {

    return (
        <Toggle onToggle={onSelect}>
            <div className="menu">
                {children}
            </div>
        </Toggle>
    )
}

export default Menu