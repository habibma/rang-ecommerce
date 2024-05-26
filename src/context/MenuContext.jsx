import React, { createContext, useEffect, useState } from 'react'
import useToggle from '../hooks/useToggle'

export const MenuContext = createContext(null)

const MenuState = ({ children, onOpen, onChange}) => {

    const [open, toggleOpen] = useToggle({
        onToggle: onOpen
    })

    const [OptionValue, setValue] = useState('')

    const handleValue = ({target}) => {
        setValue(target.value)
        toggleOpen()
    }

    const [focused, setFocused] = useState(false) //To resolve the onBlur bug

    useEffect(() => {
        onChange(OptionValue)
    }, [OptionValue])

    return (
        <MenuContext.Provider value={{ open, toggleOpen, OptionValue, handleValue, focused, setFocused }}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuState