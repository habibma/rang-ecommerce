import React, { createContext, useEffect, useState } from 'react'

export const ToggleContext = createContext(null);

const Toggle = ({ children, onToggle }) => {

    const [on, setOn] = useState(false);

    const toggle = () => {
        setOn(prevState => !prevState)
    }

    useEffect(() => {
        onToggle();
    }, [on])

    const value = { on, toggle, setOn }

    return (
        <ToggleContext.Provider value={value}>
            {children}
        </ToggleContext.Provider>
    )
}


export default Toggle;