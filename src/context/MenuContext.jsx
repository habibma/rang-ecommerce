import React, { createContext, useEffect, useState } from 'react'
import useToggle from '../hooks/useToggle'

export const MenuContext = createContext(null)

const MenuState = ({ children, onOpen, onChange}) => {

    const [open, toggleOpen, toggleClose] = useToggle({
        onToggle: onOpen
    })

    const [OptionValue, setValue] = useState('')

    const handleValue = ({target}) => {
        setValue(target.value)
        toggleClose()
    }

    useEffect(() => {
        onChange(OptionValue)
    }, [OptionValue])

    return (
        <MenuContext.Provider value={{ open, toggleOpen, toggleClose, OptionValue, handleValue }}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuState