import React, { useContext } from 'react'
import Button from '../button/Button'
import { MenuContext } from '../../context/MenuContext'

const MenuButton = ({ children }) => {

    const { toggleOpen, toggleClose } = useContext(MenuContext);

    return (
        <Button onClick={toggleOpen} onBlur={toggleClose}>{children}</Button>
    )
}

export default MenuButton