import React, { createContext } from 'react'
import useToggle from '../hooks/useToggle'

export const MenuContext = createContext(null)

const MenuState = ({ children, onOpen}) => {

    const [open, toggleOpen, toggleClose] = useToggle({
        onToggle: onOpen
    })

    return (
        <MenuContext.Provider value={{ open, toggleOpen, toggleClose }}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuState