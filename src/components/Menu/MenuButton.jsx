import React, { useContext } from 'react'
import Button from '../button/Button'
import { MenuContext } from '../../context/MenuContext'

const MenuButton = ({ children }) => {

    const { toggleOpen } = useContext(MenuContext);

    return (
        <Button
            onClick={toggleOpen}
        >
            {children}
        </Button>
    )
}

export default MenuButton