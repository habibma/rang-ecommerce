import React from 'react'
import './menu.scss'
import Toggle from '../../context/Toggle'

const Menu = ({ children, onClick }) => {

    return (
        <Toggle onToggle={onClick}>
            <div className="menu">
                {children}
            </div>
        </Toggle>
    )
}

export default Menu