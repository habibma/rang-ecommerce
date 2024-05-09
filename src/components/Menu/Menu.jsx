import React from 'react'
import './menu.scss'
import Toggle from '../../context/Toggle'

const Menu = ({ children, onclick }) => {

    return (
        <Toggle onToggle={onclick}>
            <div className="menu">
                {children}
            </div>
        </Toggle>
    )
}

export default Menu