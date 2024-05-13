import React, { createContext } from 'react'
import useToggle from '../hooks/useToggle'

export const MenuContext = createContext(null)

const MenuState = ({ children }) => {

    const [open, toggleOpen] = useToggle()

    return (
        <MenuContext.Provider value={{ open, toggleOpen }}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuState