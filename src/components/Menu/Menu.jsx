import React, { useContext } from 'react'
import './menu.scss'
import MenuState from '../../context/MenuContext'

const Menu = ({ children, onOpen }) => {

    return (
        <MenuState onOpen = {onOpen}>
            <div className="menu">
                {children}
            </div>
        </MenuState>
    )
}

export default Menu