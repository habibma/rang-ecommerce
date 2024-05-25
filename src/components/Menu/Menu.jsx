import React from 'react'
import './menu.scss'
import MenuState from '../../context/MenuContext'

const Menu = ({ children, onOpen, onChange }) => {
    return (
        <MenuState onOpen={onOpen} onChange={onChange}>
            <div className="menu">
                {children}
            </div>
        </MenuState>
    )
}

export default Menu