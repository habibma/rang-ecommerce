import React, { useContext } from 'react'
import Button from '../button/Button'
import { MenuContext } from '../../context/MenuContext'

const MenuButton = ({ children }) => {

    const { toggleOpen, focused } = useContext(MenuContext);

    return (
        <Button
            onClick={toggleOpen}
            onBlur={!focused && open ? toggleOpen : undefined}
        >
            {children}
        </Button>
    )
}

export default MenuButton