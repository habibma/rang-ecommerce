import React, { createContext } from 'react'
import useToggle from '../hooks/useToggle'

export const ModalContext = createContext(null)

const ModalState = ({ children, onOpen}) => {

    const [open, toggleOpen] = useToggle({
        intitialValue: true,
        onToggle: onOpen
    })

    return (
        <ModalContext.Provider value={{ open, toggleOpen }}>
            {children}
        </ModalContext.Provider>)
}

export default ModalState