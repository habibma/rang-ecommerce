import React, { useContext } from 'react'
import './menu.scss'
import MenuState from '../../context/MenuContext'

const Menu = ({ children, onSelect }) => {

    return (
        <MenuState>
            <div className="menu">
                {children}
            </div>
        </MenuState>
    )
}

export default Menu